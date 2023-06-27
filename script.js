//Responsible for switching between dark and light mode.
function darkLightMode() 
{
  const body = document.body;
  const navBar = document.querySelector(".nav-bar");
  const icon = document.getElementById("icon-change");

  body.classList.toggle("light-mode-body");
  navBar.classList.toggle("light-mode-nav-bar");

  const isLightMode = body.classList.contains("light-mode-body");

  icon.className = isLightMode ? "fas fa-moon fa-beat" : "fas fa-sun fa-beat";
}

//Responsible for page scrolling depending on which button has been clicked.
function pageScroll()
{
  const topScroll = 0;
  const aboutScroll = 870;
  const resumeScroll = 1740;
  const projectsScroll = 2610;

  const topButton = document.getElementsByClassName("top-button")[0];
  const aboutButton = document.getElementsByClassName("about-button")[0];
  const resumeButton = document.getElementsByClassName("resume-button")[0];
  const projectsButton = document.getElementsByClassName("projects-button")[0];

  scrollToPosition(topButton, topScroll);
  scrollToPosition(aboutButton, aboutScroll);
  scrollToPosition(resumeButton, resumeScroll);
  scrollToPosition(projectsButton, projectsScroll);
}

//Supporting function to pageScroll that reduces code duplication.
function scrollToPosition(button, scroll)
{
  button.addEventListener("click", function()
  {
    window.scrollTo({
      top: scroll,
      behavior: 'smooth'
    });
  });
}

//Responsible for hide and display of projects using buttons.
function projectsDisplay()
{
  const button1 = document.getElementsByClassName("project-button-1")[0];
  const button2 = document.getElementsByClassName("project-button-2")[0];
  const project1 = document.getElementsByClassName("project-1")[0];
  const project2 = document.getElementsByClassName("project-2")[0];

  button1.addEventListener('click', function() {
    project1.style.display = 'none';
    project2.style.display = 'block';
  });
  
  button2.addEventListener('click', function() {
    project1.style.display = 'block';
    project2.style.display = 'none';
  });
}
