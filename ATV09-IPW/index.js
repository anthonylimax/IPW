const list = document.querySelectorAll("li");
const sections = document.querySelectorAll("section");

list.forEach(element => {
  element.addEventListener('click', () => {
    setAllSections();
    element.classList.toggle("active")
    sections[+element.dataset.open].style.display = "flex";
    sections[+element.dataset.open].classList.add("active");
  })
});

const setAllSections = () => {
  list.forEach((element) => {
    element.classList.remove("active")
  })
  sections.forEach(element => {
    element.classList.remove("active");
    element.style.display = "none";
  });
}