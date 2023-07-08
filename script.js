
let user = {
    name: 'John',
    surname: 'Smith'
};
const button = document.querySelector('.toServer');
button.addEventListener('click', ()=>{
    console.log('otpravka')
    fetch('http://localhost:8080/api/user',{
        method: 'GET',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
    })
    .then(response => console.log(response.json()))
})
