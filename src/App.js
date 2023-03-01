import { useState } from 'react';
import './App.css';
import UploadDocs from './Components/UploadDocs';
import FileList from './Components/FileList';
import Form from './Components/UploadingForm/Form'

function App() {
    
    const [files, setFiles] = useState([{name : "myfile.pdf"}, {name : "myfile2 with very very very .....long long name.pdf"}, {name : "myfile3.pdf"}]) ;

    const removeFiles = (filename) => {
        console.log("remove files called");
        setFiles(files.filter((file) => file.name != filename)) ;
    }

    // const 
    return (
        <main>
            {/* <div className='card'>
                <div className='title'>
                    <h1>Login portal</h1>
                </div>
                <div className='two-col'>
                    <div className='student'>
                        <div className='circle'>
                            <div className='circle-inside'>
                                <img src='student.png' style={{ width: 200, height: 200 }}></img>
                                <span>Students</span>
                            </div>
                        </div>
                    </div>
                    <div className='college'>
                        <div className='circle'>
                            <div className='circle-inside'>
                                <img src='college.png' style={{ width: 200, height: 200 }}></img>
                                <span>Colleges</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <Form />
            {/* <Form files={files} setFiles={setFiles} removeFiles ={removeFiles}/> */}
            {/* <UploadPage />  */}
        </main>
    );
}

export default App;
