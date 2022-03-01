// fetch api
let url = 'https://jsonplaceholder.typicode.com/photos/'
let image = document.getElementById("image-card")
    fetch(url)
    .then(response => response.json())

    .then(data => {
        data.forEach((element,index) => {
            if(index<5)
             console.log(element.title)
            
         });
     }
        )
