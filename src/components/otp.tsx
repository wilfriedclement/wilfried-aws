/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 11/09/2024 - 19:02:17
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/09/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { Button } from "@/components/ui/button"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"

  <InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

export function InputOTPPattern() {
  return (
    <div className="flex-1 bg-amber-400  flex items-center justify-center flex-col mt-[-5rem] ">
      <img src="/public/logo3.svg" alt="worketyamo's icon" className=" mx-auto mt-[2rem] w-[4rem]" />
      <h1 className="font-semibold text-[2rem] my-[4rem]">Verification</h1>
    <h1 className=" flex text-[1.5rem] text-[#71717A] mt-[-4rem]">Enter your otp code</h1>  
      <h1 className="ml-[-18rem] mt-5">code OTP</h1>
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup className=" rounded-md  mt-5 gap-4">
        <InputOTPSlot index={0} className="border-black border-[0.2rem] w-[3rem] rounded-md bg-[#E4E4E7]"/>
        <InputOTPSlot index={1} className="border-black bg-[#E4E4E7] border-[0.2rem] w-[3rem] rounded-md "/>
        <InputOTPSlot index={2} className="border-black bg-[#E4E4E7] border-[0.2rem] w-[3rem] rounded-md "/>
        <InputOTPSlot index={3} className="border-black border-[0.2rem] w-[3rem] bg-[#E4E4E7] rounded-md "/>
        <InputOTPSlot index={4} className="border-black border-[0.2rem] w-[3rem] bg-[#E4E4E7] rounded-md "/>
        <InputOTPSlot index={5} className="border-black border-[0.2rem] w-[3rem] bg-[#E4E4E7] rounded-md "/>
      </InputOTPGroup>
    </InputOTP>
    <Button type="submit" className="w-[23rem] bg-[#00539C] mt-10">Verify otp</Button>
    <p className="text-center font-inter text-gray-600 text-[1rem] w-[90%] py-8">
                        By clicking continue, you agree to our <br />
                        <a href="https://ui.shadcn.com/terms" className="underline">Terms of service</a> and&nbsp;
                        <a href="https://ui.shadcn.com/privacy" className="underline"> Privacy Policy</a>
                    </p>
                    <div style={{ display: "flex", gap: "10px", marginTop: "10px" } } >
        <input style={{ backgroundColor: "blue" }} readOnly className="w-[5.2rem] rounded-md h-4" />
        <input style={{ backgroundColor: "blue" }} readOnly className="w-[5.2rem] rounded-md h-4" />
        <input style={{ backgroundColor: "gray" }} readOnly className="w-[5.2rem] rounded-md h-4" />
        <input style={{ backgroundColor: "gray" }} readOnly className="w-[5.2rem] rounded-md h-4"/>
      </div>
    </div>
    
  )
}