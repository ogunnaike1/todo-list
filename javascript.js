let allTodo = [];
function addTodo(){
    if(inputTodo.value === ''){
        error.style.display ='block'
    }else{
        error.style.display ='none'
        allTodo.push(inputTodo.value);
        showAllTodo()
        inputTodo.value = ''
    } 
}
function deleteFirstTodo(){
    allTodo.shift()
    showAllTodo()
}
function deleteLastTodo(){
    allTodo.pop()
    showAllTodo()
}
function deleteAllTodo(){
    allTodo = [];
    showAllTodo()
}
