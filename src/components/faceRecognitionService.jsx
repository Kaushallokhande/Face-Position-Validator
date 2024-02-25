import * as faceapi from 'face-api.js';

export const loadModels = async () => {
  await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
  await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
  await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
};

export const detectFace = async (imageSrc) => {
  const img = await faceapi.fetchImage(imageSrc);
  const detections=await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
  console.log(detections);
  return detections.length > 0;
};
