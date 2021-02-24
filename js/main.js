// create a module for our project
(() => {
  // select and work with our audio element
  console.log('fired!');

  // variables at the top
  let theAudio = document.querySelector("audio"),
      playButton = document.querySelector("button"),
      albumArt = document.querySelectorAll(".track-ref");

  // functions go here
  function playTrack() {
    // debugger;
    // grab the value of the custom data attribute
    let targetTrack = this.dataset.trackref;

    // load the new audio source
    theAudio.src = `audio/${targetTrack}.mp3`;
    theAudio.volume = 0.5;
    // load and play the new source
    theAudio.load();
    theAudio.play();
  }
  // event handling at the bottom
  for (cover of albumArt) {
    cover.addEventListener("click", playTrack);
  }

})()
