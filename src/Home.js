import  imageUrl  from "./bugger.jpeg";

export function homePage(){
    const content = document.getElementById('content');
    const div = document.createElement('div');
    content.appendChild(div);
    
    const divs = document.createElement('div');
    divs.classList.add('container');

    const divRow = document.createElement('div');
    divRow.classList.add('row');

    const divCol1 = document.createElement('div');
    divCol1.classList.add('col-1');
    const myImage = document.createElement('img');
    myImage.src = imageUrl;
    divCol1.appendChild(myImage);
    divRow.appendChild(divCol1);

    const divCol2 = document.createElement('div');
    divCol2.classList.add('col-2');
    const par = document.createElement('p');
    par.classList.add('about-p');
    par.textContent = 'Welcome to our restaurant we offer a wide range of services and an excuisite menu.Get to enjoy our dishes and drinks at an affordable price.We also do deliveries within Nairobi';
    divCol2.appendChild(par);
    divRow.appendChild(divCol2);

    divs.appendChild(divRow);

    content.appendChild(divs);

    document.body.appendChild(content);
    
}