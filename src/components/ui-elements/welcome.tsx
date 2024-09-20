/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 20/09/2024 - 16:12:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/09/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { RocketIcon } from "@radix-ui/react-icons";
const Welcome = () => {
    return (
        <div className='bg-amber-400 flex flex-1 items-center justify-around flex-col'>
            <h1 className="animate-pulse">Welcome to worketyamo</h1>
            <RocketIcon className="w-[15rem] h-[20rem] animate-pulse" color="blue"/>,
            <div style={{ display: "flex", gap: "10px", marginTop: "150px" } } >
        <input style={{ backgroundColor: "blue" }} readOnly className="w-[5.2rem] rounded-md h-4" />
        <input style={{ backgroundColor: "blue" }} readOnly className="w-[5.2rem] rounded-md h-4" />
        <input style={{ backgroundColor: "blue" }} readOnly className="w-[5.2rem] rounded-md h-4" />
        <input style={{ backgroundColor: "blue" }} readOnly className="w-[5.2rem] rounded-md h-4"/>
      </div>
        </div>
    );
};

export default Welcome;