import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import UploadDocs from '../UploadDocs';

function Form (){

    const [photo, setPhoto] = useState() ;
       
    const uploadPhoto = (event) => {
        const studentPhotoFile = event.target.files[0] ;
        const studentPhoto = URL.createObjectURL(studentPhotoFile) ;
        setPhoto(studentPhoto) ;
    }

    return (
        <div className='form-container'>
            <form className='form-page' action="#" method="POST" encType="multipart/form-data">
                <div className="form-photo">
                    <input type="file" id="photo" name="photo" accept="image/*" required onChange={uploadPhoto}></input>
                    <div className="square-box">
                        {photo && <img className='photo-box' src={photo}></img>}
                        {  
                            photo || 
                                <i>
                                    <FontAwesomeIcon icon={faUpload} />
                                    <p>Upload Photo</p>
                                </i>
                        }
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact:</label>
                    <input type="tel" id="contact" name="contact" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="documents">Documents:</label>
                </div>
            </form>

                <UploadDocs /> 
                <button className='submit-button' type="submit">Submit</button>
        </div>
    )  
}

export default Form