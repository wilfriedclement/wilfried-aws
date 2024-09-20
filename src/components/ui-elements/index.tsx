

/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 20/09/2024 - 13:14:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/09/2024
    * - Author          : Hp
    * - Modification    : 
**/

import { InputOTPPattern } from "../otp"
import FormSection from "./FormSection"
import FriendsList from "./friends"
import Welcome from "./welcome"

export interface Iactive {
    active: number
}

function Index({ active }: Iactive) {
        if(active === 0){
            return(
                <FormSection/>
            )
        }
        if(active === 1){
            return(
                <InputOTPPattern/>
            )
        }
        if(active === 2){
            return(
                <FriendsList/>
            )
        }
        if(active === 3){
            return(
                <Welcome/>
            )
        }
}

export default Index