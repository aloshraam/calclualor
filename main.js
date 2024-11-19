// display the contents
function displayContent(content){
    result.value += content 
}

// clear Data
function clearCalcScreen(){
    result.value = ""
}

// remove last element
function removeCalc(){
    result.value = result.value.slice(0,-1)
}

// evaluation
function calcout(){
    result.value = eval(result.value)
}
