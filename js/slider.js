const slider = document.querySelector('.case_slider')
const { ...slides } = document.querySelectorAll('.case_slide')
const btn = document.querySelector('.case_btn-block')
const nav = document.querySelectorAll('.case_nav')
let activeSlide = 2;

function slideMuve() {
   let length = 0;
   for (i in slides) {
      i++
      length = Number(i);
   }
   for (i in slides) {
      slides[i].dataset.slide = +i + 1;
      if (slides[i].dataset.slide == activeSlide) {
         slides[i].dataset.active = true
      }
      slides[i].style.cssText = `
         position:  absolute;
         top: 0;
         left: 50%;
         transform: translate(-50%) scale(.9);
         opacity:  0.9;
         transition: all .3s
      `;
      slides[i].parentElement.style.position = 'relative';

      let height;
      if (slides[i].dataset.active) {
         height = slides[i].getBoundingClientRect().height;
      }

      slider.style.height = `${height+55}px`

   }

   for (i in slides) {
      slides[i].addEventListener('click', function () {
         for (i in slides) {
            slides[i].dataset.active = false;
         }
         this.dataset.active = true;
         activeSlide = this.dataset.slide;
         positionSlide()
         btnNav();
      })
   }
   nav.forEach(function (el) {
      el.addEventListener('click', function () {
         if (el.classList.contains('case_prev')) {
            console.log(activeSlide);
            if (activeSlide > 1) {
               activeSlide--
            }
            positionSlide()
            btnNav();
         } else if (el.classList.contains('case_next')) {
            if (activeSlide < length) {
               activeSlide++
            }
            positionSlide()
            btnNav();
         }
      })
      console.log();
   })

   positionSlide();
   btnNav();
}

function positionSlide() {
   let num = 2;
   for (i in slides) {
      let positionL = 156;
      let positionR = 28;
      // num++
      if (slides[i].dataset.slide < activeSlide) {
         slides[i].style.transform = `translate(-${positionL}%, 0) scale(.9)`;
      }
      if (slides[i].dataset.slide > activeSlide) {
         slides[i].style.transform = `translate(${positionR * num}%, 0) scale(.9)`;
         // num*=4;
      }
      if (slides[i].dataset.slide == activeSlide) {
         slides[i].style.transform = 'translate(-50%) scale(1.1)'
         slides[i].style.opacity = '1'
      }
   }
}

function btnNav() {
   let children = `<div class="case_btn"></div>`;
   btn.innerHTML = '';
   let count = 1;
   for (i in slides) {
      btn.innerHTML += children;
   }
   let btnArr = btn.children;

   for (let i = 0; i < btnArr.length; i++) {
      btnArr[i].classList.remove('case_btn-active')
      btnArr[i].dataset.btn  = count++;
   }
   btnArr[activeSlide - 1].classList.add('case_btn-active')
   // case_btn-active
   btnClik();
}

window.addEventListener('resize', ()=>{
   if(window.innerWidth < 920){
      for(i in slides){
         slides[i].style.width = `${window.innerWidth}px`;
         let height;
         if (slides[i].dataset.active) {
            height = slides[i].getBoundingClientRect().height;
         }

         slider.style.height = `${height + 55}px`
      }
   }
})

function btnClik(){
   let arr = document.querySelectorAll('.case_btn');

   arr.forEach(el =>{
      el.addEventListener('click', function(){
         arr.forEach(el =>{
            el.classList.remove('case_btn-active')
         });
         this.classList.add('case_btn-active');
         let  num = this.dataset.btn;
         activeSlide = Number(num);
         console.log(activeSlide);
         positionSlide();
      })
   })

}

slideMuve();
btnClik();