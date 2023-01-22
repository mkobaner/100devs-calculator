//Get an event listener to all buttons, is it doable using oop ? looks like it is but i need to use classes and truth to be told i will try that approach when leon covers that section. For now ill just build a calculator that works, after learning oop better ill give it a try with oop basics.



//1- Write a function to get numbers until user picks action and update result
//2- After writing function show first number space action than continue adding numbers
//3- after pressing = show result

// get id from buttons
buttons=document.querySelectorAll('button');

//declare first and second number the operator
let firstNumber='';
let secondNumber='';
let myOperator='';


buttons.forEach(btn => {btn.addEventListener('click', (e) => { 
    let userChoice=e.currentTarget.id;
    if (userChoice<10&& myOperator.length===0){
        firstNumber=firstNumber+userChoice;
        document.querySelector('#result').innerHTML=firstNumber;

        console.log('line 20 ran')

    
        
    } 

    if((userChoice==='-'||userChoice==='+'||userChoice==='/'||userChoice==='*')&&secondNumber.length===0){
        myOperator=userChoice;
        document.querySelector('#result').innerHTML=`${firstNumber} ${myOperator}`
        console.log('line 30 ran')
        console.log(myOperator);
        console.log(typeof(myOperator));

    }
    if(userChoice<10&&myOperator.length>0){
        secondNumber=secondNumber+userChoice;
        document.querySelector('#result').innerHTML=`${firstNumber} ${myOperator} ${secondNumber}`
        console.log('line 36 ran')
    }

    if( firstNumber>0&&secondNumber>0&&userChoice==='='){
        document.querySelector('#result').innerHTML= eval(firstNumber+myOperator+secondNumber);
        console.log('line 44 ran');
        firstNumber='';
        secondNumber='';
        myOperator='';
    }

    if(userChoice==='AC'){
        firstNumber='';
        secondNumber='';
        myOperator='';
        document.querySelector('#result').innerHTML='';
    }


    
    
})
    
});
