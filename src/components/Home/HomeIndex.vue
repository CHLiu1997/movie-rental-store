<script>
export default {
  data() {
    return {
      slideIndex: 1,
      methods: {
        prevSlide() {
          this.showSlides((this.slideIndex -= 1));
        },
        nextSlide() {
          this.showSlides((this.slideIndex += 1));
        },
        showSlides(n) {
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {
            this.slideIndex = 1;
          }
          if (n < slides.length) {
            this.slideIndex = slides.length;
          }
          for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          for (let i = 0; i < slides.length; i++) {
            // dots[i].className = dots[i].className.replace(" active", "");
            dots[i].classList.remove("active");
          }
          slides[this.slideIndex - 1].style.display = "block";
          dots[this.slideIndex - 1].classList.add("active");
        },
      },
    };
  },
};
</script>
<template src="./template.html"></template>
<style src="./style.css"></style>
<style src="./reset.css"></style>
