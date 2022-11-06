import {data} from './data.js'
// console.log(data)
let htmlString=''
const row=document.querySelector('.row')
data.forEach((items)=>{
    // console.log(items)
    htmlString+=`
    <div class="col-md-4">
    <div class="card" style="width: 18rem;">
        <img src="${items.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h4 class="card-title">${items.title}</h4>
          <h5 class="card-price">${items.price}</h5>
          <p class="card-text">${items.content}</p>
        <button class="decrement">-</button>
        <input type="number" name="" id="">
        <button class="increase">+</button>
        </div>
      </div>        
  </div>
`
row.innerHTML=htmlString
const increase=document.querySelector('.increase')
const decrement=document.querySelector('.decrement')
// console.log(decrement)
// console.log(increase)
decrement.addEventListener('click', (event)=>{
    console.log(event)

})
increase.addEventListener('click', (event)=>{
    console.log(event)
})

})



