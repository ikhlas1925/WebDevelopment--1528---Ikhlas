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
var featureSubmitBtn = document.getElementById("featureSubmitBtn");
var featureFrm = document.getElementById("featureFrm");
var featureLoadingDiv = document.getElementById("featureLoadingDiv");

featureSubmitBtn.addEventListener("click", async function () {
  // Make the loader div visible
  featureLoadingDiv.classList.remove("human-removed");
  // Hide the form from the user
  featureFrm.classList.add("human-removed");
  await onfeaturesubmit();
  featureFrm.reset();
  featureLoadingDiv.classList.add("human-removed");
  featureFrm.classList.remove("human-removed");
  await onfeatureload()

});

async function onfeatureload() {
  var response = await fetch("http://localhost:3000/features");
  var result = await response.json();

  var featureList = document.getElementById("feature-list")
  featureList.innerHTML = "";

  for (var i = 0; i < result.length; i++) {
    var lielement = document.createElement("li");
    lielement.className = "list-group-item";
    lielement.innerHTML =
      result[i].body + "<span class='badge badge-success'>" + result[i].author + "," + result[i].time + "</span>";
    featureList.appendChild(lielement);
  }

}
onfeatureload();

async function onfeaturesubmit() {
  await fetch("http://localhost:3000/features", {
    method: "post",
    body: JSON.stringify({
      name: document.getElementById("username").value,
      feature: document.getElementById("userfeature").value
    }),
    headers: {
      "content-type": "application/json"
    }
  });
}
