const form = document.getElementById("form");
    const input = document.getElementById("name");
    const number = document.getElementById("rollno")
    const list = document.getElementById("list");
    const list2 = document.getElementById("list2");
     form.addEventListener("submit",(e) => {
        e.preventDefault();
        const task = number.value.trim();
        if (task!==''){
           
            addTodoItem(task);
            number.value = '';
                }
               
     });
    function addTodoItem(task){
        const item = document.createElement('li');
        item.textContent = task;

         const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
         deleteButton.addEventListener('click',() => {
            deleteTodoItem(item);
            deleteButton.remove();
         }
         );

        list2.appendChild(deleteButton);
        list2.appendChild(item);
      
    }
     function deleteTodoItem(item) {
         item.remove();
        
     }
     form.addEventListener("submit",(e) => {
        e.preventDefault();
        const task = input.value.trim();
        if (task!==''){
           
            addTodoItem(task);
            input.value = '';
                }
               
     });
    function addTodoItem(task){
        const item = document.createElement('li');
        item.textContent = task;

         const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
         deleteButton.addEventListener('click',() => {
            deleteTodoItem(item);
            deleteButton.remove();
            
         }
         );

        list.appendChild(deleteButton);
        list.appendChild(item);
      
    }
     function deleteTodoItem(item) {
         item.remove();
        
     }





    //  const calc = document.getElementById("calculator");
    // const num1 = document.getElementById("calc1");
    // const num2 = document.getElementById("calc2")
    // const ans = document.getElementById("output");
    // const add = document.getElementById("add");
    // const sub = document.getElementById("sub");
    // const mult = document.getElementById("mult");
    // const divide = document.getElementById("divide");
    //  form.addEventListener("submit",(e) => {
    //     e.preventDefault();
    //     const task1 = num1.value.trim();
    //     const task2 = num2.value.trim();
    //     if (task1!=='' && task2!==''){
           
    //         addTodoItem(task1,task2);
    //         num1.value = '';
    //         num2.value ='';
    //             }
               
    //  });
    // function addTodoItem(task1,task2){
    //     const item = document.createElement('h3');
    //     item.textContent = task1,task2;

    //      const opt = document.createElement('h3');
    //     opt.innerHTML = "OUTPUT";
    //      add.addEventListener('click',() => 
    //        opt.innerHTML ="task1+task2"
         
        //    sub.addEventListener('click',() => 
        //     opt.innerHTML ="task1-task2";
           
        //     mult.addEventListener('click',() => 
        //         opt.innerHTML ="task1*task2";

        //         divide.addEventListener('click',() => 
        //             opt.innerHTML ="task1/task2";
        
        //  );

        
        // ans.appendChild(item);
      
    // }
     
    
     
  