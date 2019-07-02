const planBtns = document.querySelectorAll(".plan button");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const modalNo = document.querySelector(".modal-buttons_no");
const toggleBtn = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

const closeDisplay = () => {
  if (modal) {
    modal.style.display = "none";
  } 
  backdrop.style.display = "none";
  mobileNav.style.display = "none";
};

planBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
});

if (modalNo) {
  modalNo.addEventListener("click", closeDisplay);
}
backdrop.addEventListener("click", closeDisplay);

toggleBtn.addEventListener("click", () => {
  backdrop.style.display = "block";
  mobileNav.style.display = "block";
});
