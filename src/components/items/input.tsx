/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 31/08/2024 - 19:30:50
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
import React from 'react';

const Input = (props: any) => {
    return (
        <div className="flex flex-col w-[60%] font-medium gap-5">
            <label htmlFor={props.htmlFor}>{props.htmlFor}</label>
            <input type={props.type} className={props.className} placeholder={props.placeholder}></input>
        </div>
    );
};

export default Input;