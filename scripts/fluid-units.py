import re
from pathlib import Path

DESIGN_WIDTH = 1857
SECTIONS = Path(__file__).resolve().parent.parent / "src/components/sections"
FLUID = "min(100vw,{0}px)".format(DESIGN_WIDTH)
PX_PATTERN = re.compile(r"\[(-?\d+(?:\.\d+)?)px\]")


def fluid_px(value: str) -> str:
    number = float(value)
    if number == 0:
        return "[0px]"
    # Keep hairline borders readable on small screens.
    if abs(number) <= 1:
        return f"[max({number}px,calc({number}*{FLUID}/{DESIGN_WIDTH}))]"
    return f"[calc({value}*{FLUID}/{DESIGN_WIDTH})]"


def convert_tailwind_px(text: str) -> str:
    return PX_PATTERN.sub(lambda match: fluid_px(match.group(1)), text)


def convert_inline_styles(text: str) -> str:
    def replace_style_px(match: re.Match[str]) -> str:
        prefix, value, suffix = match.groups()
        number = float(value)
        if number == 0:
            return f"{prefix}0{suffix}"
        if abs(number) <= 1:
            return (
                f"{prefix}max({value}px, calc({value}*{FLUID}/{DESIGN_WIDTH})){suffix}"
            )
        return f"{prefix}calc({value}*{FLUID}/{DESIGN_WIDTH}){suffix}"

    return re.sub(
        r"(width:\s*\"|height:\s*\"|top:\s*\"|left:\s*\")(\d+(?:\.\d+)?)px",
        replace_style_px,
        text,
    )


def convert_file(path: Path) -> None:
    original = path.read_text()
    updated = convert_inline_styles(convert_tailwind_px(original))
    if updated != original:
        path.write_text(updated)
        print(f"Converted {path.name}")


def main() -> None:
    for path in sorted(SECTIONS.glob("*.tsx")):
        convert_file(path)


if __name__ == "__main__":
    main()
