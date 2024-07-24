//variables
let val_1=null ;
let val_2=null ;
let operation;
let display_value;
let valFlag = 1; 

//helper functions
const log = ()=>  
    console.log(val_1 , val_2 ,operation?operation.name:null, `valFlag: ${valFlag}`);
const isNumber = (str)=> !isNaN(str) && str.trim() !== '';
const logNumber = (e)=> {
    if (valFlag === 1) {
        val_1 = parseFloat(val_1?val_1:0)*10 + parseInt(e.target.textContent);
    }
    else {
        val_2 = parseFloat(val_2?val_2:0)*10 + parseInt(e.target.textContent);
    }
};

const updateDisplay = ()=> {
    display_value = (valFlag === 2 && val_2!== null) 
    ? val_2
    : (val_1 !== null)?val_1:0 
    displaySelector.innerText = display_value
    log()
    return 
};
const resetValues = ()=> {
    val_1 = null;
    val_2 = null;
    operation = null;    
    display_value = 0;
    valFlag = 1;
}

// core functions
const add = (val_one,val_two) => val_one + val_two;
const subtract = (val_one,val_two) => val_one - val_two;
const multiply = (val_one,val_two) => val_one * val_two;
const divide = (val_one,val_two) => val_one / val_two; 
const operate = ( func, a , b ) =>  {
    if(func===undefined || a===undefined || b ===undefined){
        console.log(`something is undefined, exiting`);
        return display_value
    }
    let returnVal = func(a,b);
    resetValues();
    val_1 = returnVal;
    return ;
};

// dom selectors
const allButton = document.querySelectorAll("button");
const displaySelector = document.querySelector("#display");
const allNumButton = [...allButton].filter(btn => isNumber(btn.id));
const nonNumButton = [...allButton].filter(btn => !isNumber(btn.id));

// remove highlight from function elements
const unhighlightAll = ()=> {
    nonNumButton.forEach(btn=>btn.classList.remove("highlight"));
}

// set num button listener
allNumButton.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        logNumber(e);
        updateDisplay();  
    })
})

// set function buttons
nonNumButton.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        if (val_1 === null) { 
            return
        }
// operate if operation has been previously pressed 
        if (operation!=null && val_2 !== null && ['+', '-', '*', '/'].includes(e.target.textContent)) {
                operate(operation,val_1,val_2)                     
                valFlag = 2; 
            updateDisplay(); 
        }

        unhighlightAll();

// base logic to set function to run         
        switch (e.target.textContent) {
            case "C":        
                console.log(`pressed c`);
                resetValues();
                break;
            case "+": 
                operation = add;
                valFlag = 2; 
                btn.classList.add("highlight")
                break;
            case "-":        
                operation = subtract;
                valFlag = 2; 
                btn.classList.add("highlight")
                break;
            case "*":        
                operation = multiply;
                valFlag = 2; 
                btn.classList.add("highlight")
                break;
            case "/":        
                operation = divide;
                valFlag = 2; 
                btn.classList.add("highlight")
                break;
            case "=":                
                if ( val_1 !== null && val_2 !== null & operation !==null ) {
                    operate(operation,val_1,val_2)                     
                }
                break;
            default:
                console.log(`catch all ran - this should not run`);
                break;
            } 
        //after switch
        updateDisplay(); 
    })
})


document.addEventListener('keydown', function(event) {
// keyboard intake for numbers
    if (isNumber(event.key)) {
        document.getElementById(event.key).click()
        return;
    };
    
// keyboard intake for functions 
    const validKeys = ['+', '-', '*', '/','=','Enter'];
    if (!validKeys.includes(event.key)) {
        return
    } 
    console.log(event.key);
    let keyfunc = (event.key === 'Enter') ? '=' : event.key
    document.getElementById(keyfunc).click(); 
    });
 