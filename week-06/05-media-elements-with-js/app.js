console.log("Its media time!");

// I want to have some buttons on the page which control my audio

// First, in my HTML I might want to display my audio
// But I want individual buttons for play, pause, stop, FF and RW

// My javascript needs to "see" things that are in my HTML
const indianGuitarAudio = document.getElementById("indian-guitar-audio");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const ffButton = document.getElementById("ff-button");
const rwButton = document.getElementById("rw-button");
const currentTimePTag = document.getElementById("current-time");

console.log(indianGuitarAudio);

// My buttons need and "event listener" so that they can do a thing when an event happns
playButton.addEventListener("click", function () {
  // console.log("I have been clicked. Play the music maestro");
  indianGuitarAudio.play();
});

pauseButton.addEventListener("click", function () {
  // console.log("pause button clicked");
  indianGuitarAudio.pause();
});

ffButton.addEventListener("click", function () {
  console.log("ff button clicked");
  indianGuitarAudio.currentTime = indianGuitarAudio.currentTime + 10;
  // indianGuitarAudio.currentTime += 10 // exactly the same result
});

rwButton.addEventListener("click", function () {
  console.log("rw button clicked");
  indianGuitarAudio.currentTime = indianGuitarAudio.currentTime - 10;
});

// To 'stop' our audio:
// indianGuitarAudio.stop() <-- this unfortunately doesnt work. COME ON JAVASCRIPT!!!
// instead:
// myAudio.pause(), myAudio.currentTime = 0

// how to update an HTML element with the current time of the audio
// https://stackoverflow.com/questions/4993097/html5-display-audio-currenttime
// add an event listener to the audio itself
indianGuitarAudio.addEventListener("timeupdate", function () {
  console.log("change"); //see me in the console.
  const theTime = Math.floor(indianGuitarAudio.currentTime);
  currentTimePTag.textContent = `Current Time: ${theTime}/${Math.floor(
    indianGuitarAudio.duration
  )}`;
});
