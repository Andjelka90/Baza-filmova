// $(document).ready(function () {
//   $("#click").click(function () {
//     $("p").toggle();
//   });
// });


// VARIJABLE 

// const naslovFilma = document.getElementById('title');

// const forma = document.getElementById('forma');
// const nazivFilma = document.getElementById('naziv filma');
// const dugme = document.getElementById('dugme');


//FUNKCIJE

// function ucitajPodatke() {
//   const naslov = nazivFilma.value;

//   naslovFilma.innerText = naslov + ' - ' +;

//   const url = `https://baza-filmova.herokuapp.com/filmovi/${naslov}`;
  //console.log(url);    
  // fetch(url)

  //   .then(response => response.json())

  // .then(objekat => {
  //     naslovFilma.innerText = naslov + ' - ';
  // tekstPesme.innerText = objekat.lyrics ? objekat.lyrics : "Ne postoji tekst za traženu pesmu. Pokušajte ponovo!"
//});
//}

// forma.addEventListener('submit', function (event) {
//   event.preventDefault();
//   ucitajPodatke();
// });

// dugme.addEventListener('click', ucitajPodatke);


//function myFunction() {
  //var x = document.createElement("INPUT");
  //x.setAttribute("type", "file");
  //document.body.appendChild(x);
//}


fetch('https://baza-filmova.herokuapp.com/filmovi/')
  .then()



const prikaz = document.getElementById('prikaz')
const kriterij = document.getElementById('kriterij')

let sviFilmovi = []
let rezultati = []

function render(niz) {
  let sablon = ''
  for (var i = 0; i < niz.length; i++) {
    sablon += `<h3>${niz[i].naziv}</h3>`
  }
  prikaz.innerHTML = sablon
}

fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
  .then(res => res.json())
  .then(data => {
    sviFilmovi = rezultati = data
    render(rezultati)
  })

kriterij.addEventListener('input', function () {
  rezultati = sviFilmovi.filter(film => film.naziv.includes(kriterij.value))
  render(rezultati)
})
