$(document).ready(function(){
    $("#click").click(function(){
      $("p").toggle();
    });
  });


// VARIJABLE 

const naslovFilma = document.getElementById('title');

const forma = document.getElementById('forma');
const nazivFilma = document.getElementById('naziv filma');
const dugme = document.getElementById('dugme');


//FUNKCIJE

function ucitajPodatke(){
    const naslov = nazivFilma.value;
    
    naslovFilma.innerText = naslov + ' - ' +;     
      
    const url = `https://api.lyrics.ovh/v1/${naslov}`;    
    //console.log(url);    
    fetch(url)
    
    .then(response => response.json())
    
    .then(objekat => {
        naslovFilma.innerText = naslov + ' - ';
        // tekstPesme.innerText = objekat.lyrics ? objekat.lyrics : "Ne postoji tekst za traženu pesmu. Pokušajte ponovo!"
});
}

forma.addEventListener('submit', function(event){
    event.preventDefault(); 
    ucitajPodatke();
});

dugme.addEventListener('click', ucitajPodatke);


function myFunction() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "file");
    document.body.appendChild(x);
  }