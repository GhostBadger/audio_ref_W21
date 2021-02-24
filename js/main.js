// create a module for our project
(() => {
  // select and work with our audio element
  console.log('fired!');

  // variables at the top
  let theAudio = document.querySelector("audio"),
      controlButtons = document.querySelectorAll(".audio-controls button"),
      albumArt = document.querySelectorAll(".track-ref");

  // functions go here
  function loadTrack() {
    // debugger;
    // grab the value of the custom data attribute
    let targetTrack = this.dataset.trackref;

    // load the new audio source
    theAudio.src = `audio/${targetTrack}.mp3`;
    theAudio.volume = 0.5;
    // load and play the new source
    theAudio.load();

    // call the play track function from here
    playTrack();
  }

  function rewindTrack() {
    // rewind the current track back to the beginning
    // no round brackets = property - something that describes the element
    theAudio.currentTime = 0;
  }

  function stopTrack() {
    // round brackets is a method -> something the element can do
    theAudio.pause();
  }

  function playTrack() {
    // run the play method (built-in function that belongs to the audio element)
    theAudio.play();
  }
  // event handling at the bottom
  for (cover of albumArt) {
    cover.addEventListener("click", loadTrack);
  }

  // get the play button -> the first element in the collection
  controlButtons[0].addEventListener("click", playTrack);
  controlButtons[1].addEventListener("click", stopTrack);
  controlButtons[2].addEventListener("click", rewindTrack);
})()
