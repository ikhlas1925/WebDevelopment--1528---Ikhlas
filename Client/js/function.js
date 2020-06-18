//Hamburger Setup
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {

    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    //Burger Animation
    burger.classList.toggle('toggle');
  });
}

navSlide();

//Creativity Text Animation
const creativity = document.querySelectorAll("#creativity path");

for (let i = 0; i < creativity.length; i++) {
  console.log(`Letter ${i} is ${creativity[i].getTotalLength()}`);
}

//NavBar
$(document).ready(function () {

  $(window).scroll(function () {

    var height = $('.wrap').height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= height - 40) {
      $('.nav-container').addClass('solid-nav');
    } else {
      $('.nav-container').removeClass('solid-nav');
    }

  });
});

//Testimonials

var testSubmitBtn = document.getElementById("testSubmitBtn");
var testFrm = document.getElementById("testFrm");
var testLoadingDiv = document.getElementById("testLoadingDiv");

testSubmitBtn.addEventListener("click", async function () {
  // Make the loader div visible
  testLoadingDiv.classList.remove("loader-removed");
  // Hide the form from the user
  testFrm.classList.add("loader-removed");
  await ontestsubmit();
  testFrm.reset();
  testLoadingDiv.classList.add("loader-removed");
  testFrm.classList.remove("loader-removed");
  await ontestload()

});

async function ontestload() {
  var response = await fetch("http://localhost:3000/testimonials");
  var result = await response.json();

  var testList = document.getElementById("test-list")
  testList.innerHTML = "";

  for (var i = 0; i < result.length; i++) {
    var lielement = document.createElement("li");
    lielement.className = "list-group-item";
    lielement.innerHTML =
      result[i].body + "<span class='badge badge-success'>" + result[i].name + ", Age - " + result[i].age + ", " + " test - " + result[i].test + ", " + result[i].time + "</span>";
    testList.appendChild(lielement);
  }

}
ontestload();

async function ontestsubmit() {
  
  await fetch("http://localhost:3000/testimonials", {
    method: "post",
    body: JSON.stringify({
      name: document.getElementById("username").value,
      age: document.getElementById("username").age,
      test: document.getElementById("usertesti").value
    }),
    headers: {
      "content-type": "application/json"
    }
  });
}
//Contact

$('form').on('submit', (e)=>{
  e.preventDefault();

  const name = $('#name').val().trim();  
  const email = $('#email').val().trim();  
  const text = $('#text').val().trim();

  const data = {
    name,
    email,
    text
  };
  
  $.post('/email', data, function(){
    console.log('Server recieved');
  });
});;