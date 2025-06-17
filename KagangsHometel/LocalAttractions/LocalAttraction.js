// const slider = document.getElementById("imageSlider");
// const slides = document.querySelectorAll(".slide");
// const prevBtn = document.querySelector(".slide-btn.left");
// const nextBtn = document.querySelector(".slide-btn.right");

// let currentIndex = 0;

// function updateSlider() {
//   const slideWidth = slides[0].offsetWidth + 20; // 20px margin
//   slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

//   // Disable buttons
//   prevBtn.disabled = currentIndex === 0;
//   nextBtn.disabled = currentIndex >= slides.length - visibleSlides();
// }

// function visibleSlides() {
//   const wrapperWidth = document.querySelector(".slider-wrapper").offsetWidth;
//   const slideWidth = slides[0].offsetWidth + 20;
//   return Math.floor(wrapperWidth / slideWidth);
// }

// function prevSlide() {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateSlider();
//   }
// }

// function nextSlide() {
//   if (currentIndex < slides.length - visibleSlides()) {
//     currentIndex++;
//     updateSlider();
//   }
// }

// window.addEventListener("resize", updateSlider);
// window.addEventListener("load", updateSlider);

// // Modal functionality
// const modal = document.getElementById("imageModal");
// const modalImg = document.getElementById("modalImage");
// const captionText = document.getElementById("modalCaption");

// document
//   .querySelectorAll("#attractions .owl-carousel .item img")
//   .forEach((img) => {
//     img.addEventListener("click", () => {
//       modal.style.display = "block";
//       modalImg.src = img.src;
//       captionText.innerText = img.alt;
//     });
//   });

// function closeModal() {
//   modal.style.display = "none";
// }
