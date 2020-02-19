import React from "react";
// @ts-ignore
import {Field, reduxForm} from "redux-form";

class TestForm extends React.Component<any, any>{
    renderField = ({ input, label, type}:any) => {
        const {name, onBlur, onChange, onDragStart, onDrop, onFocus} = input;
        return (<div>
            {console.log(input)}
            <label>{label}</label>
            <div>
                <input name={name} placeholder={label} type={type}/>
            </div>
        </div>)
    };
    render(){
        return(
            <Field name = 'testFormField' component = {this.renderField} label="Текст" type='text'/>
        )
    }
}

export const TextFormField = reduxForm({
    form: 'testForm'
})(TestForm);