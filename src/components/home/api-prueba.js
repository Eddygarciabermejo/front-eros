class API {
    async getCharacter(id) {
      const response = await fetch(`http://localhost:1337/pruebas/${id}`)
      const data = await response.json()
      return data
      // .then((response) => response.json())
      //   .then((data) => data)
    }
  }
  const api = new API()
  export default api