let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}


//  sliding head
const slideInContainer = document.querySelector('.heading');

function handleScroll() {
  const threshold = 400;
  if (window.scrollY > threshold) {
    slideInContainer.classList.add('slide-in');
  }
}


window.addEventListener('scroll', handleScroll);
//  sliding ends




// chat box

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

