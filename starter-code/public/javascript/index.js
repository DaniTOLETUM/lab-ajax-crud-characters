const charactersAPI = new APIHandler("http://localhost:8000");

const theName = document.getElementsByClassName("the-name");
const theOccupation = document.getElementsByClassName("the-occupation");
const theCartoon = document.getElementsByClassName("the-cartoon");
const theWeapon = document.getElementsByClassName("the-weapon");

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    event.preventDefault();
    console.log('fetch-all');
    axios.get('http://localhost:8000/characters')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("Error is: ", error);
      })
  }

  document.getElementById('fetch-one').onclick = function () {
    event.preventDefault();
    console.log('fetch-one');
    const theId = document.getElementById("searchID").value;
    axios.get(`http://localhost:8000/characters/${theId}`)
      .then(response => {
        console.log('Response from the API is: ', response);
      })
      .catch(error => {
        console.log("The error is: ", error);
      });
  }

  document.getElementById('delete-one').onclick = function () {
    event.preventDefault();
    console.log('delete-one');
  }

  document.getElementById('edit-character-form').onsubmit = function () {
    event.preventDefault();
    console.log('edit-character-form');
  }

  document.getElementById('new-character-form').onsubmit = function () {
    event.preventDefault();
    console.log('new-character-form');
    const characterInfo = {
      name: theName[0].value,
      occupation: theOccupation[0].value,
      cartoon: theCartoon[0].value,
      weapon: theWeapon[0].value
    };

    axios.post('http://localhost:8000/characters', characterInfo)
      .then(response => {
        console.log("You just created this character: ", response.data);

      })
      .catch(error => {
        console.log("Error is: ", error);
      })
  }
})