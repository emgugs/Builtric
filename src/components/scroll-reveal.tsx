'use client'

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
} from 'react'

type ScrollRevealProps<T extends ElementType> = {
  as?: T
  children: React.ReactNode
  className?: string
  delay?: number
  /** Animate on mount (e.g. hero) instead of on scroll */
  immediate?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

export function ScrollReveal<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  delay = 0,
  immediate = false,
  ...rest
}: ScrollRevealProps<T>) {
  const Component = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(immediate)

  useEffect(() => {
    if (immediate) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate])

  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${visible ? 'scroll-reveal-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Component>
  )
}
