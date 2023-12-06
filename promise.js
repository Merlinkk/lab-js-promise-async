const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};
const list = document.querySelector('#list');

let currentScript = 'promise.js';
const button = document.getElementById('button');
button.textContent = `Current Script: ${currentScript}`;

button.onclick=()=>{
  window.location.href = `./index2.html`
}



const getCookies = () => {
    setTimeout(() => {
        cookies.forEach((cookie) => {
            console.log(cookie.name);
        });
    },1000);
  }
getCookies();
const createCookies = (newCookie) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cookies.push(newCookie);
            resolve('cookie added!')
        },2000);
    })
}

createCookies(newCookie).then((message) => {
    console.log(message);
    getCookies();
    renderList();
}).catch(() => {
    console.log('The cookie could not be added because of an error');
})

const renderList = () =>{
  cookies.forEach((cookie) => {
    list.innerHTML += `<li>${cookie.name}</li>`;
  })
}