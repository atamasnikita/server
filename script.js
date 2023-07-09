const button = document.querySelector('.toServer');
const names = document.querySelector('.names');
const surnames = document.querySelector('.surname');
let requestAPI = ()=>{
    const data = {
        name: 'KEK',
        surname: 'LOL'
    }
    fetch('http://localhost:8080/',{
        mode: 'no-cors',
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then((response) => console.log(response));
}
//button.addEventListener('click', requestAPI);
requestAPI();
 //let namen = names.value,
        //surname = surnames.value;




