  function openNav(sidebarId) {
    closeAllSidebars();  
    document.getElementById(sidebarId).style.width = "60%";
    document.getElementById(sidebarId).style.display = "block";
    scrollToTop(sidebarId);
  }

  function closeAllSidebars() {
    var sidebars = document.querySelectorAll('.w3-sidebar');
    sidebars.forEach(function (sidebar) {
      sidebar.style.width = "0";
      sidebar.style.display = "block";
    });
  }

  function handleButtonClick(clickedButton, sidebarId) {
    var allButtons = document.querySelectorAll('.button');

    allButtons.forEach(function (button) {
      button.classList.remove('clicked');
    });

    clickedButton.classList.add('clicked');

    if (sidebarId === 'home') {
      closeAllSidebars();
    } else {
      openNav(sidebarId);
    }
  }

  function scrollToTop(sidebarId) {
    var sidebar = document.getElementById(sidebarId);
    sidebar.scrollIntoView({ behavior: 'smooth' });
  }