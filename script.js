let form=document.getElementById("form")
let tasks=[];

const validateForm=(event) => {
    event.preventDefault()
    let input=event.target.userinput
    tasks.push(input.value);
    
    console.log(tasks);
    let display=document.getElementById("display");
    //display.innerHTML=""
    display.innerHTML = tasks.map( (task) => 
        `<li>${task} <button>Delete</button> </li>`
    )
    input.value="";
    
}
document.getElementById("form").addEventListener("submit",validateForm)
