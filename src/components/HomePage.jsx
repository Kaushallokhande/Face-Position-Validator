import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/homepage.module.css';
import nextbg from '../assets/nextbg.webp';

const HomePage = () => {
  const [typedName, setTypedName] = useState('');

  const name = 'Welcome Back User!';
  const typingSpeed = 150;

  useEffect(() => {
    const typeNextChar = (index) => {
      if (index <= name.length) {
        setTypedName(name.substring(0, index));
        setTimeout(() => typeNextChar(index + 1), typingSpeed);
      }
    };

    typeNextChar(0);

    const isFaceDetected = localStorage.getItem('isFaceDetected');
    if (isFaceDetected) {
      localStorage.removeItem('isFaceDetected');
      toast('Welcome!', {
        position: "top-center",
        autoClose: 1000,
        type: "success",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, []);

  return (
    <div className={styles.homeMain}>
      <ToastContainer />
      <img src={nextbg} className={styles.bg} alt="Background" />
      <div className={styles.head}>
        <div style={{ fontSize: "2em" }}><span className='about__name'>{typedName}</span></div>
      </div>
    </div>
  )
}

export default HomePage;
