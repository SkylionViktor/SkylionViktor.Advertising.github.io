const brgBlog = document.querySelector('.header-blog_brg');

brgBlog.addEventListener('click', function () {
   this.classList.toggle('active');
   document.querySelector('.header-blog_menu').classList.toggle('header-blog_visible')
   docScrol();
});
function docScrol() {
   let body = document.body;
   if (brgBlog.classList.contains('active')) {
      body.style.overflow = 'hidden'
   } else {
      body.style.overflow = 'auto'
   }
}