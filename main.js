// const list = document.querySelector("#list");

// =================================>>>>>>>>>>>>>>
// 1 - usul -> AJAX == Asinxronium JavaScript and XML

const API = "https://jsonplaceholder.typicode.com/posts"; // API == Application P Interface

const request = new XMLHttpRequest();

const getApiInformation = (url) => {
  return new Promise((resolve, reject) => {
    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState == 4) {
        reject("It is impossible to download data ... :(");
      }
    });

    request.open("GET", url);

    request.send();
  });
};
getApiInformation(API)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// Promise Chaining
// =================================>>>>>>>>>>>>>>



// =================================>>>>>>>>>>>>>>
// 2 - usul ---> Fetch

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then((data) => data.json())
  .then((dataJson) => console.log(dataJson))
  .catch((err) => console.log(err));

// Fetch yangi Promise qaytaradi ...
// =================================>>>>>>>>>>>>>>

// =================================>>>>>>>>>>>>>>
// 3 - usul ---> async

const backendUrl = "https://jsonplaceholder.typicode.com/posts";

async function getData(backendUrl) {
  try {
    const response = await fetch(backendUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
 getData(backendUrl)





// // async function showAvatar() {

// //   // read our JSON
// //   let response = await fetch('/article/promise-chaining/user.json');
// //   let user = await response.json();

// //   // read github user
// //   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
// //   let githubUser = await githubResponse.json();

// //   // show the avatar
// //   let img = document.createElement('img');
// //   img.src = githubUser.avatar_url;
// //   img.className = "promise-avatar-example";
// //   document.body.append(img);

// //   // wait 3 seconds
// //   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

// //   img.remove();

// //   return githubUser;
// // }

// // showAvatar();



// ============================================================

/*
// 1-usul ajax
const url='https://jsonplaceholder.typicode.com/todos/'

const request = new XMLHttpRequest()
function foo(url){
  return new Promise((resolve,reject)=>{
request.addEventListener('readystatechange',()=>{
  
  if (request.readyState===4  && request.status===200) {
    const data = JSON.parse(request.responseText);
    resolve(data)
  }else if(request.readyState===4){
    reject(data)
  }
})
request.open('GET',url)
request.send()
})
}
foo(url).then((data)=>console.log(data)).catch((er)=>console.log(er))
*/


/*
// 2-usul fetch
fetch('https://jsonplaceholder.typicode.com/todos/')
.then((data)=>data.json())
.then((data)=>console.log(data))
.catch((er)=>{
  console.log(er);
})
*/


/*
// 3-usul async-await
const url='https://jsonplaceholder.typicode.com/todos/'

async function foo(url){
try {
  const x= await fetch(url)
  const data = await x.json()
  console.log(data);
} catch (error) {
  console.log(error);
}
}

foo(url)
*/