import { RefObject, useCallback, useEffect } from 'react'

export const useHoverEffect = (refs: RefObject<HTMLDivElement>[]) => {
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      refs.forEach((ref) => {
        if (!ref.current) return

        const rect = ref.current?.getBoundingClientRect()
        const x = e.clientX - rect?.left
        const y = e.clientY - rect?.top

        ref.current.style.setProperty('--mouse-x', `${x}px`)
        ref.current.style.setProperty('--mouse-y', `${y}px`)
      })
    },
    [refs]
  )

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])
}
