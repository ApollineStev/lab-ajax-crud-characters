const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  window.addEventListener("load", () => {
    // fetch all characters
    document.querySelector("#fetch-all").addEventListener("click", async () => {
      try {
        const response = await charactersAPI.getFullList();
        const allChars = response.data;
        let cards = "";
        allChars.forEach((char) => {
          cards += `
            <div class="character-info">
                <div class="name">Name: ${char.name}</div>
                <div class="occupation">Occupation: ${char.occupation}</div>
                <div class="cartoon">Cartoon: ${char.cartoon ? "Yes" : "No"}</div>
                <div class="weapon">Weapon: ${char.weapon}</div>
            </div>
            `;
        });
        document.querySelector(".characters-container").innerHTML = cards;
      } catch (err) {
        console.log(err);
      }
    });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
                 
    
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});

