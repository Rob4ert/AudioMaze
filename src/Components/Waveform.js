import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import WaveSurfer from 'wavesurfer.js'
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'
import styled from 'styled-components'
import "./Waveform.css"

const Waveform = ({ audio }) => {
  const containerRef = useRef()
  const waveSurferRef = useRef({
  isPlaying: () => false,
})
const [isPlaying, toggleIsPlaying] = useState(false)
  
// grid-template-columns: 100% 1fr;

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      
      container: containerRef.current,
      responsive: true,
      cursorWidth: 0,
      barWidth: 2,
      barHeight: 1,
      waveColor: "#FF3D00",
    })
    waveSurfer.load(audio)
    waveSurfer.on('ready', () => {
      waveSurferRef.current = waveSurfer
    })
    return () => {
      waveSurfer.destroy()
    }
  }, [audio])

  return (
    <>
     <div className='player'>
      <button onClick={() => { waveSurferRef.current.playPause()
          toggleIsPlaying(waveSurferRef.current.isPlaying())
        }}
        type="button" className='playerButton'
      >
        {
        isPlaying ? <FaPauseCircle size="3em" /> : <FaPlayCircle size="3em" />
        }
      </button>
      <div ref={containerRef} />
      </div>
      </>
  )
}

Waveform.propTypes = {
  audio: PropTypes.string.isRequired,
}

export default Waveform