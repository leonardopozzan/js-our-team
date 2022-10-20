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
//https://picsum.photos/400/429?random=1


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

//stampo la classe in console
for (let element of team){
    for(let key in element){
        console.log(`${key}: ${element[key]}`)
    }
}

//prendo il container e gli appendo il div che conterrà le carte
const container = document.querySelector('.container');
const cards = addElementClassHTML('div','cards',container);

for (let element of team){
    addComponent(element);
}

const btn = document.querySelector('#enter');
btn.addEventListener('click' , createComponent);


