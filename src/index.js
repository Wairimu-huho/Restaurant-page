import './style.css';
import { initialisePage} from "./Page-content";
import {homePage } from "./Home";
import { menuPage } from "./Menu";
import {aboutPage } from "./About";
import {servicesPage } from "./Services";

document.addEventListener('DOMContentLoaded', () => {
    initialisePage();

    console.log('index');

    const homeButton = document.getElementById('Home');
    const aboutButton = document.getElementById('About');
    const menuButton = document.getElementById('Menu');
    const servicesButton = document.getElementById('Services');

    homeButton.addEventListener('click', () => {
        switchTab('Home');
    });

    aboutButton.addEventListener('click' , () => {
        switchTab('About');
    });
    
    menuButton.addEventListener('click', () => {
        switchTab('Menu');
    });

    servicesButton.addEventListener('click', () => {
        switchTab('Services');
    });
});

function switchTab(tabName){

    if (tabName === 'Home') {
        clearContent();
        homePage();
    } else if (tabName === 'About') {
        clearContent();
        aboutPage();
    } else if (tabName === 'Menu') {
        clearContent();
        menuPage();
    }else if (tabName === 'Services') {
        clearContent();
        servicesPage();
    }
}

function clearContent() {
     const content = document.getElementById('content');
     content.innerHTML = '';
}
