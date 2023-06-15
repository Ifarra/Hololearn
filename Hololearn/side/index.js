const toggleMenu = document.querySelector('nav .toggle-menu');
		const content = document.querySelector('#content');
		const closeBtn = document.querySelector('nav .nav-menu .close-btn');
		const body = document.querySelector("body");
		const nav = document.querySelector("nav");
		const modeToggle = document.querySelector(".dark-light");
		const sidebarOpen = document.querySelector(".sidebarOpen");
		const siderbarClose = document.querySelector(".siderbarClose");

		toggleMenu.addEventListener('click', function () {
			content.classList.add('active');
		})

		closeBtn.addEventListener('click', function () {
			content.classList.remove('active');
		})

		window.addEventListener('resize', function () {
			if(this.innerWidth > 576) {
				content.classList.remove('active');
			}
		})

//BAR
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


