import React, { useState } from 'react'
import Webcam from 'react-webcam'

const WebcamComponent = () => <Webcam />

const videoConstraints = {
  width: 500,
  height: 500,
  facingMode: 'user'
}

export const WebcamCapture = () => {
  const [image, setImage] = useState('')
  const webcamRef = React.useRef(null)

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImage(imageSrc)
    console.log(imageSrc)
  }

  return (
    <div className='flex w-full h-full justify-center'>
      <div className='h-full w-1/2'>
        <Webcam
          audio={false}
          // height={300}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          // width={400}
          videoConstraints={videoConstraints}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            capture()
          }}
          className='webcam-btn'
        >
          Capture
        </button>
      </div>
      <div className='h-full w-1/2'>
        <img src={image} />
      </div>
    </div>
  )

  return (
    <div className='container'>
      <div className='webcam-img'>
        <Webcam
          audio={false}
          height={200}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          width={220}
          videoConstraints={videoConstraints}
        />

        <img src={image} />
      </div>
      <div>
        {image != '' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setImage('')
            }}
            className='webcam-btn'
          >
            Retake Image
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className='webcam-btn'
          >
            Capture
          </button>
        )}
      </div>
    </div>
  )
}
