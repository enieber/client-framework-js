
function makeFetch (URL, id){
  
  var App = document.getElementById(id)

  fetch(URL, {
    method: 'get'
  }).then(function(response){
  
     response.text().then(function(result){      
       App.textContent = result
    })
 })
}

var URL = 'https://api.github.com/users'
makeFetch(URL, "app")

function filter(id){
  var App = document.getElementById(id)

  console.log(App.textContent)
}

//filter("app")
