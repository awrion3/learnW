//
let todoInput = document.getElementById('todoInput'); //input element
let todoUl = document.getElementById('todoUl');       //ul element

//
function addTask() {
    let list = document.createElement('li'); //create list element
    
    if (!todoInput.value) { //empty input value
        alert('Please Enter a Task !');
    }    
    else {
        list.innerText = todoInput.value; //<li>task input</li>
        todoUl.appendChild(list); //<ul>..+..</ul>
        todoInput.value =''; //task input 초기화 
    }

    //for created list elements...
    list.addEventListener('click', function(){ //list 줄긋기
        list.style.textDecoration = 'line-through';
    })
}

function clearTask() {
    let list = document.getElementsByTagName('li'); //여러 elements 선택

    while (list.length > 0) { //<ul>..x..</ul> 
        list[0].remove();     //list 한번에 없애기
      }
}