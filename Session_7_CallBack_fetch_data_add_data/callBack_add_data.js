// Hàm kết nối và thêm data
function addDataToAPI(url, data, callback) {
    fetch( url,
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data)
                }
    )
    .then(respone => {
        if(!respone.ok) {
            throw new Error('Có lỗi xảy ra khi add data mới')
        }
        return respone.json()
    })
    .then(result => {
        callback(null, result)
    })
    .then(error => {
        callback(error, null)
    })
}


// Hàm xử lý kết quả thêm
function handleAddDataRespone(error, result){
    if(error){
        console.error('Lỗi: ', error.message)
    } else {
        console.log('Dữ liệu đã được thêm vào: ', result)
        
    }
}

// Url của API đó
const apiUrl = 'https://68d39c89214be68f8c667c15.mockapi.io/Product'

const newData = {
    name: 'aloaloaloa',
    price: 20000
}

//Gọi hàm demo.

addDataToAPI(apiUrl, newData, handleAddDataRespone)