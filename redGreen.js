const main = document.getElementById('container');

for (let i = 0; i < 8; i++) {
    let button = document.createElement('button');
    let status = "";
    
    if (localStorage.getItem("color " + [i]) === "green") {
        status = "Ready!";
    } else {
        status = "Not Ready!";
    }
    button.textContent = "Station " + [i + 1] + ', ' + status;
    button.style.backgroundColor = localStorage.getItem("color " + [i]);
    button.onclick = function () {
        if (button.style.backgroundColor === "green") {
            button.setAttribute("style", "background-color: red");
            button.textContent = "Station " + [i + 1] + ', Not Ready!';
        }
        else {
            button.setAttribute("style", "background-color: green");
            button.textContent = "Station " + [i + 1] + ', Ready!';
        }
        let buttonColor = button.style.backgroundColor;
        localStorage.setItem("color " + [i], buttonColor);
        console.log("color " + [i], buttonColor);
    }
    main.appendChild(button);
}