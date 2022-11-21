const submit=document.getElementById('submit');
const list=document.getElementById('task-list');

submit.addEventListener('click', ()=>{
    let task= document.getElementById('task-field').value;


    if(task.length!=0){
    
    let li=document.createElement('li');
    
    const taskContainer=document.createElement('div');
    taskContainer.className="task";
    li.appendChild(taskContainer);
    
    const remove=document.createElement('button');
    const up=document.createElement('button');
    const down=document.createElement('button');
    remove.className="toolbar";remove.setAttribute('id', 'remove');
    up.className="toolbar";up.setAttribute('id', 'up');
    down.className="toolbar";down.setAttribute('id', 'down');

    remove.innerText='X';
    up.innerText='↑';
    down.innerText='↓';

    taskContainer.appendChild(remove);
    taskContainer.appendChild(up);
    taskContainer.appendChild(down);
    
    const statement=document.createElement('span');
    statement.innerText=task;
    taskContainer.appendChild(statement);
    
    list.appendChild(li);


    remove.addEventListener('click', ()=>{
        list.removeChild(li);
    });

    up.addEventListener('click', ()=>{
        const x= li.previousElementSibling;
        let change=statement.innerText;
        statement.innerText=x.firstChild.lastChild.innerText;
        x.firstChild.lastChild.innerText=change;
    });
    
    down.addEventListener('click', ()=>{
        const x= li.nextElementSibling;
        let change=statement.innerText;
        statement.innerText=x.firstChild.lastChild.innerText;
        x.firstChild.lastChild.innerText=change;
    });
}
});