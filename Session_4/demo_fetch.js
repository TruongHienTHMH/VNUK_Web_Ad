async function fetchProduct() {
    try{
        const respone = await fetch("https://656ca88ee1e03bfd572e9c16.mockapi.io/products");
        const product = await respone.json();

        const {name, id, description, price} = product

        // console.log(name) undefined
        const cloneProduct = {
            name,
            id,
            description,
            price : {
                ...price, // Đang lấy các thuộc tính con trong nó nếu cso
                unit: "vnđ" // đang update thêm 1 thuộc tính mới. là đơn vị tiền tệ
            }
        }
    
        console.log(cloneProduct);
    } catch(err) {
        console.log(err);
    }
}

// fetchProduct()

const obj1 = {
    'age' : 20 // Đã từng là name..
}

const obj2 = {
    'name' : 'B'
}

const mergeObj = {...obj1, ...obj2};
// kh thể merged các obj có thuộc tính như nhau
console.log(mergeObj);
