let opScreen=document.getElementById("opscr");

function Display(num){
    opScreen.value+= num;
}

function Calculate(){
    try{
        opScreen.value= eval(opScreen.value);
    }
    catch(err){
        alert("Invalid Type!");
    }
}

function Clear(){
    opScreen.value="";
}

function Del(){
    opScreen.value=opScreen.value.slice(0,-1);
}
