// Add your code here

function submitData(x, y){
  fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: x,
    email: y
  })
  })
  .then(resp => resp.json())
  .then(obj => pushdata(obj))
  .catch(error => 
    pushError(error));
}

function pushdata(dataa){ 
 let messi = Object.entries(dataa)
 messi.forEach(mes => {
    let div = document.createElement('div')
    div.innerHTML = mes.toString().replace(',', ':')
    document.body.append(div)
  })
}


function pushError(dataa){
  let messi = Object.entries(dataa)
 messi.forEach(mes => {
    let div = document.createElement('div')
    div.innerHTML = mes.toString().replace(',', ':') + `'Unauthorized Access'`
    document.body.append(div)
  })
  // let div = document.createElement('div')
  // // 'Unauthorized Access'
  // div.innerHTML = 'Unauthorized Access'
  // document.body.append(div)
}