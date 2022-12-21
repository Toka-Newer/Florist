// slider 
var index = 0;
var sliders = document.getElementsByClassName("mySlides");
var dir = "next";

function showSlider(direction) {
    if (direction == "next") {
        index++;
        if (index == sliders.length) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = sliders.length - 1;
        } else {
            index--;
        }
    }
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].classList.remove('main');
    }
    sliders[index].classList.add('main');
}
setInterval(function () {
    showSlider(dir);
    if (dir == "next") {
        dir = "prev";
    } else {
        dir = "next";
    }
}, 3000);

// filter
let btnContainer = document.getElementById("filterbtn");
let btnFilter = btnContainer.getElementsByClassName("btnFilter");
for (var i = 0; i < btnFilter.length; i++) {
    btnFilter[i].addEventListener("click", function () {
        var current = btnContainer.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}

var all = document.querySelectorAll(".all");
var arr = [];
all.forEach((item) => {
    arr.push(item);
});
console.log(arr)
var result;

function filterFlowers(flowers) {
    result = arr.filter((item) => {
        if (flowers == "all") {
            item.style.display = "block";
        } else if (flowers == "bouquet") {
            item.style.display = "none";
            if (item.classList.contains("bouquet")) {
                item.style.display = "block";
            }
        } else if (flowers == "basket") {
            item.style.display = "none";
            if (item.classList.contains("basket")) {
                item.style.display = "block";
            }
        }
        else if (flowers == "box") {
            item.style.display = "none";
            if (item.classList.contains("box")) {
                item.style.display = "block";
            }
        }
        else if (flowers == "shelf") {
            item.style.display = "none";
            if (item.classList.contains("shelf")) {
                item.style.display = "block";
            }
        }
        else if (flowers == "gift") {
            item.style.display = "none";
            if (item.classList.contains("gift")) {
                item.style.display = "block";
            }
        }
        else if (flowers == "bouquet") {
            item.style.display = "none";
            if (item.classList.contains("bouquet")) {
                item.style.display = "block";
            }
        }
    });
}