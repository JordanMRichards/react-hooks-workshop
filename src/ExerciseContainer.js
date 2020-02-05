import React, { useCallback } from 'react'
import Cookies from 'js-cookie'
import useFadingClassToggle from './useFadingClassToggle'

function Popup ({ title, content, className, onClose }) {
  return (
    <div className={className}>
      <button className='close-btn' onClick={onClose}>x</button>
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  )
}

function ExerciseContainer ({ exerciseKey, title, description, ClassVersion, FunctionalVersion, sharedProps = {} }) {
  const cookieName = `seen_popup_${exerciseKey}`
  const popupConfig = {
    initialClassName: 'popup',
    fadeOutClassName: 'fadeOut500',
    initiallyShowFor: (Cookies.get(cookieName)) ? null : 8000,
    onHidden: useCallback(() => {
      Cookies.set(cookieName, true, { expires: 1 })
    }, [cookieName])
  }
  const [popupClass, shouldRenderPopup, triggerPopup, triggerPopupHide] = useFadingClassToggle(popupConfig)

  return (
    <section className='exercise'>
      {(shouldRenderPopup) ?
          <Popup className={popupClass} title={title} content={description} onClose={triggerPopupHide} />
        : <button onClick={triggerPopup} className='trigger-popup-btn'>View Intro</button>
      }
      <aside className='class'>
        <h2>Original Class</h2>
        <ClassVersion {...sharedProps} />
      </aside>
      <aside className='functional'>
        <h2>Functional</h2>
        <FunctionalVersion {...sharedProps} />
      </aside>
    </section>
  )
}

export default ExerciseContainer