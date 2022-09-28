function temperature() {
    //Add image dynamically
    const temp = Math.floor(Math.random()*41) - 5;
    console.log(temp);

    let prop;

    if(temp < 6) {
        prop = 'freezing';
    } else if(temp < 10) {
        prop = 'cold';
    } else if(temp < 16) {
        prop = 'pleasant';
    } else if(temp < 21) {
        prop = 'warm';
    } else {
        prop = 'hot'
    }

    const tempEl = document.getElementById('temp');
    tempEl.appendChild(createImg(prop));
    tempEl.appendChild(createText(prop, temp));

}

function createImg(prop) {
    const img = document.createElement("img");
    img.src = `img/${prop}.jpg`;
    console.log(img);
    return img;
}

function createText(prop, temp) {
    const paragraph = document.createElement("p");
    paragraph.classList.add('text');
    paragraph.innerHTML = `The weather is ${temp} degrees and it is ${prop}.`;
    console.log(paragraph);
    return paragraph;
}

temperature();