const planBtns = document.querySelectorAll(".plan button");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const modalNo = document.querySelector(".modal-buttons_no");

const closeDisplay = () => {
  modal.style.display = "none";
  backdrop.style.display = "none";
};

planBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
});

modalNo.addEventListener("click", closeDisplay);
backdrop.addEventListener("click", closeDisplay);


