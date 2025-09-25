const fetchDataFromAPI = (callback) => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

    fetch(apiUrl)
        .then(response => response.json()) // chuyển dữ liệu về dạng Json
        .then(data => {// xử lý dữ liệu
            callback(null, data)
        })
        .catch(error => {
            callback(error, null)
        });
}

const handleAPIData = (error, data) => {
    if(error) {
        console.log(`Dữ liệu bị lỗi ${err}`); 
    } else {
        console.log(`Dữ liệu từ api ${data}`); 
    }
}
fetchDataFromAPI(handleAPIData);