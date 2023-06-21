import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1"

async function fetchDta(urlApi) {
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

const anotherFunction = async(urlApi) => {
    try {
        const products = await fetchDta(`${urlApi}/products`)
        const product = await fetchDta(`${urlApi}/products/${products[0].id}`)
        const category = await fetchDta(`${urlApi}/categories/${product.category.id}`)
        console.log(products)
        console.log(product.title)
        console.log(category.name)
    } catch (error) {
        console.error(error)
    }
}

anotherFunction(API)