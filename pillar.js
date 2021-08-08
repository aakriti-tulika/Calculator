let screen=document.getElementById("screen");
buttons=document.querySelectorAll('button');
let screendisplay='';
for( item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log("Button Text is ",buttonText);
        if(buttonText=='=')
        {
           
            try {
                screen.value=eval(screendisplay);
            }
            catch{
                screendisplay=screen.value;
                screen.value="Error";
            }
            
            console.log(screen.value);
        }
        else if(buttonText=='C')
        {
            screendisplay='';
            screen.value=screendisplay;
        }
        else
        {
            screendisplay+=buttonText;
            screen.value=screendisplay;
            
        }
    })
}