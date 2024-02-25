import React, { useEffect, useRef } from "react";
import styles from "./styles/app.module.css";
import { ToastContainer, toast } from 'react-toastify';
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { loadModels, detectFace } from "./components/faceRecognitionService";

const App = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  useEffect(() => {
    loadModels();
  }, []);

  const handleCapture = async () => {
    toast('Detecting...', {
      position: "top-center",
      autoClose: 1000,
      type: "info",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    const imageSrc = webcamRef.current.getScreenshot();
    const isFaceDetected = await detectFace(imageSrc);
    if (isFaceDetected) {
      localStorage.setItem("isFaceDetected", true);
      navigate("/home");
    }else{
      toast('Face not detected or not positioned correctly. Please try again.', {
        position: "top-center",
        autoClose: 5000,
        type: "error",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    
  };

  return (
    <div>
      <h1 className={styles.header}>Face Position Validator</h1>
      <ToastContainer />
      <div className={styles.container}>
        <div className={styles.main}>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg"/>
          <button onClick={handleCapture}>Capture</button>
        </div>
      </div>
    </div>
  );
};

export default App;
