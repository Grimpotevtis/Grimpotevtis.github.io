var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "image/castle.jpg") {
    myImage.setAttribute("src", "image/knight.jpg");
  } else {
    myImage.setAttribute("src", "image/castle.jpg");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
var myNaming = document.querySelector("a1");
function setUserName() {
    var myName = prompt("Пожалуйста введите имя рыцаря");
    localStorage.setItem("Имя", myName);
    myHeading.textContent = "Маленький рыцарь, " + myName;
    myNaming.textContent = myName;
  }
  if (!localStorage.getItem("Имя")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("Имя");
    myHeading.textContent = "Маленький рыцарь, " + storedName;
    myNaming.textContent = storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };