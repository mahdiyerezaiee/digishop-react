import {useState} from 'react'
import './form.css'
import {auth} from '../../firebase/firebase'
import {useNavigate, Link} from 'react-router-dom'
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {useAuthValue} from "../../context/AuthContext";
import {Form , FormGroup ,FormLabel, FormControl , Button} from 'react-bootstrap'
import {getStorage , ref ,getDownloadURL} from "firebase/storage";
import {storage} from "../../firebase/firebase";

function Register() {


    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [file, setFile] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {setTimeActive} = useAuthValue()

    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== ''){
            if (password !== confirmPassword) {
                isValid = false
                setError('Passwords does not match')
            }
        }
        return isValid
    }

    const register = e => {
        e.preventDefault()
        setError('')
        if(validatePassword()) {
            // Create a new user with email and password using firebase
            createUserWithEmailAndPassword(auth, email,name, password,file)
                .then(()=>{
                    return updateProfile(auth.currentUser,{
                        displayName: name,
                        photoUrl: file,
                    })


                })
                .then(() => {


                    setTimeActive(true)
                    navigate('/profile')
                        .catch((err) => alert(err.message))
                })
                .catch(err => setError(err.message))
        }
        setEmail('')
        setName('')
        setPassword('')
        setConfirmPassword('')
        setFile('')

    }

    return (
        <div className='center'>
            <div className='box'>
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
            </div>
            <div className='auth'>

                <h3>فرم ثبت نام</h3>
                {error && <div className='auth__error'>{error}</div>}
                <Form onSubmit={register} name='registration_form'>
                    <FormGroup  className="mb-3 p-1 my-3" >

                        <FormControl className="  my-3"
                                     type='email'
                                     value={email}
                                     placeholder="ایمیل خود را وارد کنید"
                                     required
                                     onChange={e => setEmail(e.target.value)}/>
                        <FormControl className=" my-3"
                                     type='name'
                                     value={name}
                                     placeholder="نام خودرا وارد کنید"
                                     required
                                     onChange={e => setName(e.target.value)}/>

                        <FormControl className=" my-3"
                                     type='password'
                                     value={password}
                                     required
                                     placeholder='رمز عبور'
                                     onChange={e => setPassword(e.target.value)}/>

                        <FormControl className="  my-3"
                                     type='password'
                                     value={confirmPassword}
                                     required
                                     placeholder='تکرار رمز عبور'
                                     onChange={e => setConfirmPassword(e.target.value)}/>

                        <Button variant="primary" className="  my-1" type='submit'>ثبت نام</Button>
                    </FormGroup>

                </Form>
                <span>
          اکانت دارید?
          <Link  to='/login'>ورود</Link>
        </span>
            </div>
        </div>
    )
}

export default Register