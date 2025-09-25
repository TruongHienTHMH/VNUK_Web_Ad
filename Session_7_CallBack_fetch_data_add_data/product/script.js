function getProducts(callback) {
    fetch('https://68d39c89214be68f8c667c15.mockapi.io/Product')
    .then(response => response.json())
    .then(data=>callback(null,data))
    .catch(error=>callback(error,null))
}

function handleProducts(error, data){
    if(error){
        console.log(`${error}, không thể tiếp tục`)
    } else {
        const productTable = document.getElementById('productTable')
        data.forEach(product => {
            const row = `<tr> 
                            <td>${product.id}</td> 
                            <td>${product.name}</td> 
                            <td><img src="${product.image}"></td> 
                            <td>${product.price}</td>
                            <td><a href="edit.html?id=${product.id}"><button>Edit</button></a></td>                
                            <td><button onclick="deleteData(${product.id})">Delete</button></td>
                        </tr>`
            productTable.innerHTML += row
        });

    }
}
//  In sản phẩm
getProducts(handleProducts)

// Delete 
function deleteDataFromAPI (id, callback) {
    fetch( `https://68d39c89214be68f8c667c15.mockapi.io/Product/${id}`, 
            {
                method: 'DELETE'
            }
    )
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null))
}

function deleteData(id) {
    if(confirm('Sure to delete this?')) {
        deleteDataFromAPI(id, handleDeleteData)
    }
}

function handleDeleteData(error, data) {
    if(error) {
        console.log(`Đã có lỗi ${error}`)
    } else {
        console.log(`Đã xoá thành công ${data}`)     
        getProducts(handleProducts)
        window.location.reload()
    }
}