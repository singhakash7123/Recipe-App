let input = document.querySelector('.inputbar')
let Search = document.querySelector('.input-btn')
let result = document.querySelector('.results')



console.log(input);
console.log(Search);




   
    Search.addEventListener('click',async ()=>{
       
         if(input.value === ''){
    alert('write the ingredient')
}
else{
  while(result.firstChild){
            result.removeChild(result.firstChild)   
          }
           let value = input.value ;
         await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`)
         .then(res=>res.json())
         .then(data=>{
          console.log(data.meals)
           data.meals.forEach(element => {
            result.innerHTML +=` <div class="card">
          <img src=${element.strMealThumb} class="image">
          <div class="details">
            <h3 class="info name">${element.strMeal}</h3>
            <button class="info info-btn">Get Recipe</button>
          </div>
           <div class="ingredient"></div>
        </div>`

          })
         let get =  document.querySelectorAll('.info-btn')
         get.forEach((ele)=>{
          ele.addEventListener('click',async ()=>{
                     let x = ele.parentNode.childNodes[1].innerHTML
                    let ingre = ele.parentNode.parentNode.childNodes[5]
    
                  ingre.addEventListener('mouseout',()=>[
                    ingre.innerHTML = '' 
                   ])
                   console.log(ingre);
                     await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)
                     .then(res=>res.json())
                     .then(data=>{
                       let obj = data.meals[0]
                       for(key in obj){
                         if(key.startsWith('strIngredient')&& obj[key]){
                           ingre.innerHTML += `${obj[key]} + <br>`
                         }
                       }
                     })
          })
         })
          

         }
          )
    //        document.addEventListener('click',async (e)=>{
    //   let x = e.target.parentNode.childNodes[1].innerHTML
    // let ingre = e.target.parentNode.parentNode.childNodes[5]
    // ingre.addEventListener('mouseout',()=>[
    //   ingre.innerHTML = '' 
    // ])
    // console.log(ingre);
    //   await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)
    //   .then(res=>res.json())
    //   .then(data=>{
    //     let obj = data.meals[0]
    //     for(key in obj){
    //       if(key.startsWith('strIngredient')&& obj[key]){
    //         ingre.innerHTML += `${obj[key]} + <br>`
    //       }
    //     }
    //   })
      
    //  }) 
     

          
          
}

    //  document.addEventListener('click',async (e)=>{
    //   let x = e.target.parentNode.childNodes[1].innerHTML
    // let ingre = e.target.parentNode.parentNode.childNodes[5]
    // ingre.addEventListener('mouseout',()=>[
    //   ingre.innerHTML = '' 
    // ])
    // console.log(ingre);
    //   await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`)
    //   .then(res=>res.json())
    //   .then(data=>{
    //     let obj = data.meals[0]
    //     for(key in obj){
    //       if(key.startsWith('strIngredient')&& obj[key]){
    //         ingre.innerHTML += `${obj[key]} + <br>`
    //       }
    //     }
    //   })
      
    //  })
          


})    

         

        

         
         
        

        

        

    

