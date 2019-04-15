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

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}