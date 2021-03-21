import React from 'react';

type InputProps = {
  input: any;
  meta: any;
  label: string;
  value: string;
}

export const Input = ({label, meta, input, value}: InputProps) => {
    const {touched, error} = meta;
    const errorMsg = touched && error;
    return (
        <div>
            <label>{label}</label>
            <br/>
            <input 
                type="text"
                {...input}
                placeholder={value}
            />
            { touched && <div style={{color: 'red'}}>{errorMsg}</div> }
        </div>
    )
}
export default Input;
