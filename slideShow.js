'use strict'

const images = [
    { 'id': '1', 'url':'./imagem/thor.jpg' },
    { 'id': '2', 'url':'./imagem/homem-de-ferro.jpg' },
    { 'id': '3', 'url':'./imagem/capitao-america.jpg' },
    { 'id': '4', 'url':'./imagem/viuva-negra.jpg' },
    { 'id': '5', 'url':'./imagem/hulk.jpg' },
    { 'id': '6', 'url':'./imagem/gaviao-arqueiro.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `        
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] ); 
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
