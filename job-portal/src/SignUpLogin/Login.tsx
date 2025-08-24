import { rem,TextInput,PasswordInput ,Button} from "@mantine/core";
import { IconAt ,IconLock ,IconCheck, IconX} from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { loginUser } from "../Service/UserService";
import { useNavigate } from "react-router-dom";
import { loginValidation } from "../Service/formValidation";
import { notifications } from '@mantine/notifications';
import ResetPassword from "./ResetPassword";

const form ={
    email:"",
    password:""
}

const Login =  ()=>{
    const [opened, { open, close }] = useDisclosure(false);
    const [formError,setFormError] = useState<{[key:string]:string}>(form);
    const [data,setData] = useState<{[key:string]:string}>(form);
    const navigate = useNavigate();

        const handleChange=(event:any)=>{
            setFormError({...formError,[event.target.name]:""});
            setData({...data,[event.target.name]:event.target.value});
        }
    
        const handleSubmit = ()=>{
            let valid=true, newFormError:{[key:string]:string}={};
            for(let key in data){
                newFormError[key]=loginValidation(key,data[key]);
                if(newFormError[key]) valid=false;
            }
            setFormError(newFormError);
            if(valid){
                loginUser(data).then((res) =>{
                    console.log(res);
                    notifications.show({
                    title: 'Login Successfully',
                    message : 'Redirecting to home page..',
                    withCloseButton : true,
                    icon:<IconCheck style={{width:"90%" , height : "90%"}} />,
                    color:"teal",
                    withBorder:true,
                    className:"!border-green-500"
                })
                setTimeout(()=>{
                    navigate("/");
                },4000);
                }).catch((err)=>{
                    console.log(err);
                    console.log(err);
                    const errorMsg =
                                    err.response?.data?.errorMessage ||    // backend error
                                    err.message ||                         // axios / network error
                                    "Something went wrong, please try again.";
                    notifications.show({
                        title: 'login Failed',
                        message : errorMsg,
                        withCloseButton : true,
                        icon:<IconX style={{width:"90%" , height : "90%"}} />,
                        color:"red",
                        withBorder:true,
                        className:"!border-red-500"
                    })
                });
            }
        }

    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Create Account </div>

        <TextInput value={data.email}  error={formError.email} onChange={handleChange} name="email" withAsterisk leftSection={<IconAt style={{width:rem(16) , height:rem(16)}} />} label="Email" placeholder="Your email"/>

        <PasswordInput value={data.password}  error={formError.password} onChange={handleChange} name="password" withAsterisk leftSection={<IconLock style={{width:rem(18) , height:rem(18)}}  stroke={1.5} />} label="Password" placeholder="Password" />

        <Button onClick={handleSubmit} autoContrast variant="filled">Login</Button>
        <div className="mx-auto">Don't have an Account? <span onClick={()=>{navigate("/signup");setFormError(form); setData(form);}} className="text-bright-sun-400 hover:underline cursor-pointer">Sign Up</span></div>
        <div onClick={open} className="text-bright-sun-400 hover:underline cursor-pointer text-center">Forget Password?</div>
        <ResetPassword opened={opened} close={close} />
    </div>
}

export default Login;