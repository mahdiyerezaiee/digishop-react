import {useState} from 'react'
import { Link } from 'react-router-dom'
import './form.css'
import {signInWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth'
import {auth} from '../../firebase/firebase'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from '../../context/AuthContext'
import {Form , FormGroup ,FormLabel, FormControl , Button} from 'react-bootstrap'

function Login(){

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {setTimeActive} = useAuthValue()
    const navigate = useNavigate()

    const login = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {

                navigate('/admin')

            })
            .catch(err => setError(err.message))
    }
    const forgotpasswordHandler=(e)=>{
        e.preventDefault()
        sendPasswordResetEmail(auth, email)
            .then(()=>{
                setEmail(e.target.value)

            })
    }
    return(
        <div className='center '>
            <div className='box'>
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
            </div>
            <div className='auth'>
                <h3>ورود</h3>
                {error && <div className='auth__error'>{error}</div>}
                <Form  onSubmit={login} name='login_form'>
                    <FormGroup  className="mb-3 my-3">
                        <FormControl  className="  my-3"
                                      type='email'
                                      value={email}
                                      required
                                      placeholder="ایمیل"
                                      onChange={e => setEmail(e.target.value)}/>

                        <FormControl  className="  my-3"
                                      type='password'
                                      value={password}
                                      required
                                      placeholder='رمز عبور'
                                      onChange={e => setPassword(e.target.value)}/>

                        <Button variant="primary" type='submit'>ورود</Button>
                    </FormGroup>
                </Form>
                <p>

                    <Link to='/reset-password'>فراموشی رمز</Link>
                </p>
                <p>
                    قبلا ثبت نام نکرده اید?
                    <Link to='/register'>ساخت اکانت</Link>
                </p>
            </div>
        </div>
    )
}

export default Login