const components = ()=> {
    const h1 = document.createElement("h1");
    h1.innerText = "Hello webpack!";
    return h1;
}

document.body.appendChild(components())