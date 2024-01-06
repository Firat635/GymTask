const products = document.getElementById("products-all")



function getdata() {
    products.innerHTML=""
    let cart = JSON.parse(localStorage.getItem("cart")) ||[];
    cart.forEach((item,index)=>{
        let div = document.createElement("div")
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <p>${item.price}$</p>
        <button onclick="removeToCart(${index})"><i class="fa-solid mx-1 fa-trash"></i> Remove To Cart</button>
        `
        products.appendChild(div)
    })
    
}
getdata()
function removeToCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) ||[];
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    getdata()
}




let max = document.getElementById("max")
let min = document.getElementById("min")

max.addEventListener("click",maxfunc)

function maxfunc() {
    products.innerHTML=""
    let cart = JSON.parse(localStorage.getItem("cart")) ||[];
    let data = cart.sort((a,b) =>(b.price - a.price))
    data.forEach((item,index)=>{
        let div = document.createElement("div")
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <p>${item.price}$</p>
        <button onclick="removeToCart(${index})"><i class="fa-solid mx-1 fa-trash"></i> Remove To Cart</button>
        `
        products.appendChild(div)
    })
    
}


min.addEventListener("click",minFunc)

function minFunc() {
    products.innerHTML=""
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.sort((a,b) =>(a.price - b.price))
    data.forEach((item,index)=>{
        let div = document.createElement("div")
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <p>${item.price}$</p>
        <button onclick="removeToCart(${index})"><i class="fa-solid mx-1 fa-trash"></i> Remove To Cart</button>
        `
        products.appendChild(div)
    })
}


let inp = document.getElementById("inp")
let form = document.getElementById("form")

form.addEventListener("submit",searcFunc)

function searcFunc (e) {
    e.preventDefault();
    products.innerHTML=""

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.filter((item)=> item.title.toLowerCase(). includes(inp.value.toLowerCase()))
    data.forEach((item,index)=>{
        let div = document.createElement("div")
        div.className="box"
        div.innerHTML=`
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <p>${item.price}$</p>
        <button onclick="removeToCart(${index})"><i class="fa-solid mx-1 fa-trash"></i> Remove To Cart</button>
        `
        products.appendChild(div)
    })
    
}