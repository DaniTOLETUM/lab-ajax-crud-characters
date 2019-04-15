//// This is the front end part. Aqui tomamos los datos del DOM para pasarlos a APIHandler, que es la lógica del API. 

const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    event.preventDefault();
    charactersAPI.getFullList();
  }

  document.getElementById('fetch-one').onclick = function () {
    event.preventDefault();
    console.log('fetch-one');
    const theId = document.getElementById("searchID").value;
    charactersAPI.getOneRegister(theId);
  }

  document.getElementById('delete-one').onclick = function () {
    event.preventDefault();
    console.log('delete-one');
    const deleteID = document.getElementById("deleteID").value;
  }

  document.getElementById('edit-character-form').onsubmit = function () {
    event.preventDefault();
    console.log('edit-character-form');
    const modifyID = document.getElementById("modifyID");
    const theNewName = document.getElementsByClassName("newName");
    const theNewOccupation = document.getElementsByClassName("newOccupation");
    const theNewCartoon = document.getElementsByClassName("newCartoon");
    const theNewWeapon = document.getElementsByClassName("newWeapon");

    axios.get(`http://localhost:8000/characters/${modifyID}`)
      .then(response => {
        // console.log('Response from the API is: ', response.data);

        // theNames is the array of all nodes that the class name 'the-name'
        // const theNames = document.getElementsByClassName("the-name");

        theNewName[1].value = response.data.name;
        theNewOccupation[1].value = response.data.occupation;
        theNewWeapon[1].value = response.data.weapon;
        theNewCartoon[1].value = response.data.weapon;

      })
      .catch(error => {
        console.log("The error is: ", error);
      });
  }

  document.getElementById('new-character-form').onsubmit = function () {
    event.preventDefault();
    console.log('new-character-form');
    const theName = document.getElementsByClassName("the-name");
    const theOccupation = document.getElementsByClassName("the-occupation");
    const theCartoon = document.getElementsByClassName("the-cartoon");
    const theWeapon = document.getElementsByClassName("the-weapon");
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