let tableProducts = []

let obj1 = {
  name: "SP1",
  description: "Áo name",
  price: "2000vnđ",
  sale: "0"
}

let obj2 = {
  name: "SP2",
  description: "Áo name",
  price: "2000vnđ",
  sale: "0"
}

let obj3 = {
  name: "SP3",
  description: "Áo name",
  price: "2000vnđ",
  sale: "0"
}

tableProducts.push(obj1)
tableProducts.push(obj2)
tableProducts.push(obj3)

const addProduct = () => {
  const product = {
    name: document.getElementById('namePro').value,
    description: document.getElementById('desPro').value,
    price: document.getElementById('priPro').value,
    sale: document.getElementById('salePro').value
  }

  tableProducts.push(product)

  loadTable()

  document.getElementById('namePro').value = ""
  document.getElementById('desPro').value = ""
  document.getElementById('priPro').value = ""
  document.getElementById('salePro').value = ""

  console.log(tableProducts)
}


const loadTable = () => {
    let tableBody = "";
    tableProducts.forEach(function(product){
      tableBody += `<tr>` 
        + `<td>${product.name}</td>`
        + `<td>${product.description}</td>`
        + `<td>${product.price}</td>`
        + `<td>${product.sale}</td>`
      + `</tr>`
    })

    return document.getElementById('table_body').innerHTML = tableBody;
}