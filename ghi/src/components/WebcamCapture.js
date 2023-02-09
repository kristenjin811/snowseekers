import React, { useState, useRef } from 'react'
import Webcam from 'react-webcam'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WebcamCapture = ({setSkiResort}) => {
  const webcamRef = useRef(null)
  const [webcamImage, setWebcamImage] = useState(null)
  const [showWebcam, setShowWebcam] = useState(false)

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot()
    setWebcamImage(imageSrc)
    setSkiResort((prevState) => ({ ...prevState, image: imageSrc }))
    setShowWebcam(false)
  }
  const cancel = () => {
    setShowWebcam(false)
  }

  return (
    <>
      <Link color="inherit" size="sm" style={{color: 'black', decoration: 'underlined'}} onClick={() => setShowWebcam(true)}><i className="fa fa-camera" aria-hidden="true"></i>
        {webcamImage ? ' Retake photo' : ' Take your own photo'}
        {showWebcam && (
          <Webcam
          audio={false}
          height={350}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={350}
          />
          )}
      </Link>
      {showWebcam && (
          <button className="btn btn-light webcam-capture-button" size="sm" onClick={capture}>
            Capture photo
          </button>
      )
      }
      <br></br>
      <br></br>
      {webcamImage ? 'Your chosen photo: ' : ''}
      {webcamImage && <img src={webcamImage} alt="Webcam capture" />}
    </>
  );
};

export default WebcamCapture;
