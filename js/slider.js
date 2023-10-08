/*********************************
 
SLIDER  https://codepen.io/Dimboss/pen/mYGaqo : Inspired From

*********************************/

//status pointer selector
  
let slide=0, slides = document.querySelectorAll('.cover-background > .video_container');

let auto;
function startSl(){
 stopSl();
 auto=setInterval(nextSl, 5000);
}
function stopSl(){
 clearInterval(auto);
}
function nextSl(){
  slides[slide].classList.remove("current_video")
  slide=(slide+1)%slides.length;
  slides[slide].classList.add("current_video")
  playCheckup(); // Call checkup function when current_video class is added
  
  let pointer = document.querySelector(".point");
  pointer.dataset.current = slide; //change pointer data attribute value with slide


  //on mouse click change pointer
  const elStatus = Array.from(document.querySelectorAll('.status .stat'));
  elStatus.forEach(stat => {
        stat.addEventListener('click', () => {
          let vlg = stat.dataset.key;
          if(vlg == slide) {
            console.log('same');
          } else {
              slides[slide].classList.remove("current_video");
              slide=(slide+vlg)%slides.length;
              slides[slide].classList.add("current_video");
              pointer.dataset.current = slide; //change pointer data attribute value with slide
              console.log(vlg, slide);
            }
        });
  });
  
}
startSl();
document.querySelector(".play_button").forEach((b,i)=>b.onclick=[startSl,stopSl][i]);





/*********************************

Function for Player Controls.
Added Play & Pause Button.
  
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
      pauseVid()
      playButton.innerHTML = "<img src='img/linkedin.png'>";
    }
  });
};
playCheckup();


