/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 31/08/2024 - 20:41:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/08/2024
    * - Author          : Hp
    * - Modification    : 
**/

const Button = (props: any) => {
    return (
        <div className='w-[37rem] h-[2.5rem]  text-white   rounded-md justify-center items-center mt-[1rem] ' >
            <button type={props.type} className={props.className}>{props.text}</button>
        </div>
    );
};

export default Button;