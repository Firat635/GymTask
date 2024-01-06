let formdata = document.getElementById("formdata")
let email = document.getElementById("email")
let password = document.getElementById("password")

formdata.addEventListener("submit",formFunc)

function formFunc(e) {
    e.preventDefault()
    let data = {
       email: email.value, 
       password: password.value
    }
    
    axios.post("https://655c3300ab37729791aa0bf5.mockapi.io/students/basket",data)
    
}