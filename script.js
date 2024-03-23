


//Elementos

const input = document.querySelector('input') // pega o input
      input.addEventListener('keyup', add)
const ul = document.querySelector('ul')// pega o ul 
const remover = document.querySelector('.remover').addEventListener('click', remove)// pega o botão remover
const adicionar = document.querySelector('.adicionar').addEventListener('click', newIten) // pega o botão adiconar

    



// FUNÇÕES 

function newIten  (){

    if(input.value != ''){
        let newLi = document.createElement('li')
        newLi.innerHTML = input.value
        ul.append(newLi)
        input.value = ''
    
        }else{
            alert('Favor digitar um numero valido')
        }  

}

function add(e){

    if(e.key === 'Enter' || e.which === 13){

    if(input.value != ''){
    let newLi = document.createElement('li')
    newLi.innerHTML = input.value
    ul.append(newLi)
    input.value = ''

    }else{
        alert('Favor digitar um numero valido')
    }   
    
    }
    
}
function remove (){
    ul.removeChild(ul.lastElementChild) // remove o ultimo item
}
