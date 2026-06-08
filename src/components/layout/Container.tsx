import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav' | 'aside'
}

export default function Container({
  children,
  className = '',
  as: Tag = 'div',
}: ContainerProps) {
  return <Tag className={`site-container ${className}`.trim()}>{children}</Tag>
}
