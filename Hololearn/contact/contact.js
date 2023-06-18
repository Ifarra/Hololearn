var from = document.getElementById("form");

function hapus() {
    document.getElementById('form').reset();
}

from.addEventListener("submit", function (event) {
event.preventDefault();

var name = document.getElementById("name").value;
window.alert("Thanks for your feedback " + name);

hapus();
});


