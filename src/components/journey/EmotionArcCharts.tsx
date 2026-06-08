type ChartProps = {
  className?: string
}

/** ENBD transfer journey — delighted → frustrated arc with indicator dots */
export function EmotionArcEnbd({ className = '' }: ChartProps) {
  return (
    <svg
      viewBox="0 0 1340 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block h-full w-full ${className}`.trim()}
      role="img"
      aria-label="User emotion arc from delighted to frustrated"
    >
      <path d="M0 42H1326" stroke="#E8E4DC" strokeWidth="1.11247" strokeDasharray="4.45 4.45" />
      <path
        d="M0 42C66.3 42 66.3 54.6 132.6 54.6C198.9 54.6 198.9 33.6 265.2 33.6C331.5 33.6 331.5 16.8 397.8 16.8C464.1 16.8 464.1 46.2 530.4 46.2C596.7 46.2 596.7 25.2 663 25.2C729.3 25.2 729.3 37.8 795.6 37.8C861.9 37.8 861.9 58.8 928.2 58.8C994.5 58.8 994.5 50.4 1060.8 50.4C1127.1 50.4 1127.1 4.2 1193.4 4.2C1259.7 4.2 1259.7 4.2 1326 4.2V84H0V42Z"
        fill="#1A3A6B"
        fillOpacity="0.08"
      />
      <path
        d="M0 42C66.3 42 66.3 54.6 132.6 54.6C198.9 54.6 198.9 33.6 265.2 33.6C331.5 33.6 331.5 16.8 397.8 16.8C464.1 16.8 464.1 46.2 530.4 46.2C596.7 46.2 596.7 25.2 663 25.2C729.3 25.2 729.3 37.8 795.6 37.8C861.9 37.8 861.9 58.8 928.2 58.8C994.5 58.8 994.5 50.4 1060.8 50.4C1127.1 50.4 1127.1 4.2 1193.4 4.2C1259.7 4.2 1259.7 4.2 1326 4.2"
        stroke="#1A3A6B"
        strokeWidth="2.78119"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="397.8" cy="16.8" r="7.5" fill="#C9902B" />
      <circle cx="928.2" cy="58.8" r="7.5" fill="#EF4444" />
      <circle cx="1060.8" cy="50.4" r="7.5" fill="#EF4444" />
      <circle cx="1326" cy="4.2" r="7.5" fill="#16A34A" />
    </svg>
  )
}

export function EmotionArcEi({ className = '' }: ChartProps) {
  return (
    <svg
      viewBox="0 0 1340 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block h-full w-full ${className}`.trim()}
      role="img"
      aria-label="User emotion arc from excited to skeptical"
    >
      <path d="M0 42H1326" stroke="#E8E4DC" strokeWidth="1.26143" strokeDasharray="5.05 5.05" />
      <path
        d="M0 21C109.869 21 109.869 50.4 219.737 50.4C331.5 50.4 331.5 37.8 441.369 37.8C553.131 37.8 553.131 8.4 663 8.4C772.869 8.4 772.869 29.4 882.737 29.4C994.5 29.4 994.5 16.8 1104.37 16.8C1214.24 16.8 1214.24 4.2 1326 4.2V84H0V21Z"
        fill="#1B6B3A"
        fillOpacity="0.08"
      />
      <path
        d="M0 21C109.869 21 109.869 50.4 219.737 50.4C331.5 50.4 331.5 37.8 441.369 37.8C553.131 37.8 553.131 8.4 663 8.4C772.869 8.4 772.869 29.4 882.737 29.4C994.5 29.4 994.5 16.8 1104.37 16.8C1214.24 16.8 1214.24 4.2 1326 4.2"
        stroke="#1B6B3A"
        strokeWidth="3.15357"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="219.737" cy="50.4" r="7.5" fill="#EF4444" />
      <circle cx="663" cy="8.4" r="7.5" fill="#C9902B" />
      <circle cx="1326" cy="4.2" r="7.5" fill="#16A34A" />
    </svg>
  )
}
