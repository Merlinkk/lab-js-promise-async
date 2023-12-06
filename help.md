![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

<details>
  <summary>Hint 1 (promise.js)</summary>

  ```js

  function getCookies(){
  setTimeout(()=>{
    let output = ""; // create a variable to store all the cookies
    // add your logic here to loop over all the cookies and store it in output variable.
    document.body.innerHTML = output;
  },1000);
};

  ```
  
</details>


<details>
  <summary>Hint 2 (promise.js - creating cookies)</summary>

  ```js

  function createCookie(newCookie){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    }
    )
  }}

  ```
  
</details>

<details>
  <summary>Hint 3 (promise-async.js) </summary>

  ```js
  async function init(){
  await createCookie(newCookie);
  getCookies();
  }

  ```
  
</details>