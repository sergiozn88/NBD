import re
from pathlib import Path

AGENT_TOOLS = Path('/Users/seragzn/.cursor/projects/Users-seragzn-Documents-NBD/agent-tools')
OUT = Path('/Users/seragzn/Documents/NBD/src/components/sections')

RESTORES = {
    '3a7f9777-616b-4bc8-917c-a5b3bb085480.txt': 'EvidenceSection',
    'a5c1b51a-cb0e-4cec-b8f7-244e4333223d.txt': 'PersonasSection',
    'b78865c6-96af-4f84-8b5d-43c00a9130bc.txt': 'JourneySection',
    '37cc51d1-1f6e-4b84-bbf0-9d65e336c009.txt': 'VisualLanguageSection',
    '3e4808c0-0dcd-4242-9434-5246a9cc175d.txt': 'IdeationSection',
    'f7344b79-b7d0-4300-a63c-21daa9aa27a0.txt': 'DeliverablesSection',
}


def restore(name: str, source: Path) -> None:
    text = source.read_text()
    if 'SUPER CRITICAL' in text:
        text = text.split('SUPER CRITICAL')[0].rstrip()

    text = re.sub(
        r'export default function Section\(\)',
        f'export default function {name}()',
        text,
        count=1,
    )

    OUT.joinpath(f'{name}.tsx').write_text(text + '\n')
    print(f'Restored {name}.tsx')


for filename, section_name in RESTORES.items():
    restore(section_name, AGENT_TOOLS / filename)
