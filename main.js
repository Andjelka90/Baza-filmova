$(document).ready(function(){
    $("#click").click(function(){
      $("p").toggle();
    });
  });


// VARIJABLE 

const naslovPesme = document.getElementById('title');
const tekstPesme = document.getElementById('lyrics');
const forma = document.getElementById('forma');
const trazeniIzvodjac = document.getElementById('trazeni-izvodjac');
const trazenaPesma = document.getElementById('trazena-pesma');


//FUNKCIJE

function ucitajPodatke(){
    const izvodjac = trazeniIzvodjac.value;
    const pesma = trazenaPesma.value;
    naslovPesme.innerText = izvodjac + ' - ' + pesma;     
      
    const url = `https://api.lyrics.ovh/v1/${izvodjac}/${pesma}`;    
    //console.log(url);    
    fetch(url)
    
    .then(response => response.json())
    
    .then(objekat => {
        naslovPesme.innerText = izvodjac + ' - ' + pesma;
        tekstPesme.innerText = objekat.lyrics ? objekat.lyrics : "Ne postoji tekst za traženu pesmu. Pokušajte ponovo!"
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