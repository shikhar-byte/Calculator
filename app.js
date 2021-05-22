
const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');


for(btn of buttons){
    btn.addEventListener('click', (e) =>{
        let buttonText = e.target.innerText;
        

        if(buttonText == 'X'){
            screen.value += '*';
        }

        else if(buttonText == 'AC'){
            screen.value ="";
        }

        else if(buttonText == "="){
            
            try{
                screen.value=eval(screen.value);
            }
            catch(e){
                screen.value= "Invalid Input";
                console.log(e.message);
            }
            
        }

        else{
            screen.value +=buttonText;
        }

    });
}