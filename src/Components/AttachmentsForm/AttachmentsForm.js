import React, { useState } from 'react';
import "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Components/AttachmentsForm/AttachmentsForm.css";

const AttachmentsForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(Array.from(files));
  };

  return (
    <div className="mb-3 addAttachments">
      <label htmlFor="formFileMultiple" className="form-label">
        Add Attachments
      </label>
      <input
        className="form-control"
        type="file"
        id="formFileMultiple"
        multiple
        onChange={handleFileChange}
      />
      {/* Additional code to handle selected files if needed */}
    </div>
  );
};

export default AttachmentsForm;
