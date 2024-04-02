import {useState} from 'react';

function UserInput({onChange, userInput}){
    return(
        <section id="user-input">
            <div className="input-group">
            <p> 
                <label>Initial Investment</label>
                <input type="text" 
                value = {userInput.initialInvestment}
                required 
                onChange={(event)=>onChange('initialInvestment',event.target.value)}
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="text" 
                value = {userInput.annualInvestment}
                required
                onChange={(event)=>onChange('annualInvestment',event.target.value)}
                />
            </p>
            </div>
            <div className="input-group">
            <p> 
                <label>Expected Return</label>
                <input type="number" 
                value={userInput.expectedReturnInterest}
                required
                onChange={(event)=>onChange('expectedReturnInterest',event.target.value)}
                />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" 
                value={userInput.duration}
                required
                onChange={(event)=>onChange('duration',event.target.value)}/>
            </p>
            </div>
        </section>
    )
}

export default UserInput;