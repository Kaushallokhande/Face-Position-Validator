# Face Position Validator App

This is a simple React web application for validating the position of a face captured through the webcam. It allows users to capture an image through their webcam and checks whether a face is present and properly positioned within the frame.

## Features

- Capture image through webcam
- Validate face position using pre-trained models
- Redirect to home page if face is detected and properly positioned
- Display error message if no face is detected or if the face is not positioned correctly

## Technologies Used

- React
- react-webcam
- react-router-dom
- faceRecognitionService (custom service for face detection)
- react-toastify (for displaying toast notifications)

## Getting Started

1. Clone the repository:

```
git clone https://github.com/your-username/face-position-validator.git
```

2. Navigate to the project directory:

```
cd face-position-validator
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Usage

1. Allow the application to access your webcam.
2. Position your face within the webcam frame.
3. Click on the "Capture" button to take a picture.
4. Wait for the application to validate the face position.
5. If a face is detected and properly positioned, you will be redirected to the home page.
6. If no face is detected or if the face is not positioned correctly, an error message will be displayed.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or create a pull request.
