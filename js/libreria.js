//genera un numero random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//funzione che crea un tag html a scelta con una classe lo ritorna e lo appende ad un elemento
function addElementClassHTML(tagElement, className, fatherElement){
    const tag = document.createElement(tagElement);
    tag.className = className;
    fatherElement.append(tag);
    return tag;
}

//funzione che pulisce l'inneHTML
function cancelInnerHTML(div){
    div.innerHTML = '';
}

//funzione che aggiunge un nuovo componente
function addComponent(element){
    const card = addElementClassHTML('div','item',cards);
    for(let key in element){
        if(key == 'realName'){
            const innerCard = addElementClassHTML('div','name',card);
            innerCard.innerHTML = `${element[key]}`;
        }else if(key == 'role'){
            const innerCard = addElementClassHTML('div','role',card);
            innerCard.innerHTML = `${element[key]}`;
        }else if(key == 'photo'){
            const innerCard = document.createElement('div');
            innerCard.classList.add('photo');
            innerCard.innerHTML = `<img src="img/${element[key]}">`;
            card.prepend(innerCard);
        }
    }
}

//funzione che aggiunge un nuovo componente con la modifica sulla src dell'immagine
//per poterla mettere casuale
function addComponentBeta(element){
    const card = addElementClassHTML('div','item',cards);
    for(let key in element){
        if(key == 'realName'){
            const innerCard = addElementClassHTML('div','name',card);
            innerCard.innerHTML = `${element[key]}`;
        }else if(key == 'role'){
            const innerCard = addElementClassHTML('div','role',card);
            innerCard.innerHTML = `${element[key]}`;
        }else if(key == 'photo'){
            const innerCard = document.createElement('div');
            innerCard.classList.add('photo');
            innerCard.innerHTML = `<img src="${element[key]}">`;
            card.prepend(innerCard);
        }
    }
}

//funzione che aggiunge un nuovo componente con immagine casuale
function createComponent(){
    //pulisco l'eventuale campo del messaggio d'errore
    message.innerHTML= '';

    const realName = document.querySelector('#real-name').value;
    const role = document.querySelector('#role').value;

    if(realName == '' || role == ''){
        setTimeout(cancelInnerHTML,3000,message);
        message.innerHTML= 'Inserisci un nome e un ruolo';
        return;
    }
    const randomNumber = getRandomNumber(1,50);

    const element = {
        'realName': `${realName}`,         
        'role': `${role}`,         
        'photo': `https://picsum.photos/400/429?random=${randomNumber}`
    }

    team.push(element);
    addComponentBeta(element);
    document.querySelector('#real-name').value = '';
    document.querySelector('#role').value = '';
}

