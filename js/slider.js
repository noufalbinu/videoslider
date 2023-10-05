

/*********************************
SLIDER  https://codepen.io/Dimboss/pen/mYGaqo : for reference dont use complete code
*********************************/
let slide=0, slides=document.querySelectorAll('.cover-background > .video_container');

let auto;
function startSl(){
 stopSl();
 auto=setInterval(nextSl, 10000);
}
function stopSl(){
 clearInterval(auto);
}
function nextSl(){
  slides[slide].classList.remove("current_video");
  slide=(slide+1)%slides.length;
  slides[slide].classList.add("current_video");
}
startSl();
document.querySelectorAll("button").forEach((b,i)=>b.onclick=[startSl,stopSl][i]);

/*********************************

Player Controls.
Added Play & Pause Button.
  
**********************************/
function checkup(){
  let video = document.querySelector(".current_video > .video");
};
let video = checkup();
console.log(video);



//Play Button
var playButton = document.getElementById("play_button");

// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();
    // Update the button text to 'Pause'
    playButton.innerHTML = "<img src='img/play_button.svg'>";
    
  } else {
    // Pause the video
    video.pause();
    playButton.innerHTML = "<img src='img/play_button.svg'>";
  }
});

