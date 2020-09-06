const main = document.getElementById('container');

for (let i = 0; i < 8; i++) {
    let button = document.createElement('button');
    button.style.backgroundColor = localStorage.getItem("color " + [i]);
    button.onclick = function () {
        if (button.style.backgroundColor === "green") {
            button.setAttribute("style", "background-color: red");
        }
        else {
            button.setAttribute("style", "background-color: green");
        }
        let buttonColor = button.style.backgroundColor;
        localStorage.setItem("color " + [i], buttonColor);
        console.log("color " + [i], buttonColor);
    }
    main.appendChild(button);
}