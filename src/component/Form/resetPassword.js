import {auth} from "../../firebase/firebase";
import {sendPasswordResetEmail} from 'firebase/auth';
import {useAuthValue} from '../../context/AuthContext';
import {useState} from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks
import {getAuth} from "firebase/auth";
import {Alert, Button, Container, FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";

const ResetPassword = () => {
    const [email, setEmail] = useState('')
    const [show, setShow] = useState(true);

    const forgotpasswordHandler=(e)=>{
        e.preventDefault()
        sendPasswordResetEmail(auth, email)
            .then(()=>{
                setEmail(e.target.value)
            })
            .then(()=>{
                alert( "لینک تغییر رمز عبور به ایمیل شما ارسال شد لطفا ایمیل خود را چک کنید")

            })
    }
    return(
        <div className="my-3">
            <Container>
                <FormControl  className="  my-3"
                              type='email'
                              value={email}
                              required
                              placeholder="ایمیل"
                              onChange={e => setEmail(e.target.value)}/>
                <Button onClick={forgotpasswordHandler} onSubmit={()=>setShow(show)} variant="dark" >فراموشی رمز</Button>

                <Alert show={false} variant="success" className="md-3" >
                    <p className="text-center p-3">
                        لینک تغییر رمز عبور به ایمیل شما ارسال شد لطفا ایمیل خود را چک کنید
                    </p>


                </Alert>
            </Container>
        </div>
    )

}
export default ResetPassword