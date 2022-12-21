// add to cart
if (!localStorage.count) {
    window.localStorage.setItem("count", "0");
}
document.getElementById('count').innerHTML = localStorage.count;
function cartClick() {
    localStorage.count = Number(localStorage.count) + 1;
    document.getElementById('count').innerHTML = localStorage.count;
}
let addTo = document.getElementsByClassName("add");
for (let i = 0; i < addTo.length; i++) {
    addTo[i].addEventListener("click", cartClick);
}

// scrollToTop
let scroll = document.getElementById("scroll");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 500) {
        scroll.style.display = "block";
    } else if ((document.documentElement.clientHeight + window.scrollY) >= document.documentElement.scrollHeight) {
        scroll.style.display = "block";
    } else {
        scroll.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo(0, 0);
}