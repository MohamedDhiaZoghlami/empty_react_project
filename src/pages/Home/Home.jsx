import React, { useState } from "react";
import "./Home.scss";
import Logo from "../../assets/logo.png";
import { RxCountdownTimer } from "react-icons/rx";
import { BsFolder2Open } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import UploadImg from "../../assets/upload.png";
import s3 from "../../utils/aws-config";

const data = [
  {
    id: 1,
    result: "dzovi rules",
  },
  {
    id: 2,
    result: "dzovi rules",
  },
  {
    id: 3,
    result: "dzovi rules",
  },
  {
    id: 4,
    result: "dzovi rules",
  },
  {
    id: 5,
    result: "dzovi rules",
  },
  {
    id: 6,
    result: "dzovi rules",
  },
  {
    id: 7,
    result: "dzovi rules",
  },
];
const Home = () => {
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
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
    setFileName(e.target.files[0].name);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(file, "ss", title);
    // if (!file) return;

    // const params = {
    //   Bucket: "code-sources",
    //   Key: `${title}/${file[0].name}`,
    //   Body: file[0],
    // };

    // s3.upload(params, (err, data) => {
    //   if (err) {
    //     console.error("Error uploading file:", err);
    //   } else {
    //     console.log("File uploaded successfully:", data.Location);
    //   }
    // });
  };
  return (
    <div className="filesWrapper">
      {modal && (
        <div className="uploadWrapper">
          <div className="parent">
            <div className="file-upload">
              <AiOutlineClose
                className="iconC"
                onClick={() => setModal(false)}
              />
              <img src={UploadImg} alt="upload" />
              <h3> {fileName || "Click box to upload"}</h3>
              <p>Maximun file size 10mb</p>
              <input type="file" onChange={(e) => handleProjectFile(e)} />
            </div>
          </div>
        </div>
      )}
      <div className="leftBox">
        <div className="LtopLevel">
          <img src={Logo} alt="logo" />
          <h3>Fraud Detection Logiciel</h3>
        </div>
        <div className="LbottomLevel">
          <div className="btnPro">
            Project <RxCountdownTimer className="iconBtn" />
          </div>
        </div>
      </div>
      <div className="rightBox">
        <div className="RtopLevel">
          <div className="inputWrapper">
            <label>Project Name : </label>
            <div className="inputF">
              <input type="text" onChange={(e) => handleProjectName(e)} />
              <BsFolder2Open className="iconF" />
            </div>
          </div>
          <div className="btnWrapper">
            <div className="btnUpload" onClick={() => setModal(true)}>
              Upload
            </div>
            <div className="btnConfirm" onClick={(e) => submitForm(e)}>
              Confirm
            </div>
          </div>
        </div>
        <div className="RbottomLevel">
          <table>
            <tr>
              <th>ID</th>
              <th>Result</th>
            </tr>
            {data.map((e) => (
              <tr>
                <td>{e.id}</td>
                <td>{e.result}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
