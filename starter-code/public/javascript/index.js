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
    const modifyID = document.getElementById("modifyID").value;
    const theNewName = document.getElementsByClassName("newName");
    const theNewOccupation = document.getElementsByClassName("newOccupation");
    const theNewCartoon = document.getElementsByClassName("newCartoon");
    const theNewWeapon = document.getElementsByClassName("newWeapon");


    const updatedcharacterInfo = {
      name: theNewName[0].value,
      occupation: theNewOccupation[0].value,
      cartoon: theNewCartoon[0].value,
      weapon: theNewWeapon[0].value
    };

    axios.patch(`http://localhost:8000/characters/${modifyID}`, updatedcharacterInfo)
      .then(response => {
        console.log('update successful: ', response);
        // document.getElementById("update-form").reset();
      })
      .catch(error => {
        console.log(error);
      })
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

    charactersAPI.createOneRegister(characterInfo);
  }
})