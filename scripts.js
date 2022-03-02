// fetch api
let url = 'https://jsonplaceholder.typicode.com/photos/'
let arr = [];
let i = 0;
let cardImg = document.querySelectorAll('.cardImg')
    fetch(url)
    .then(response => response.json())
    

    .then(data => {
        data.forEach((element,index) => {
            if(index<5)
            //console.log(element)
            //console.log(cardImg[i])
             cardImg[i].innerHTML = `<div class="thumbnail">
            <img src="${element.thumbnailUrl}" alt="">
            <div class="caption">
              <p>${element.title} </p>
            </div>
          </div>`
            i++ ;
        })
    })
       // console.log(arr)
