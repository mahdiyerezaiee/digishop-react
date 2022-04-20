import './profile.css'
import {useAuthValue} from '../../context/AuthContext'
import {signOut, updateProfile} from 'firebase/auth'
import {getDownloadURL, getStorage, ref, StorageReference} from "firebase/storage";
import {getAuth} from "firebase/auth";
import {useState} from "react";
import {Card, CardImg, Title, ListGroup, ListGroupItem, FormControl, Form, Button} from "react-bootstrap";
import {auth} from "../../firebase/firebase";

function Profile() {
    const storage=getStorage()
    const allInputs = {imgUrl: ''}
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    const [file, setFile] = useState('')

    const user = auth.currentUser;

    if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;

    }
    const handleFireBaseUpload = e => {
        e.preventDefault()
        // async magic goes here...

        const mountainsRef = ref(storage, `image/${file}`);

        getDownloadURL(mountainsRef)
            .then(function (fireBaseUrl) {
                console.log(fireBaseUrl)

            })

    }

    return (


        <div className='center'>
            <Card style={{width: '25rem'}}>

                {/*<Form onSubmit={handleFireBaseUpload}>*/}
                {/*    <FormControl className="  my-3"*/}
                {/*                 type='file'*/}

                {/*                 placeholder="عکس پروفایل"*/}
                {/*                 required*/}
                {/*                 onChange={e => setFile(e.target.value)}/>*/}
                {/*<Button type="submit">ثبت تصویر</Button>*/}
                {/*</Form>*/}
                <Card.Img variant="top" src={imageAsUrl.imgUrl}/>

                <Card.Body>
                    <Card.Title>صفحه کاربری</Card.Title>
                    <Card.Text>
                        <h6>عزیز خوش آمدی{user.displayName}</h6>
                        <p>اطلاعات کاربری</p>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>ایمیل:{user.email} </ListGroupItem>
                    <ListGroupItem>نام و نام خانوادگی :{user.displayName}</ListGroupItem>
                </ListGroup>
                <Card.Body>

                    <Card.Link onClick={() => signOut(auth)}>خروج</Card.Link>
                </Card.Body>
            </Card>
            {/*        <div className='profile'>*/}
            {/*          <h3>صفحه کاربری</h3>*/}
            {/*<h6>عزیز خوش آمدی{user.displayName}</h6>*/}
            {/*            <p>اطلاعات کاربری</p>*/}
            {/*          <p><strong>ایمیل: </strong>{user.email}</p>*/}
            {/*          <p><strong>نام: </strong>{user.displayName}</p>*/}
            {/*            <p><strong> </strong><img src={}/></p>*/}
            {/*          <span ></span>*/}
            {/*        </div>*/}
        </div>
    )
}

export default Profile
