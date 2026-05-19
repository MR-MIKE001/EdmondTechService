import type { ElementType, ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface Props {
  children: ReactNode
  delay?: 0 | 1 | 2 | 3 | 4
  className?: string
  as?: ElementType
}

const delayClass = ['', 'd1', 'd2', 'd3', 'd4']

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: Props) {
  const { ref, inView } = useInView()
  return (
    /* @ts-expect-error generic ref */
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${delayClass[delay]} ${className}`}>
      {children}
    </Tag>
  )
}
