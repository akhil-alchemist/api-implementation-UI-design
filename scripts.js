// fetch api
let url = 'https://jsonplaceholder.typicode.com/photos/'
let arr = [];
let i = 0;
let imgTag ;
let cardImg = document.querySelectorAll('.cardImg')
    fetch(url)
    .then(response => response.json())
    

    .then(data => {
        data.forEach((element,index) => {
            if(index < 12)
            //console.log(index)
           //console.log(cardImg[i])
           imgTag = cardImg[i]
           imgTag.innerHTML = `<div class="thumbnail">
            <img src="${element.thumbnailUrl}" alt="" class="center">
              <p>${element.title} </p>
            </div>
          </div>`
            i++ ;
        })
    })
       // console.log(arr)
