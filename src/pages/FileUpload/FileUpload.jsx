import React, { useState, useEffect } from "react";
import "./FileUpload.scss";
import axios from "axios";
import s3 from "../../utils/aws-config";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleProjectName = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setTitle(e.target.value);
  };
  const handleProjectFile = (e) => {
    e.preventDefault();
    console.log(typeof e.target.files);
    console.log(e.target.files[0]);
    setFile(e.target.files);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!file) return;

    const params = {
      Bucket: "code-sources",
      Key: `${title}/${file[0].name}`,
      Body: file[0],
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.error("Error uploading file:", err);
      } else {
        console.log("File uploaded successfully:", data.Location);
      }
    });
  };
  return (
    <div>
      <form>
        <input type="text" onChange={(e) => handleProjectName(e)} />
        <input type="file" onChange={(e) => handleProjectFile(e)} />
        <button onClick={(e) => submitForm(e)}>Click me</button>
      </form>
    </div>
  );
};

export default FileUpload;
