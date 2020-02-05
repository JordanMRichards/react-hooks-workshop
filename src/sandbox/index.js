import React, { useState, useEffect, useRef, useCallback } from 'react'

function Sandbox () {
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
  const [messages, setMessages] = useState([])

  const onNewMessage = useCallback(message => {
    setMessages((messages) => [ ...messages, message])
  }, [])

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'en-GB'
    recognition.continuous = true
    recognition.start()
    const onSpeech = event => {
      onNewMessage(event.results[event.results.length -1][0].transcript)
    }
    recognition.addEventListener('result', onSpeech)
    return () => {
      recognition.abort()
    }
  },
  [onNewMessage])

  return (
    <div className='sandbox'>
      {messages.map((message, i) => (
        <p className='message fadeIn' key={`${message}${i}`}>{message}</p>
      ))}
    </div>
  )
}

export default Sandbox
