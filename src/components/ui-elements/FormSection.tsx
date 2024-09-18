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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { RiGoogleFill } from "react-icons/ri";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} 
from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import PasswordStrength from "../items/password";

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

function FormSection() {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
    return (
        <section className='flex-[2] flex-col items-center flex justify-start' >
          <div className="  flex-col flex w-[23rem]  justify-start    h-full">
            <img src="/public/logo.svg" alt="" className=" w-[20rem] mx-4" />
            <h1 className="text-[#18181B] font-semibold text-3xl flex justify-center items-center">Connexion</h1>
            <p className="w-[19rem] font-light text-[#71717A] px-6">Rentrez vos infos pour vous connecter .</p>
              <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

        <FormField 
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input className="w-full bg-[#D9D9D9]" placeholder="abc@examplegmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <PasswordStrength/>
        <Button type="submit" className="w-full bg-[#00539C]">create Account</Button>
        <div className="flex justify-between  gap-2"><hr className="h-0.5 bg-[#71717A] w-[9rem]" /><h1 className="mt-[-0.9rem] text-[#71717A]">ou avec</h1><hr className="h-0.5 bg-[#71717A]  w-[9rem]" /></div>
       <Button type="submit" className="w-full flex gap-[0.5rem] border-solid bg-white text-black border-[#E4E4E7] justify-center">
       <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
       Gitbub
       </Button>
       <Button type="submit" className="w-full border-[#E4E4E7] border-solid bg-white text-black flex gap-[0.5rem] justify-center">
       <RiGoogleFill />
        Google
       </Button>
      <p className="text-[1rem] mx-10 mt-[-1rem] text-[#71717A]">By clicking continue, you agree to our <br/>
               Terms of Service and Privacy Policy.</p> 
      </form>
    </Form>
  
  </div>
        </section>
    )
}

export default FormSection