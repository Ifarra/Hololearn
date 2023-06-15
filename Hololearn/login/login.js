const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


bruh.addEventListener('click', function () {
	popupdumb.classList.add("open-popup");
	const daym = setTimeout(aghhh, 3000);
})

function aghhh() {
	popupdumb.classList.remove("open-popup");
  }

function tunggu() {
	popupisnt.classList.remove("open-popup");
  }

function kosong() {
	popupisnt.classList.remove("open-popup");
  }

Password.addEventListener("keypress", function(event) {
// If the user presses the "Enter" key on the keyboard
if (event.key === "Enter") {
	// Cancel the default action, if needed
	event.preventDefault();
	// Trigger the button element with a click
	document.getElementById("btnpress").click();
}
});


/*if (localStorage.hasOwnProperty("user") === true) {
	const myTimeout = setTimeout(anon, 2000);
  } else if (localStorage.hasOwnProperty("arrafi") === true) {
	const myTimeout = setTimeout(myGreeting, 2000);
  }
*/