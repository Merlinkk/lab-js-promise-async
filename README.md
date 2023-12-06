![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

## How to approach this lab:

**NOTE:** Before coming to this lab - it is compulsory to complete the lab on callbacks.
This lab targets the idea of async and promises. This lab should be completed step by step - following all the instruction given below.
You need to solve this lab in the order given below:

1. promise.js
2. promise-async.js

**NOTE:** There is only one **_html_** file, in this lab. So, you need to change the **_src_**, in **_index.html_** file, in order to run a particular js file.
For eg:
If I want to run callback.js file, then change the **_src="promise.js"_** to **_src="promise-async.js"_** .

If you are stuck, go to **_help.md_** file and seek out the hints given.

## Starter Code:

Each javascript file, consists of two variables:

1. cookies - it is a list of objects, consisting of name of couple of cookies.
2. newCookie - it stores the name of a new cookie.

## Instruction to promise.js :

### Progression 1:

create a function to get all the cookies from **cookies** list.
**Note:** Make sure your naming pattern is describing what you are doing from the above function.

### Progression 2:

inside the above function - use in built js function **_setTimeout()_** function, and inside this function -> print all the cookies on your browser. --> keep the time to be = 1000.

### Progression 3:

create another function to create a cookie. In this function return a new object of `Promise`.

### Progression 4:

inside the `Promise` -> call a callback function which takes two parameters -->

1. resolve
2. reject
   use **_setTimeout()_** function inside the above callback function.

**NOTE:** You can use anonymous function for that callback function.

### Progression 5:

inside setTimeOut function -> push **newcookie**, to your **cookies** list. keeping the time to be 2000.
You can even handle errors or exceptions -- by using if else conditions inside this setTimeOut funciton.

### Progression 6:

call the function which creates cookies and use `.then` -> to call the function which gets all the cookies.
check whether the third cookie, you added is being printed or not.

https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/promisesCookiesTwo.png

## Instruction to promise-async.js :

### Progression 7:

copy the entire code from **promise.js**.
Now, instead of using `.then` -> create an async function using `async` keyword.
Inside this function -- first call the function which creates cookies --> use `await` keyword before this function.
Then call the function which gets all the cookies.
check whether - now the third cookie is being printed on your browser or not.

https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/promisesCookies.png

Happy Coding Kalvium❤️
