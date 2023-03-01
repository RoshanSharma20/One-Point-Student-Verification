import { faFileAlt, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const FileItem = ({file, removeFiles}) => {
  return (
    <li className='list-item'>
        <FontAwesomeIcon icon={faFileAlt}/>
        <p>{file.name}</p>
        <div className="action">
            {
                file.isUploading && 
                <FontAwesomeIcon icon={faSpinner} className='fa-spin'/>
            }
            {
                !file.isUploading && 
                <FontAwesomeIcon icon={faTrash}  className='fa-trash' onClick={() => {removeFiles(file.name)}}/>
            }
        </div>
    </li>
  )
}

export default FileItem ;