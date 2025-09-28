'use strict';

const imagens = [
    { 'id': '1', 'url': './img/x.png' },
    { 'id': '2', 'url': './img/queen.png' },
    { 'id': '3', 'url': './img/dragon-boy.webp' },
    { 'id': '4', 'url': './img/ghost-blade.png' },
    { 'id': '5', 'url': './img/the-johnnies.webp' },
    { 'id': '6', 'url': './img/loli.webp' },
    { 'id': '7', 'url': './img/lucky-cyan.webp' },
    { 'id': '8', 'url': './img/ahu.png' },
    { 'id': '9', 'url': './img/e-soul.webp' },
    { 'id': '10', 'url': './img/nice.png' }
]

const containerItems = document.getElementById('container-items')


const loadImagens = (imagens,container)=>{
    //percorrendo o array passado no parametro da função
    imagens.forEach(imagen=> {
        //Criando uma div chmada item que vai guardar a imagem e vai inserir no container passado no paramentro da função
        container.innerHTML +=`
        <div class ='item'>
        <img src='${imagen.url}'
        </div>
        `
    })

}


loadImagens(imagens, containerItems);


let items = document.querySelectorAll('.item');

const previous=()=>{
    //Ele está pegando o primeiro elemento da lista de items e adicionando no final do containerItems
    containerItems.appendChild(items[0]);
    //Aqui ele está carregando a agora com o primeiro elemento no final
    items = document.querySelectorAll('.item');
}

const next=()=>{
    //Aqui ele está pegando a posição do ultimo elemento de items
    const lastItem=items[items.length-1]
    //Aqui ele está pegando o ultimo elemento e inserindo antes(em primeiro lugar)
    containerItems.insertBefore(lastItem, items[0]);
    //Aqui ele está carregando a lista após as mudanças
    items = document.querySelectorAll('.item');
}

//Eventos que iram ocorre no click do butão
document.querySelector('#previous').addEventListener('click',previous);
document.querySelector('#next').addEventListener('click',next)