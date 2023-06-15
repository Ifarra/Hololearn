

//login validation
function validate() {
    var Username=document.getElementById("Username").value;
    var Password=document.getElementById("Password").value;

if(Username=="ozanarafi"&& Password=="8907rtyu"){
	popup.classList.add("open-popup");
	const myTimeout = setTimeout(myGreeting, 3000);
    localStorage.setItem('arrafi', 123)
    return false
}
else if(Username=="user"&& Password=="userjuga"){
	popup.classList.add("open-popup");
	const myTimeout = setTimeout(anon, 3000);
    localStorage.setItem('user', 123)
    return false
} else if(Username==""&& Password==""){
	popupisnt.classList.add("open-popup");
	const myTimeout = setTimeout(kosong, 3000);
    return false
}
else {
    popupisnt.classList.add("open-popup");
	const mymy = setTimeout(tunggu, 3000);
    return false
}
}

function anon() {
    //window.location.replace("https://astolfowebsiteproject1.on.drv.tw/ayundarisu/homepage/");
    window.location = "/ebook/index.html"
}

function myGreeting() {
    //window.location.replace("https://astolfowebsiteproject1.on.drv.tw/ayundarisu/homepage/");
    window.location = "/ebook/index.html"
}