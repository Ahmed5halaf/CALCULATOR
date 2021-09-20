let buttons = document.querySelectorAll('.calck .btn');
let display = document.getElementById('display');
let clearAll = document.querySelector('.claer-all');
let sartEl = document.querySelector('.start');
let clearHistory = document.querySelector('.claer-history');
let operator = document.querySelector('.math');
let btn = 'OFF'
let clear = '0'


buttons.forEach(button => {

    button.onclick = function(){
        if(button.innerText == 'CE'){
            var len = display.innerText.length;
            var back = display.innerText.substring(0 ,len -1);
            display.innerText = back;
        }
       
      
        else if(button.innerText == '='){
           try{
            display.innerText = eval(display.innerText);

           }catch{
               display.innerText = 'Result is Undefined'
           }
        }
        else{
            if(display.innerText == "0"){
                let valy = display.innerText = button.innerText;
            }
            else{
                let valy = display.innerText  += button.innerText;
            }
            
        }

       
    }
})



sartEl.onclick = function(){
    if(btn === 'OFF'){
        
        sartEl.innerText = 'OFF';
        display.innerText =  '0'
        btn = 'ON';
    }else{
        sartEl.innerText = 'ON';
        display.innerText =  ' '
        btn = 'OFF'
    }

}
clearAll.onclick = function(){
        display.innerText = clear;
}

