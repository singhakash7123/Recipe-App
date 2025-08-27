let Meals = document.querySelector('.meals') ;
console.log(Meals);
let Input = document.querySelector('.search-box') ;
let search_btn = document.querySelector('.search-btn');
console.log(Input);
console.log(search_btn);

search_btn.addEventListener('click', async()=>{
      while(Meals.firstChild){
            Meals.removeChild(Meals.firstChild)   
          }
    let value = Input.value ;
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`)
    .then((res) =>{
        return res.json()
    })
    .then((data)=>{
       let arr = data.meals ;
       console.log(arr);
       arr.forEach(ele => {
        let Child =  document.createElement('div') ;
   let image =  document.createElement('img') ;
   let H3 =  document.createElement('h3') ;
   let Button =  document.createElement('button') ;
   Button.innerText = 'Get Recipe' ;
   Child.appendChild(image)
   Child.appendChild(H3)
   Child.appendChild(Button)
   H3.innerText =`${ele.strMeal}`
   image.src =`${ele.strMealThumb}`
   Meals.appendChild(Child) ;
   Child.classList.add('cards')
       });
       
    })

   
   
})