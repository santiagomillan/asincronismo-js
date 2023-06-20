import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1"

function fetchData(urlApi) {
    return fetch(urlApi)
}

// fetchData(`${API}/products`)
//     .then((response) => response.json())
//     .then(products =>{
//         console.log(products)
//     })
//     .then(()=>{
//         console.log("HOli")
//     })
//     .catch(error => console.log(error))


fetchData(`${API}/products`)
    .then(response => response.json())
    .then(product => {
        return fetchData(`${API}/products/${product[0].id}`)
    })
    .then(response => response.json())
    .then( product => {
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(error => console.log(error))
    .finally(()=> console.log("Fin"))