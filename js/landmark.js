
  //Landmark Hover Effect
document.querySelector("boundary1").onmouseover = function() { 
  alert("test");
}
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
    }
  });
});
