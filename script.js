const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');


hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});


window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

//form

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    const form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    const status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Message sent. Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      const data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

  //highlight active nav

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav nav-ul li");

  window.addEventListener("scroll", ()=> {
    let current ="";

    sections.forEach( section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if(pageYOffset >= (sectionTop - sectionHeight / 3)){
        current = section.getAttribute("id");
      }
    })
    console.log(current);
  })

  navLi.forEach(li => {
    li.classList.remove("active");
    if(li.classList.contains(current)){
      li.classList.add("active");
    }
  })