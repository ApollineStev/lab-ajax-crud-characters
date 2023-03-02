//const APIHandler = require("./APIHandler");

const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    
    charactersAPI
    .getFullList()
    .then(response => {
      const characters = response.data
      let card = ''
      characters.forEach(element => {
        card += `
        <div class="character-info">
          <div class="name">Name: ${element.name}</div>
          <div class="occupation">Occupation: ${element.occupation}</div>
          <div class="cartoon">is a Cartoon?: ${element.cartoon}</div>
          <div class="weapon">Weapon: ${element.weapon}</div>
        </div>
      `;
      });
      document.querySelector(".characters-container").innerHTML = card
    })
    .catch(error => console.log(error))
  });



  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let characterId = document.querySelector('.operation input').value 
    charactersAPI
     .getOneRegister(characterId)
     .then(element => {
      console.log(element)
      let card =   `
      <div class="character-info">
      <div class="name">Name: ${element.data.name}</div>
      <div class="occupation">Occupation: ${element.data.occupation}</div>
      <div class="cartoon">is a Cartoon?: ${element.data.cartoon}</div>
      <div class="weapon">Weapon: ${element.data.weapon}</div>
      </div>
    `;
    document.querySelector('.characters-container').innerHTML = card
     })
     
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
                 
    
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});


/*const getCountryInfo = countryName => {
  axios
    .get(`https://restcountries.com/v2/name/${countryName}`)
    .then(response => {
      const countryDetail = response.data[0];
      document.getElementById('country-name').innerText = countryDetail.name;
      document.getElementById('country-capital').innerText = countryDetail.capital;
      document.getElementById('country-flag').setAttribute('src', countryDetail.flag);
    })
    .catch(err => {
      console.log(err);
      err.response.status === 404 ? alert(`The country ${countryName} doesn't exist.`) : alert('Server error! Sorry.');
    });
};
 
document.getElementById('get-country-btn').addEventListener('click', () => {
  const userInput = document.getElementById('country-name-input').value;
  getCountryInfo(userInput);
});
*/
