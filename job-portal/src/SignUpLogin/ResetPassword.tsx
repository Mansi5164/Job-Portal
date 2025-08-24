import { Modal } from '@mantine/core';
import { TextInput,Button } from '@mantine/core';
import { useState } from 'react';
import { IconAt,IconLock } from '@tabler/icons-react';
import { sendOtp, verifyOtp } from '../Service/UserService';
import { PinInput } from '@mantine/core';
import { PasswordInput  } from '@mantine/core';
import { signUpValidation } from '../Service/formValidation';
import { errorNotification, successNotification } from '../Service/NotificationService';
import { changePass } from '../Service/UserService';
import { useInterval } from '@mantine/hooks';
import { setTimeout } from 'timers/promises';
const ResetPassword = (props:any)=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passError,setpassError] = useState("");
    const [otpSent,setOtpSent] = useState(false);
    const [otpSending,setOtpSending] = useState(false);
    const [resendLoader,setResendLoader] = useState(false);
    const [verified,setVerified] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const interval = useInterval(() => {
            if(seconds === 0) {
                setResendLoader(false);
                setSeconds(60);
                interval.stop();
            }
            else{
                setSeconds((s) => s- 1)
            }
        }, 1000);

    const handleSendOtp = ()=>{
        setOtpSending(true);
        sendOtp(email).then((res)=>{
            console.log(res);
            successNotification("OTP sent successfully","Enter OTP to reset.");
            setOtpSent(true);
            setOtpSending(false);
            setResendLoader(true);
            interval.start();

        }).catch((err)=>{
            console.log(err);
            setOtpSending(false);
            // errorNotification("OTP sending failed",err.response.data.errorMessage);
            errorNotification("OTP sending failed",err?.response?.data?.errorMessage || "Something went wrong");
        })
    }

    const handleVerifyOtp = (otp:string)=>{
        verifyOtp(email,otp).then((res)=>{
            console.log(res);
            successNotification("OTP verified","Enter new password");
            setVerified(true);

        }).catch((err)=>{
            console.log(err);
            // errorNotification("OTP verification failed",err.response.data.errorMessage);
            errorNotification("OTP verification failed",err?.response?.data?.errorMessage || "Something went wrong");
        })
    }

    const resendOtp = ()=>{
        if(resendLoader) return;
        handleSendOtp();
    }
    const changeEmail = ()=>{
        setOtpSent(false);
        setResendLoader(false);
        setSeconds(60);
        setVerified(false);
        interval.stop();
    }
    const handleResetPassword = ()=>{
        
        changePass(email,password).then((res)=>{
            console.log(res);
            successNotification("Password changed..","Login with new Password");
            props.close();
        }).catch((err)=>{
            console.log(err);
            // errorNotification("Password reset failed",err.response.data.errorMessage);
            errorNotification("OTP sending failed",err?.response?.data?.errorMessage || "Something went wrong");
        })
    }
    return <div>
        <Modal opened={props.opened} onClose={props.close} title="Reset Password">
            <div className='flex flex-col gap-6 '>
                <TextInput value={email} size="md" onChange={(e)=>setEmail(e.target.value)} name="email" withAsterisk leftSection={<IconAt size={16} />} label="Email" placeholder="Your email" rightSection={ <Button  loading={otpSending} size="xs" className='mr-1' onClick={handleSendOtp} autoContrast disabled={email==="" || otpSent} variant="filled">Login</Button> } rightSectionWidth="xl"
                />
                {otpSent && <PinInput onComplete={handleVerifyOtp} length={6} className='mx-auto' size="md" type="number" />}
                {otpSent && !verified && 
                <div className='flex gap-2'>
                    <Button fullWidth loading={otpSending} color='brightSun.4' onClick={resendOtp} autoContrast variant="filled">{resendLoader ? seconds : "Resend"}</Button>
 
                    <Button fullWidth onClick={changeEmail} autoContrast variant="filled">change Email</Button>
                </div>
                }
                {
                    verified && <PasswordInput value={password}  error={passError} onChange={(e)=>{setPassword(e.target.value);
                    setpassError(signUpValidation("password",e.target.value))
                    }} name="password" withAsterisk leftSection={<IconLock size={16} />} label="Password" placeholder="Password" />
                }
                {
                    verified && <Button onClick={handleResetPassword} autoContrast variant="filled">Change Password</Button>
                }
            </div>
        </Modal>
    </div>
}

export default ResetPassword;