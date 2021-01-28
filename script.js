//Source: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
var mybutton = document.getElementById("topbutton");
window.onscroll = function () { scrollFunction() };

function scrollFunction(){
    var d = document.body.offsetHeight / 4.0;
    if (document.body.scrollTop >= d || document.documentElement.scrollTop >= d) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Source1: https://www.w3schools.com/howto/howto_css_overlay.asp
function enlarge(img) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("source").src = img.src;
    document.getElementById("overlay").addEventListener("click", off);
}
function off(event) {
    if (event.target == this) {
        document.getElementById("overlay").style.display = "none";
    }
}


function checkEmail(event) {
    event.preventDefault();
    let status = document.querySelector("span.error");
    let email = document.querySelector("input[name='email']").value;
    if (email.indexOf("@") !== -1 && (email.endsWith(".com") || email.endsWith(".edu"))) {
        status.textContent = "Email successfully recorded.";
        status.style.color = "green";
    } else {
        status.textContent = "Invalid email address.";
        status.style.color = "red";
    }
}