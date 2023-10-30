/*********************************
SLIDER  https://codepen.io/Dimboss/pen/mYGaqo : Inspired From

*********************************/
let slide=0, 
slides = document.querySelectorAll('.cover-background > .video_container');
textslide = document.querySelectorAll('.text > .slide_text');

let auto;
function startSl(){
 stopSl();
 auto=setInterval(nextSl, 5000);
}
function stopSl(){
 clearInterval(auto);
}
function nextSl(){
  //video slide move next
  slides[slide].classList.remove("current_video");
  textslide[slide].classList.remove("current_text");
  slide=(slide+1)%slides.length; //0+1=1 % 6
  slides[slide].classList.add("current_video");
  textslide[slide].classList.add("current_text");

  //text slide move next
  playCheckup(); // Call checkup function when current_video class is added
  
  let pointer = document.querySelector(".point");
  pointer.dataset.current = slide; //change pointer data attribute value with slide
}
startSl();

  //status pointer selector
  let pointer = document.querySelector(".point");
  const elStatus = Array.from(document.querySelectorAll('.status .stat'));

  elStatus.forEach(stat => {
      //on mouse click change pointer, slide & text
      stat.addEventListener('click', () => {
      //on mouse click change pointer
      let vlg = stat.dataset.key; 
      slides[slide].classList.remove("current_video");
      textslide[slide].classList.remove("current_text");
      slide = vlg;
      slides[slide].classList.add("current_video");  
      textslide[slide].classList.add("current_text");
      pointer.dataset.current = slide; //change pointer data attribute value with slide
    });
  });
  /*********************************
  Function for Player Controls.
  Added Play & Pause Button.
          &
  Slider controls
  **********************************/   
  function playCheckup() {
    video = document.querySelector(".current_video > .video");
    video.autoplay = true;
    video.load();

  /*********************************
   
   * Play Pause Button fix: https://stackoverflow.com/questions/36803176/how-to-prevent-the-play-request-was-interrupted-by-a-call-to-pause-error
  
  **********************************/

  // Initializing values
  var isPlaying = true;
  // On video playing toggle values
  video.onplaying = function() {
      isPlaying = true;
  };
  // On video pause toggle values
  video.onpause = function() {
      isPlaying = false;
  };
  // Play video function
  async function playVid() {      
      if (video.paused && !isPlaying) {
          return video.play();
      }
  } 
  // Pause video function
  function pauseVid() {     
      if (!video.paused && isPlaying) {
          video.pause();
      }
  }
  //Play Button
  var playButton = document.getElementById("play_button");
  // Event listener for the play/pause button
  playButton.addEventListener("click", function() {
    if(pauseVid() == true) {
      // Play the video
      playVid();
      // Update the button text to 'Pause'
      playButton.innerHTML = "<img src='img/linkedin.png'>";
    } else if(playVid() == true) {
      // Pause the video
      pauseVid();
      playButton.innerHTML = "<img src='img/linkedin.png'>";
    }
  });
};
playCheckup();
//Start & Stop 
let stopbutton = document.querySelector(".play_button");
let stoper;
stopbutton.addEventListener("click", function () {
  stoper = stopbutton.dataset.slideStop;
  stopbutton.dataset.slideStop = stoper === 'stop' ? 'start' : 'stop';
  switch (stoper) {
  case 'start': {
    console.log('start'); 
    stopSl();
  } break;
  case 'stop': {   
    console.log('stop'); /* */
    startSl();
  } break;
}
});



  