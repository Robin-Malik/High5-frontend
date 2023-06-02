import React, { useEffect, useState,  useRef } from 'react';
import AvatarEditor from 'react-avatar-edit';

const AvatarChange = () => {

    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageSelect = () => {
        fileInputRef.current.click();
      };
    
 

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
        setPreview(reader.result);
        };
    };

    useEffect(() => {
        console.log(preview);
    }, [preview])
    

 

  return (
    <div>

    <div>
        <button onClick={handleImageSelect}>Select Image</button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
    
    {preview && (
        <AvatarEditor
          width={250}
          height={250}
          border={50}
          borderRadius={125}
          src={preview}
          
          
        />
      )}
      </div>
  )
}

export default AvatarChange