# EasEL - Easy Education and Learning 💻

![image](https://user-images.githubusercontent.com/54478821/144739414-25ee0871-962b-4ad3-901d-3c5e7a0b0ab4.png)

EasEL is an entire learning experience with tools like attentiveness trackers and closed captions for lessons, providing a solution which is easy, smart and interactive.

## Features

### Attention Tracker Tool

Perhaps one of the most important aspects of classroom teaching involves teachers being able to gauge the reaction of students by looking at their faces and see if they are paying attention. The teacher could change their style of teaching or ask the student to pay attention when they are doing not so. Attention tracker tool enables teachers to check if the students are paying attention to what is being taught and check if they need to change something.EasEL uses Machine Learning model to detect attentiveness and an API for closed captions.

### Closed Captions

- Even when everyone does understands English, it is possible students are not able to comprehend what the teacher is saying due to factors such as the speed of the speech or the accent the teacher might have.
- Another thing being, when a student wishes to make their notes during the duration of the class, they don't have to take out a notebook and write down everything. Using this feature, students can make notes using voice recognition.
- These notes can be saved and downloaded by the user before they close the application.

### EasEL Classroom

- A user can start or join a meet using this feature. It includes:
- Video meet/ Camera
- Voice/ Microphone
- Share screen feature
- Chatbox Feature

The link for the meet is generated whenever a new meet is created and any number of users can join using the link

## Screenshot

<img src="./Mockup%20designs/combined%20mockup.jpg" alt="Project Screenshots">

## Installation

Make sure you are in master-backend branch

```sh=
$ git clone https://github.com/Eas-El/EasEl.git
$ npm install
$ nodemon app.js
```

## Testing the application

```sh=
npx cypress open
```

- It opens cypress in an automated chrome window.
- Choose the test file you want to run
- See the results

## Test results

Running the test results at the moment should have something like this

<img src="./assets/img/cypress-ui.jpeg" alt="test">
<img src="./assets/img/landing-test-result.jpeg" alt="test">
<img src="./assets/img/analyse-page-test-result.jpeg" alt="test">
<img src="./assets/img/notes-page-test-result.jpeg" alt="test">
