const brg = document.querySelector('.header_brg');
const statistics = document.querySelectorAll('.statistics_card');
// let slide = document.querySelectorAll('.case_slide');
// let slider = document.querySelector('.case_slider');
let wrapp = document.querySelector('.case_slider-wrapper');
let active = document.querySelector('.slide_active');

window.addEventListener('load', function(){
   const width = window.innerWidth;
   let slidHEidht = slider.clientHeight;
   wrapp.style.height = slidHEidht+'px';
   if (width > 840) {
      muve()
   }else{dontMuve()}
   this.addEventListener('resize', ()=>{
      let slidHEidht = slider.clientHeight;
      wrapp.style.height = slidHEidht + 'px';
      const width = window.innerWidth;
      if (width > 840) {
         muve()
      } else { dontMuve() }
   })
})

brg.addEventListener('click', function(){
   this.classList.toggle('active');
   document.querySelector('.header_nav').classList.toggle('header_visible')
   docScrol();
});
function muve(){
   statistics.forEach((el, index) => {
      if (index % 2 == 0) {
         el.classList.add('muveUp')
      } else { el.classList.add('muveDoun') }
   });
}
function dontMuve(){
   statistics.forEach((el, index) => {
      if (index % 2 == 0) {
         el.classList.remove('muveUp')
      } else { el.classList.remove('muveDoun') }
   });
}
function docScrol(){
   let body  = document.body;
   if (brg.classList.contains('active')) {
      body.style.overflow = 'hidden'
   }else{
      body.style.overflow = 'auto'
   }
}


