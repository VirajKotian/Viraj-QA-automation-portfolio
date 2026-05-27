"use client"

import { useEffect, useRef } from 'react'

const INTERACTIVE_SELECTORS = [
  'a[href]',
  'button',
  'input',
  'textarea',
  'select',
  'label',
  '[role="button"]',
  'summary',
  'details',
  '[data-cursor="hover"]',
]

const isInteractiveTarget = (target: EventTarget | null) => {
  if (!(target instanceof Element)) return false
  return target.closest(INTERACTIVE_SELECTORS.join(',')) !== null
}

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onPointerMove = (event: PointerEvent) => {
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
      cursor.style.opacity = '1'
      cursor.classList.toggle('custom-cursor--active', isInteractiveTarget(event.target))
    }

    const onPointerLeave = () => {
      cursor.style.opacity = '0'
    }

    const onPointerDown = () => {
      cursor.classList.add('custom-cursor--pressed')
    }

    const onPointerUp = () => {
      cursor.classList.remove('custom-cursor--pressed')
    }

    document.addEventListener('pointermove', onPointerMove)
    document.addEventListener('pointerleave', onPointerLeave)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('pointerup', onPointerUp)

    return () => {
      document.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerleave', onPointerLeave)
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('pointerup', onPointerUp)
    }
  }, [])

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <div className="custom-cursor__shine" />
    </div>
  )
}
