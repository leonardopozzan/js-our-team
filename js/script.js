// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede e stilarli a vostro gusto :faccia_leggermente_sorridente:
// BONUS 3:
// Aggiungere attraverso un form un membro al team



const team = [
    {
        'realName' : 'Wayne Barnett',        
        'role': 'Founder & CEO',         
        'photo': 'wayne-barnett-founder-ceo.jpg'     
    },      
    {
        'realName': 'Angela Caroll',         
        'role': 'Chief Editor',         
        'photo': 'angela-caroll-chief-editor.jpg'     
    },      
    {         
        'realName': 'Walter Gordon',         
        'role': 'Office Manager',         
        'photo': 'walter-gordon-office-manager.jpg'     
    },      
    {         
        'realName': 'Angela Lopez',        
        'role': 'Social Media Manager',         
        'photo': 'angela-lopez-social-media-manager.jpg'     
    },      
    {         
        'realName': 'Scott Estrada',         
        'role': 'Developer',         
        'photo': 'scott-estrada-developer.jpg'     
    },      
    {         
        'realName': 'Barbara Ramos',         
        'role': 'Graphic Designer',         
        'photo': 'barbara-ramos-graphic-designer.jpg'     
    },  
];

for (let element of team){
    for(let key in element){
        console.log(`${key}: ${element[key]}`)
    }
}

const container = document.querySelector('.container');
const cards = addElementClassHTML('div','cards',container);


for (let element of team){
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


