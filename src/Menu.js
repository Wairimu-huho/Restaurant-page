export function menuPage(){
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.style.backgroundColor = "black";
    content.appendChild(div);

    
    
    const h2 = document.createElement('h2');
    h2.textContent = "Welcome to our Menu page";
    h2.style.color = "white";
    content.appendChild(h2);

    document.body.appendChild(content);
    
}