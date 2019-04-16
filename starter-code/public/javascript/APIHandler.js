//esta es la lógica del API. Esto lo fabrica el que construye el API y añade los métodos que quiere para trabajar con los datos.

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(this.BASE_URL + "/characters")
      .then(response => {
        console.log(response.request.response);
      })
      .catch(error => {
        console.log("Error is: ", error);
      })

  }

  getOneRegister(id) {
    axios.get(this.BASE_URL + "/characters" + `/${id}`)
      .then(response => {
        console.log('Response from the API is: ', response);
      })
      .catch(error => {
        console.log("The error is: ", error);
      });

  }

  createOneRegister(characterInfo) {
    axios.post(this.BASE_URL + "/characters", characterInfo)
      .then(response => {
        console.log("You just created this character: ", response.data);

      })
      .catch(error => {
        console.log("Error is: ", error);
      })
  }

  updateOneRegister(modifyID, updatedcharacterInfo) {
    axios.patch(`http://localhost:8000/characters/${modifyID}`, updatedcharacterInfo)
      .then(response => {
        console.log('update successful: ', response);
        // document.getElementById("update-form").reset();
      })
      .catch(error => {
        console.log(error);
      })
  }

  deleteOneRegister(deleteID) {
    axios.delete(this.BASE_URL + "/characters" + `/${deleteID}`)
      .then(response => {
        console.log('Response from the API is: ', response);
      })
      .catch(error => {
        console.log("The error is: ", error);
      });
  }
}