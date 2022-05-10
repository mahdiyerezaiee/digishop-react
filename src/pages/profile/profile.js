import './profile.css'
import {useAuthValue} from '../../context/AuthContext'
import {createUserWithEmailAndPassword, signOut, updateProfile, updateEmail} from 'firebase/auth'
import {getDownloadURL, getStorage, ref, StorageReference, uploadBytes} from "firebase/storage";
import {getAuth} from "firebase/auth";
import {useState} from "react";
import {Card, CardImg, Title, ListGroup, ListGroupItem, FormControl, Form, Button} from "react-bootstrap";
import {auth} from "../../firebase/firebase";
import Sidebar from "../../Admin/components/sidebar/Sidebar";

function Profile() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const storage = getStorage()
    const [imageAsUrl, setImageAsUrl] = useState('')
    const [file, setFile] = useState('')
    const [img, setImg] = useState('')

    const user = auth.currentUser;

    if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;


        const emailVerified = user.emailVerified;
        const uid = user.uid;

    }


// 'file' comes from the Blob or File API


    // const upload = ()=>{
    //     if(file == null)
    //         return;
    //     ref(storage,`/images/${file.name}`).put(file)
    //         .on("state_changed" , alert("success") , alert);
    // }
    const handleFireBaseUpload = e => {
        e.preventDefault()

        const storageRef = ref(storage, `image/${file.name}`);
        uploadBytes(storageRef, file).then(() => {
            setFile(e.target.files[0])
            console.log('Uploaded a blob or file!');
        });

        getDownloadURL(storageRef)
            .then((url) => {
                setImg(url)
                user.photoURL = img

            })
            .catch((error) => {
                console.log(error)
            });

        updateProfile(user, {
            photoURL: img
        })
            .then(() => {

                setFile(e.target.files[0])

            })

    }
    const nameUpdateHandler = e => {
        e.preventDefault()
        updateProfile(user, {
            displayName: name,
            // photoURL: img
        })
            .then(() => {
                setName(e.target.value)
                // setFile(e.target.files[0])

            })

            .then(() => {
                alert("done")

            })
    }
    console.log("file:", file)


    return (

        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <div className='center'>
                    <Card style={{width: '25rem'}}>


                        <Card.Img variant="top"  src={user.photoURL}  className="card-img" />
                        <input type="file"
                               value={""}
                               onChange={(e) => setFile(e.target.files[0])}
                        />

                        <Button onClick={handleFireBaseUpload} variant="dark">آپلود تصویر</Button>
                        <Card.Body>
                            <Card.Title>صفحه کاربری</Card.Title>
                            <Card.Text as="div">
                                <h6>عزیز خوش آمدی :{user.displayName}</h6>
                                <p>اطلاعات کاربری</p>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>ایمیل:{user.email} </ListGroupItem>
                            <ListGroupItem>نام و نام خانوادگی :{user.displayName}</ListGroupItem>
                            <FormControl className="  my-3"
                                         type='name'
                                         value={name}

                                         placeholder="نام"
                                         onChange={e => setName(e.target.value)}/>

                            <Button onClick={nameUpdateHandler} variant="dark">تغییر نام جدید</Button>

                            {/*<button onClick={upload}>Upload</button>*/}
                        </ListGroup>

                        {/*<Card.Body>*/}

                        {/*    <Card.Link onClick={() => signOut(auth)}>خروج</Card.Link>*/}
                        {/*</Card.Body>*/}
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default Profile
