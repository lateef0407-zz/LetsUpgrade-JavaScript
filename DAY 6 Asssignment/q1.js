let color = ["red", "yellow", "white", "orange", "blue", "green", "black"];

// console.log(Math.floor(Math.random() * color.length));

let setColor = () => {
    let index = Math.floor(Math.random() * color.length);

    document.body.style.backgroundColor = color[index];
}

setInterval(setColor, 5000); 