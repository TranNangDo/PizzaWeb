let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.nav__menu');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let couter = 1;
window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    navbar.classList.remove('active');
}




function validateForm() {
    // Get the value of the input field with id="numb"
    let name = document.getElementById("name").value;
    // If x is Not a Number or less than one or greater than 10
    let textName = "";
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let foodName = document.getElementById("food-name").value;
    let address = document.getElementById("address").value;
    let textEmail = "";
    let textNumber = "";
    let textFood = "";
    let textAddress = "";
    if (name == "") {
        textName = "Bạn Chưa Điền Tên";
    }
    if (email == "") {
        textEmail = "Bạn Chưa Điền Email";
    }
    if (number == "") {
        textNumber = "Bạn Chưa Điền Số Lượng";
    }
    if (foodName == "") {
        textFood = "Bạn Chưa Điền Sản Phẩm";
    }
    if (address == "") {
        textAddress = "Bạn Chưa Điền Địa Chỉ";
    } else {
        textName = "";
        textEmail = "";
        textNumber = "";
        textFood = "";
        textAddress = "";
        alert(`name :  ${name}
email :  ${email} 
number : ${number}
food name : ${foodName}
Address : ${address}`
            // ("Number :" + number) +
            // ("Food Name :" + foodName) +
            // ("Address :" + address));
        )

    }
    document.getElementById("warning-name").innerHTML = textName;
    document.getElementById("warning-email").innerHTML = textEmail;
    document.getElementById("warning-number").innerHTML = textNumber;
    document.getElementById("warning-food").innerHTML = textFood;
    document.getElementById("warning-address").innerHTML = textAddress;
}


setTimeout(function() {
    let x = document.querySelector(".load")
        // console.log(x);
    x.style.display = "none";
}, 3000);




var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}