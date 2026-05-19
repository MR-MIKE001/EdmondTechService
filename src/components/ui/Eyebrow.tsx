import type { ReactNode } from 'react'

interface Props { children: ReactNode; light?: boolean }

export default function Eyebrow({ children, light = false }: Props) {
  return (
    <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{children}</p>
  )
}
