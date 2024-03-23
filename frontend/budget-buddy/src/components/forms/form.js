import React from "react";

function Form(){
    const[inputState, setInputState] = ({
        label: '',
        amount: '',
        date: '',
        type: '',
        description: '',
    })

    const {label, amount, date, type, description} = inputState;

    return(
        <StyledFrm>
            <div className="inputEffects">
                <input type="text" value={title} label={'label'} placeholder=""/>
            </div>
        </StyledFrm>
    )
}

const StyledFrm = styled.form`

`;
export default form;