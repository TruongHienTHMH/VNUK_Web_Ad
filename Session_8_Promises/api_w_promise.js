const getUsers = () => {
    return new Promise((resolve, reject) => {
        fetch('https://68d39c89214be68f8c667c15.mockapi.io/Product')
        .then(res => {
            if(!res.ok) {
                throw new Error('Không thể lấy dữ liệu từ API')
            }
            return res.json()
        })
        .then(data => {
            resolve(data)
        })
        .catch(err => {
            reject(err)
        })
    })
}

getUsers()
    .then(data => {
        for(let i = 0; i < data.length; i++){
            const element = data[i]
        }

        console.log(`Danh sách người dùng: ${data[1].name}`)

        // console.log(`Các dữ liệu từ API: ${data}`)
    })
    .catch(err => {
        console.log(err)
    })

getUsers()