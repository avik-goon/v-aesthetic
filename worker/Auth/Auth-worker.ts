import { Auth } from 'aws-amplify';

export class NewAdmin{
    username: string;
    password: string;
    name?: string;
    email?: string;
    birthdate?: string;
    gender?: string;
    phone_number?: string;

    constructor(username: string, password: string, name: string, email: string,gender: string,
        phone_number: string ){
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.birthdate = '01-01-2022';
        this.gender = gender;
        this.phone_number = '+91'+phone_number;
    }

    async handleSignup(){
        try {
         const response = await Auth.signUp({
             username: this.username,
             password: this.password,
             attributes:{
                name: this.name, 
                preferred_username: this.username, 
                email: this.email, 
                gender: this.gender, 
                birthdate: this.birthdate, 
                phone_number: this.phone_number,
                'custom:isSuperAdmin': 'true'
             }
         })   
            const awsUserData = {
                codeDeliveryDetails: response.codeDeliveryDetails,
                username: response.user.getUsername()
            }
            return awsUserData;
            
        } catch (err: any) {
            if(err.message === "User already exists"){
               return await resendCode(this.username)
            }else console.log(err);
            
        }
    }
    
}
const resendCode = async (username: string) => {
    try {
        await Auth.resendSignUp(username);
        return('code resent successfully');
    } catch (err) {
        return(err);
    }
}
export async function validateOTP(username: string, code: string){
    try {
        return await Auth.confirmSignUp(username, code);
      } catch (error) {
          return error;
      }
}
export class Admin{
    username: string;
    password: string;
    constructor(username: string, password: string ){
        this.username = username;
        this.password = password;
    }

    handleLogin(){
        
    }
}

