const menProducts = [
    SP1 = {
        id: "sp_01",
        name : "Áo thun",
        img: "pictures/males/sp1_male.jpeg",
        price: "10.000.000vnđ",
        sale: "5.000.000vnđ" 
    },

    SP2 = {
        id: "sp_02",
        name : "Quần",
        img: "pictures/males/sp2_male.jpeg",
        price: "10.000.000vnđ",
        sale: "5.000.000vnđ" 
    }, 

    SP3 = {
        id: "sp_03",
        name : "Giày",
        img: "pictures/males/sp3_male.jpeg",
        price: "10.000.000vnđ",
        sale: "5.000.000vnđ" 
    }
]

const womenProducts = [
    SP1 = {
        id: "sp_01",
        name : "Áo thun",
        img: "pictures/females/sp1_female.jpeg",
        price: "10.000.000vnđ",
        sale: "5.000.000vnđ" 
    },

    SP2 = {
        id: "sp_02",
        name : "Giày",
        img: "pictures/females/sp2_female.jpeg",
        price: "10.000.000vnđ",
        sale: "5.000.000vnđ" 
    }, 

    SP3 = {
        id: "sp_03",
        name : "Giày",
        img: "pictures/females/sp3_female.jpeg",
        price: "10.000.000vnđ",
        sale: "5.000.000vnđ" 
    }
]

const listProduct = [...menProducts, ...womenProducts]

const testConnect = () => {
    menProducts.forEach( item => {
        console.log(item)
    })
}


