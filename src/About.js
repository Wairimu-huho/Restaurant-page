export function aboutPage(){
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.style.backgroundColor = "black";
    content.appendChild(div);

    

    const h2 = document.createElement('h2');
    h2.textContent = 'About Us page';
    h2.style.color = "white";
    content.appendChild(h2);

    document.appendChild(content);
}