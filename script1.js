const fun = () => {
    const n = document.getElementById('name').value;
    const f = document.getElementById('fla').value;
    const use = document.getElementById('result');
    const k = document.getElementById('k');
    while (use.firstChild) {
        use.removeChild(use.firstChild);
    }
    k.innerHTML = `${n} wants ${f} flavour of icecream`;
    if (f === "strawberry") {
        use.style.backgroundImage = "url('pic1.jpg')";
    } else if (f === "chocolate") { 
        use.style.backgroundImage = "url('pic2.jpg')"; 
    } else if (f === "vanilla") {
        use.style.backgroundImage = "url('pic3.jpg')"; 
    } else if (f === "kesar-pista") { 
        use.style.backgroundImage = "url('pic4.jpg')"; 
    } else {
        use.style.backgroundImage = "url('default.jpg')"; 
    }
}
