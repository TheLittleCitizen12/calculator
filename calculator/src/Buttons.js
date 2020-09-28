import React, { useState } from 'react';
import './Buttons.css';


let count =0;
let values=[];
let currentNum=0;


const Buttons = () => {
    let [currentValues, setCurrentValues]=useState('');
    let [result, setResult]= useState(0);
    const buttonsValue =[0,1,2,3,4,5,6,7,8,9,0,"+","-","*","/","Enter","Clear"];

    

    return ( 
       <div className="calculateFrame">
            <p>{currentValues}</p>
            <p>{result}</p>
            
                <button onClick = {saveNumber} value = {buttonsValue[0]} gradient="aqua">{buttonsValue[0]}</button>
                <button onClick = {saveNumber} value = {buttonsValue[1]} className="number">{buttonsValue[1]}</button>
                <button onClick = {saveNumber} value = {buttonsValue[2]} className="number">{buttonsValue[2]}</button>
                <button onClick = {saveNumber} value = {buttonsValue[3]} className="number">{buttonsValue[3]}</button>
                <button onClick = {saveNumber} value = {buttonsValue[4]} className="number">{buttonsValue[4]}</button>
                <button onClick = {saveNumber} value = {buttonsValue[5]} className="number">{buttonsValue[5]}</button>
                <button onClick = {saveNumber} value = {buttonsValue[6]} className="number">{buttonsValue[6]}</button>
                <button onClick = {saveNumber} value = {buttonsValue[7]} className="number">{buttonsValue[7]}</button>
                <button onClick = {saveNumber} value = {buttonsValue[8]} className="number">{buttonsValue[8]}</button>
                <button onClick = {saveNumber} value = {buttonsValue[9]} className="number">{buttonsValue[9]}</button>
                <button onClick = {saveNumber} value = {buttonsValue[10]} className="number">{buttonsValue[10]}</button>
                <button onClick = {saveNumber} value = {buttonsValue[11]}>{buttonsValue[11]}</button>
                <button onClick = {saveNumber} value = {buttonsValue[12]}>{buttonsValue[12]}</button>
                <button onClick = {saveNumber} value = {buttonsValue[13]}>{buttonsValue[13]}</button>
                <button onClick = {saveNumber} value = {buttonsValue[14]}>{buttonsValue[14]}</button>
                <button onClick = {calculate}>{buttonsValue[15]}</button>
                <button onClick= {clear}>{buttonsValue[16]}</button>
            
           

        
       </div> 
     );
        
     function saveNumber(e){
        let input = e.target.value;
        if(input >=0 && input < 10){
            let inputNum = Number(input)
            currentNum +=inputNum ;
            values[count] = currentNum;
            currentNum = currentNum *10;
        }
        else{
            count++;
            currentNum = 0;
            values[count]= input
            count ++;
    
        }
        if(input !== '0'){
            setCurrentValues(currentValues += input)
        }
        
    }
    
    
    
    function calculate(){
        values.forEach(val =>{
            switch (val) {
                case "+":
                    Add();
                    break;

                case "-":
                    sub();
                    break;
                case "*":
                    multiply()
                    values=[];
                    break;
                case "/":
                    divide()
                    values=[];
                    break;
            
                default:
                    break;
            }
        })
    }
    
    function Add(){
        values.forEach(num =>{
            if(num !== '+'){
                setResult(result += num)
            }
        
        });
    }

    function sub(){
        let firstNum;
        for(let i=0; i< values.length ; i++){
            if(i===0){
                firstNum = values[i];
                setResult(result = firstNum)
            }
            if(values[i] !== '-' && i !==0)
            {
                setResult(result -= values[i])
            }

        }
    }

    function multiply(){
        for(let j=0; j< values.length ; j++){
            if(result === 0 && j ===0){
                setResult(result = 1)
            }
            if(values[j] !== '*')
            {
                setResult(result *= values[j])
            }

        }
    }

    function divide(){
        for(let k=0; k< values.length ; k++){
            if(k === 0){
                result = values[k]
            }
            if(values[k] !== '/' && k!==0)
            {
                setResult(result /= values[k])
            }

        }
    }
    
    function clear(){
        setCurrentValues(currentValues ='')
        setResult(result=0)
        values = [];
    }
}



export default Buttons;