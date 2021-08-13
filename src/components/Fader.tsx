import React, { useEffect, useState } from 'react'

type propTypes = {
  text: string
  timer: number
  textStyle?: string
  color: string
  fadeOut: boolean
  toggleFadeOut: () => void
}

const Fader = ({ text, timer, textStyle, color, fadeOut, toggleFadeOut }: propTypes) => {
  const [fadeText, setFadeText] = useState({
    fade: 'fade-out-fader'
  })
  useEffect(() => {
    if (fadeText.fade === 'fade-in-fader') {
      setFadeText({
        fade: 'fade-out-fader'
      })
      toggleFadeOut()
    } else {
      const timeOut = setInterval(() => {
        setFadeText({
          fade: 'fade-in-fader'
        })
      }, timer)
      return () => clearInterval(timeOut)
    }
  }, [fadeOut])

  return (
    <div style={{ textAlign: 'center', display: 'block' }}>
      <h1
        className={`fader-text${textStyle ? textStyle : ''} ${fadeText.fade}`}
        style={{ color }}
      >
        {text}
      </h1>
    </div>
  )
}

export default Fader
