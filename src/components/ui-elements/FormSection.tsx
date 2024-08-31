/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 31/08/2024 - 19:22:21
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
import React from 'react'
import Logo from "/logo.svg"
import Input from '../items/input'
import Button from '../items/button'

function FormSection() {
    return (
        <section className='flex-[2] flex-col bg-fuchsia-400 items-center flex justify-start' >
             <div className='w-[50%] items-center justify-start'>
          <img src={Logo} alt="" className='w-[50rem]' />
            </div>
        <h1 className='text-[#18181B] text-[3rem] font-medium py-8'>Connexion</h1>
        <p className='font-medium text-[1.2rem] text-[#71717A]'>ConnexionRentrez vos infos pour vous connecter .</p>
        <Input htmlFor={'Email'} type={'input'} className={"gap-6 px-4 font-sans rounded-md h-[3rem] bg-[#E4E4E7] w-[90%]"} placeholder={'abc@example.com'}/>
        <Input htmlFor={'Mot de passe'} type={'input'} className={"gap-6 px-4 rounded-md h-[3rem] bg-[#E4E4E7] w-[90%]"} placeholder={'*****************'}/>
        <div className='flex ml-[-4rem] gap-1.5 mt-10'>
            <div className='rounded-md cursor-pointer w-[9rem] h-2 bg-[#FF0808]'></div>
            <div className='rounded-md cursor-pointer w-[9rem] h-2 bg-[#D9D9D9]'></div>
            <div className='rounded-md cursor-pointer w-[9rem] h-2 bg-[#D9D9D9]'></div>
            <div className='rounded-md cursor-pointer w-[9rem] h-2  bg-[#D9D9D9]'></div>
        </div>
        <div className='flex w-[60%] gap-3 justify-start items-center mt-10'><hr className='w-[17rem] mt-2.9 bg-[#E4E4E7] h-0.5 ' /><h1 className='text-[#71717A] '>ou avec</h1><hr className='w-[15rem] mt-2.9 h-0.5 bg-[#E4E4E7]'/></div>
        <div className='justify-center flex gap-2 mt-10 items-center w-[53.5%] ml-[-4rem] h-[3rem] font-medium rounded-md border border-black border-solid'>
            <img src="/public/git.svg"  alt="" className='cursor-pointer' />
            <h1>Github</h1>
        </div>
        <div className='justify-center mt-10 flex  gap-2 items-center w-[53.5%] ml-[-4rem] h-[3rem] font-medium rounded-md border border-black border-solid'>
            <img src="/public/google.svg"  alt="" className='cursor-pointer'/>
            <h1>Github</h1>
        </div>
        <Button type={"button"} text={"Creer le Compte"} className=" cursor-pointer  rounded-md w-[37rem] h-[2.5rem] text-[1.5rem] translate-y-0 hover:animate-pulse ml-[-2rem] bg-[#00539C]"></Button>
        <p className='pt-4 text-[1rem] '>By clicking continue, you agree to our
         <br />  Terms of Service and Privacy Policy.</p>
         <div className='flex ml-[-4rem] gap-1.5 mt-10 '>
            <div className='rounded-md w-[9rem] h-2 cursor-pointer bg-[#00539C]'></div>
            <div className='rounded-md w-[9rem] cursor-pointer h-2 bg-[#D9D9D9]'></div>
            <div className='rounded-md cursor-pointer w-[9rem] h-2 bg-[#D9D9D9]'></div>
            <div className='rounded-md w-[9rem] h-2 cursor-pointer  bg-[#D9D9D9]'></div>
        </div>
        </section>
    )
}

export default FormSection