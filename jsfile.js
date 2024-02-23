let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";   /*ye empty string hai jisme result show hoga */
let arr = Array.from(buttons);  /*ye array.from ek fun. hai jo array bna kai dega buttons(variablename) 
                                 ka jiska nam hai arr */
arr.forEach(button => {       /*foreach loop buttons par ni chalegi isliye hamne array bnaya button nam ka  */
  button.addEventListener('click', (e) => {       /*jab button par click hoga  */
    if(e.target.innerHTML == '='){         /*agr = button click hua to  */
      string = eval(string);      /*eval is an inbuild fun. hai jo string mai jo bhi enter hoga uska evaluate
                                   karkai dega mathematically */
      inputBox.value = string;     /*ab string ki value ko inputBox nam kai varible ki value mai store karva diya .
                                   ab ise input box mai result show hoga  */
    }



    else if(e.target.innerHTML == 'AC'){
      string = ""; /*jab ac button press hoga to input string ko empty karna hai isliye string ko empty kiya */
      inputBox.value = string;
    }
    
    else if(e.target.innerHTML == 'DEL'){
      string = string.substring(0, string.length-1);   /*jab del button par press hoga to agr input character bada
                                                         hai jese 3456 to last se ek digit dlt hoga 345 */
      inputBox.value = string;     /*ye isliye lagya hai kyumki enterd string inputbox nam kai variable ki 
                                  .value mai stored hoga jo hame output mai input box mai dikhegyi */
    }




    else{
      string += e.target.innerHTML; /*agr ham ek number ki badle jada ko add karegnge to vo ese add hote jayegnge += or input.value mai store ho jayengye jo input box mai dikhenge fir */
      inputBox.value = string;
    }
  })
})