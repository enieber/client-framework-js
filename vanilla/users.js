
function makeFetch (URL, app, id){
 var App = document.getElementById(app)
  
 if(id){
   fetch(URL+'/'+id, { method: 'get' })
  .then(function(response){
    response.text()
      .then(function(result){      
        App.textContent = result
      })
   })

 }else {
  fetch(URL, { method: 'get' })
  .then(function(response){
    response.text()
      .then(function(result){      
        App.textContent = result
      })
   })
 }
}

var URL = 'https://api.github.com/users'

function filter(id){
  makeFetch(URL, "app", id)
}

function index(){
  makeFetch(URL, "app")
}
