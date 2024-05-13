export function initialisePage(){

    const content = document.createElement('div');
    content.id = 'content';
    content.style.backgroundColor = "black";

    const header = document.createElement('header');
    header.id = 'header';
    const nav = document.createElement('nav');
    nav.innerHTML = '<ul><li><a id ="Home" href ="#">Home</a></li><li><a id ="About" href ="#">About</a></li><li><a id ="Menu" href ="#">Menu</a></li><li><a id ="Services" href ="#">  Services</a></li></ul>';
    nav.classList.add('navigation');
    header.appendChild(nav);

    document.body.appendChild(header);
    


    const h2 = document.createElement('h2');
    h2.textContent = "Welcome to our  page";
    h2.style.color = "white";
    content.appendChild(h2);

    document.body.appendChild(content);

}