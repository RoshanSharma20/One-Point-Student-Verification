import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FileList from './FileList'
import NavBar from './NavBar';

function UploadDocs (){
    
    const [files, setFiles] = useState([
        {}
    ]) ;
    // const [files, setFiles] = useState([
    //     {
    //         currentFile : undefined ,
    //         previewImage : undefined ,
    //         progress : 0,
    //         // message : "" 
    //     }
    // ]) ;
    
    const [file, setFile] = useState(
        {
            currentFile : undefined ,
            previewImage : undefined ,
            progress : 0
        }
    ) ;
    //[{name : "myfile.pdf"}, {name : "myfile2 with very very very .....long long name.pdf"}, {name : "myfile3.pdf"}]) ;

    const removeFiles = (filename) => {
        console.log("remove files called");
        setFiles(files.filter((file) => file.currentFile.name != filename)) ;
    }

    const uploadHandler = (event) => {
        const currentFile = event.target.files[0] ;
        const previewImage = URL.createObjectURL(currentFile) ;
        const progress = Math.round((100 * event.loaded) / event.total);

        setFile({
            currentFile,
            previewImage,
            progress
        }) ;

        // file.isUploading = true ;
        // if(!file) return ;

        setFiles([...files, file]) ;

        //upload file
        // const formData = new FormData() ;
        // formData.append(
        //     file.name,
        //     file,
        //     "10th marksheet"
        // )
        // file.isUploading = false ;
    }

    return (
        <div className='upload-col'>
            <div className='file-card'>
                <div className='file-inputs'>
                    <input type='file' onChange={uploadHandler}/>
                    <button className='upload-button'>
                        <i>
                            <FontAwesomeIcon icon={faPlus} />
                        </i> 
                        Upload
                    </button>
                </div>

                <p className='main'>Support Files</p>
                <p className='info'>JPG, PNG, PDF</p>

                {file.currentFile && 
                    <div className="progress-bar progress-bar-info progress-bar-striped" 
                        role="progressbar"
                        aria-valuenow={file.progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: file.progress + "%" }}
                    >
                        {file.progress}%
                    </div>
                }
            </div>

            <FileList files={files} removeFiles={removeFiles}/>
        </div>
    );
}

export default UploadDocs ;