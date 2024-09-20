/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 31/08/2024 - 20:22:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/08/2024
    * - Author          : Hp
    * - Modification    : 
**/


const Sign = (props:any) => {
    return (
        <div className='justify-start flex gap-2 items-center w-[70%] h-[3rem] font-medium rounded-md border border-solid'>
            <img src={props.img} alt="" />
            <h1>{props.text}</h1>
        </div>
    );
};

export default Sign;