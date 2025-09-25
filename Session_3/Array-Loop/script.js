listMale = [
    sp1 = {
        id: "sp1-male",
        img: "Pictures/sp01.jpeg",
        title: "Male shirt 01",
        price: "200.000 vnđ",
        sale_price: "379.000 vnđ"
    },
    sp2 = {
        id: "sp2-male",
        img: "Pictures/sp01.jpeg",
        title: "Male shirt 02",
        price: "200.000 vnđ",
        sale_price: "0"
    },
    sp3 = {
        id: "sp3-male",
        img: "Pictures/sp01.jpeg",
        title: "Male shirt 03",
        price: "150.000 vnđ",
        sale_price: "379.000 vnđ"
    }
]

listFemale = [
    sp1 = {
        id: "sp1-female",
        img: "Pictures/sp02.jpeg",
        title: "female shirt 01",
        price: "200.000 vnđ",
        sale_price: "379.000 vnđ"
    },
    sp2 = {
        id: "sp1-female",
        img: "Pictures/sp02.jpeg",
        title: "female shirt 02",
        price: "200.000 vnđ",
        sale_price: "379.000 vnđ"
    },
    sp3 = {
        id: "sp1-female",
        img: "Pictures/sp02.jpeg",
        title: "female shirt 03",
        price: "200.000 vnđ",
        sale_price: "379.000 vnđ"
    }
]


function listProduct() {
    let maleDiv = ""
    for (let i = 0; i <= listMale.length - 1; i++) {
        maleDiv += "<div class='item"+i+" flex-1'>"
                        + "<img src='" + listMale[i].img + "'>"
                        + "<div>"
                            + "<span class='' >" + listMale[i].title + "</span>"
                            + " - <span class='' >" + listMale[i].id + "</span>"
                        + "</div>"
                        + "<div>"
                            + "<span class='' >" + listMale[i].price + "</span>"
                            + " - <span class='' >" + listMale[i].sale_price + "</span>"
                        + "</div>"
                        + "<button class='bg-red-500 text-black text-lg rounded mx-2 my-2 px-3'>Buy</button>"
                    + "</div>"
                    
                
    }


    document.getElementById("male").innerHTML = maleDiv
}
