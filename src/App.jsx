import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx'

function App() {
  const [userInput,setUserInput]= useState({
    initialInvestment:10000,
    annualInvestment:1000,
    expectedReturnInterest:6,
    duration:6

})
const inputIsValid = userInput.duration>=1 && userInput.initialInvestment>0 && annualInvestment>1 && userInput.expectedReturnInterest>0;
function onHandleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput=>{
        return{
        ...prevUserInput,
        [inputIdentifier]:+newValue
    } })
}
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={onHandleChange}/>
    {!inputIsValid && <p className='center'>Please enter Valid Input Data</p>}
    {inputIsValid && <Results userInput={userInput}/>}
    </>
  )
}

export default App
