/*********************************
SLIDER  https://codepen.io/Dimboss/pen/mYGaqo : Inspired From

*********************************/
let slide=0, 
slides = document.querySelectorAll('.cover-background > .video_container');
textslide = document.querySelectorAll('.text > .slide_text');

let auto;
function startSl(){
 stopSl();
 auto=setInterval(nextSl, 12000);
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


var count = 0;
function leftSl(){
  count--;
  if(count < 0) {
      count = slides.length -1;
      slides[slide].classList.remove("current_video");
      textslide[slide].classList.remove("current_text");
    
      slide = count; 
      
      slides[slide].classList.add("current_video");
      textslide[slide].classList.add("current_text");
      pointer.dataset.current = slide;
      
  } else {
      slides[slide].classList.remove("current_video");
      textslide[slide].classList.remove("current_text");
    
      slide = count; 
      
      slides[slide].classList.add("current_video");
      textslide[slide].classList.add("current_text");
      pointer.dataset.current = slide;
  }
}


startSl();

//Status Point Selector
let pointer = document.querySelector(".point");
const elStatus = Array.from(document.querySelectorAll('.status .stat'));
elStatus.forEach(stat => {
  //on mouse click change pointer, slide & text
  stat.addEventListener('click', () => {
    let vlg = stat.dataset.key; 
    slides[slide].classList.remove("current_video");
    textslide[slide].classList.remove("current_text");
    slide = vlg;
    slides[slide].classList.add("current_video");  
    textslide[slide].classList.add("current_text");
    pointer.dataset.current = slide; //change pointer data attribute value with slide
  });
});

//Next Right Navigation Buttons
let aLeft = document.querySelector(".left-arrow");
aLeft.addEventListener('click', () => {
  leftSl();
});
let aRight = document.querySelector(".right-arrow");
aRight.addEventListener('click', () => {
  nextSl();
});


// Handling & Delay on Scroll
let sTop = document.querySelector(".maze");
let isScrolling = false;

sTop.addEventListener('wheel', (e) => {
  e.stopPropagation();

  if (!isScrolling) {
    isScrolling = true;
    let delta = e.deltaY;
    if (delta === -100) {
      leftSl();
    } else if (delta === 100) {
      nextSl();
    }
    setTimeout(() => {
      isScrolling = false;
    }, 1000); // Set your desired delay time in milliseconds
  }
});
  /*********************************
  Function for Player Controls.
  Added Play & Pause Button.
          &
  Slider controls
  **********************************/   
function playCheckup() {
  video = document.querySelector(".current_video > .video");
  if (screenWidth < 800){
    video.autoplay = false;
  } else {
    video.autoplay = true;
    video.load();
  }

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









