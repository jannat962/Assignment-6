let buttonTwo = document.getElementById('two');

let divtwo = document.getElementsByTagName('div')[0];

buttonTwo.addEventListener('click', () => {
    fetch('https://icanhazdadjoke.com', {
        headers:{"Accept":"application/json"}
    })




  .then((response)=> {
   return response.json()
  })

//fetch is useful because you can chale om name things to do Cig changing contant регсани)

   .then (jokeObject => {
    return jokeObject.joke.toUpperCase();
   })
    

   .then(joke => {
    divTwo.innerText = joke;

   })

// cemember, you can also catch errors

   .catch(e=> {

   console.log('oh no man, there is an erron', e);

   })

})