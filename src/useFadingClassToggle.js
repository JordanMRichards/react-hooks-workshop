import { useState, useEffect, useRef, useCallback } from 'react'

export default function useFadingClassToggle ({ initialClassName, fadeOutClassName, initiallyShowFor = null, onHidden = null }) {
  const [className, setClassName] = useState(initialClassName)
  const [shouldRender, setShouldRender] = useState(false)

  const timeouts = useRef([])
  const cleanupTimeouts = useCallback(() => {
    timeouts.current.forEach((timeout) => {
      clearTimeout(timeout)
    })
    timeouts.current = []
  }, [])

  const triggerShow = useCallback(() => {
    setShouldRender(true)
    setClassName(`${initialClassName}`)
  }, [initialClassName])

  const triggerHideSequence = useCallback(
    () => {
      const fadeOut = () => setClassName(`${initialClassName} ${fadeOutClassName}`)
      const hide = () => {
        setShouldRender(false)
        if (onHidden) onHidden()
        cleanupTimeouts()
      }
      fadeOut()
      timeouts.current.push(setTimeout(hide, 500))
    },
    [initialClassName, fadeOutClassName, onHidden, cleanupTimeouts]
  )

  useEffect(
    () => {
      if (initiallyShowFor) {
        triggerShow()
        timeouts.current.push(setTimeout(triggerHideSequence, initiallyShowFor))
      }
      return cleanupTimeouts
    },
    [triggerShow, triggerHideSequence, initiallyShowFor, cleanupTimeouts]
  )

  return [
    className,
    shouldRender,
    triggerShow,
    triggerHideSequence
  ]
}
