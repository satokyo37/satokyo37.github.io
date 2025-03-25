function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName} さん、Mozilla はかっこいいよ。`;
    }
}

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/ずうっといっしょ！.jpg") {
        myImage.setAttribute("src", "images/ファタール.jpg");
    } else {
        myImage.setAttribute("src", "images/ずうっといっしょ！.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
    }

myButton.onclick = () => {
    setUserName();
};
