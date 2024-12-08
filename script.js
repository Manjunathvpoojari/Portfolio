$(document).ready(function () {
   console.log("jQuery is running");
  // Highlight the active link
  $('nav ul li a').on('click', function () {
    $('nav ul li a').removeClass('active');
    $(this).addClass('active');
  });

  
  const now = new Date();
  const hours = now.getHours();
  let greeting = "Welcome!";
  if (hours < 12) {
    greeting = "Good Morning!";
  } else if (hours < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }
  $('main').prepend(`<h2>${greeting}</h2>`);
});

