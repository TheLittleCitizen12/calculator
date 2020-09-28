import React, { useState, Fragment} from 'react';
import './Buttons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBBtn } from "mdbreact";


let values=[];
let currentNum=0;
let operator ='';
let count=0;





const Buttons1 = () => {
    let [currentValues, setCurrentValues]=useState('');
    let [result, setResult]= useState(0);
    const buttonsValue =[0,1,2,3,4,5,6,7,8,9,0,"+","-","*","/","=","C"];

    

    return ( 
        <div className="calculateFrame">
            <div className='window'>
                <p>{currentValues}</p>
                <p>{result}</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Fragment>
                        <MDBBtn onClick = {saveNumber} value = {buttonsValue[1]} gradient="aqua">{buttonsValue[1]}</MDBBtn>
                        <MDBBtn onClick = {saveNumber} value = {buttonsValue[2]} gradient="aqua">{buttonsValue[2]}</MDBBtn>
                        <MDBBtn onClick = {saveNumber} value = {buttonsValue[3]} gradient="aqua">{buttonsValue[3]}</MDBBtn>
                        <MDBBtn gradient="purple" onClick = {saveNumber} value = {buttonsValue[11]}>{buttonsValue[11]}</MDBBtn>
                        </Fragment>
                    </div>
                    <div className="col-md-12">
                        <Fragment>
                        
                        <MDBBtn onClick = {saveNumber} value = {buttonsValue[4]} gradient="aqua">{buttonsValue[4]}</MDBBtn>
                        <MDBBtn onClick = {saveNumber} value = {buttonsValue[5]} gradient="aqua">{buttonsValue[5]}</MDBBtn>
                        <MDBBtn onClick = {saveNumber} value = {buttonsValue[6]} gradient="aqua">{buttonsValue[6]}</MDBBtn>
                        <MDBBtn gradient="purple" onClick = {saveNumber} value = {buttonsValue[12]}>{buttonsValue[12]}</MDBBtn>
                        </Fragment>
                    </div>
                    <div className="col-md-12">
                        <Fragment>
                        
                        <MDBBtn onClick = {saveNumber} value = {buttonsValue[7]} gradient="aqua">{buttonsValue[7]}</MDBBtn>
                        <MDBBtn onClick = {saveNumber} value = {buttonsValue[8]} gradient="aqua">{buttonsValue[8]}</MDBBtn>
                        <MDBBtn onClick = {saveNumber} value = {buttonsValue[9]} gradient="aqua">{buttonsValue[9]}</MDBBtn>
                        <MDBBtn gradient="purple" onClick = {saveNumber} value = {buttonsValue[13]}>{buttonsValue[13]}</MDBBtn>
                        </Fragment>
                    </div>
                    <div className="col-md-12">
                        <Fragment>
                        <MDBBtn onClick = {saveNumber} value = {buttonsValue[0]} gradient="aqua" id='zero'>{buttonsValue[0]}</MDBBtn>
                        <MDBBtn gradient="purple" onClick = {chooseMethod}>{buttonsValue[15]}</MDBBtn>
                        <MDBBtn gradient="purple" onClick= {clear}>{buttonsValue[16]}</MDBBtn>
                        <MDBBtn gradient="purple" onClick = {saveNumber} value = {buttonsValue[14]}>{buttonsValue[14]}</MDBBtn>
                        </Fragment>
                    </div>
                </div>
            </div>
        </div> 
);
        
        function saveNumber(e){
            let input = e.target.value;
            if(input >=0){
                currentNum += Number(input);
                values[count]=currentNum;
                console.log(values)
                currentNum = currentNum *10;
            }
            else{
                count++;
                
                if(operator !== ''){
                    chooseMethod();
                    operator = '';
                }
                operator = input
                currentNum=0
            }
            setCurrentValues(currentValues += input)
        }
    
    function chooseMethod(){
        switch (operator) {
            case '*':
                multiply();
                break;
            case '/':
                divide();
                break;
            case '+':
                Add();
                break;
            case '-':
                sub();
                break;
            default:
                break;
        }
    }
    function multiply(){
        let calMul =values.reduce( (accumulator, currentValue)=> accumulator * currentValue);
        setResult(calMul)
        values=[];
        count =0
        values[count]=calMul
        count++
    }

    function divide(){
        const calDiv= values.reduce( (accumulator, currentValue)=> accumulator / currentValue);
        setResult(calDiv)
        values=[];
        count =0
        values[count]=calDiv
        count++
    }
    function Add(){
        const calAdd= values.reduce( (accumulator, currentValue)=> accumulator + currentValue);
        setResult(calAdd)
        values=[];
        count =0
        values[count]=calAdd
        count++

    }

    function sub(){
        const calSub= values.reduce( (accumulator, currentValue)=> accumulator - currentValue);
        setResult(calSub)
        values=[];
        count =0
        values[count]=calSub
        count++
    }

    
    
    function clear(){
        setCurrentValues(currentValues ='')
        setResult(result= 0)
        values = [];
        currentNum=0;
    }
}



export default Buttons1;