import type { ReactNode } from 'react'

type PageProps = {
  children: ReactNode
}

export default function Page({ children }: PageProps) {
  return <div className="site-root min-w-0 w-full">{children}</div>
}
