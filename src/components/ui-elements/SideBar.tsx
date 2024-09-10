/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 07/09/2024 - 19:39:50
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/09/2024
    * - Author          : Hp
    * - Modification    : 
**/
import Logo from "/logo.svg"
import Step from '../items/Step'
import SidebarMock from '@/utils/Sidebar.mock'
import { useState } from 'react'
import PasswordInputProgress from "../items/xam"

function SideBar() {
    const [isActive, SetIsActive] = useState(0)
    const taille = SidebarMock.length
    function next(){
        SetIsActive((isActive)=> (isActive + 1)%taille)
    }
    function preview(){
        SetIsActive((isActive)=>(isActive + (taille -1 ))%taille)
    }

    return (
        <section className='hidden flex-1 md:flex px-4 flex-col items-center justify-between py-10 bg-bgme'>
          <div>
          <img src={Logo} alt="" />
            <div className="mt-10">
                {SidebarMock.map((item, index) => (
                    <Step key={index} className={index === isActive ? "text-black flex gap-4   w-full h-20  items-center justify-start" : "text-gray-400 flex gap-4   w-full h-20 items-center justify-start"} icon={item.icon} title={item.title} description={item.description} />
                ))}

            </div>
          </div>
          <PasswordInputProgress/>
            <div className="flex justify-self-end	w-full justify-between">
                <button className="flex"> <svg xmlns="http://www.w3.org/2000/svg" className="text-[#00539C]"  viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                    <path d="M3.99982 11.9998L19.9998 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg> <span className="text-[#00539C]" onClick={preview}> Vos Détails</span></button>
                <button className="text-[#00539C]" onClick={next}>Sign In</button>
            </div>
        </section>
    )
}

export default SideBar