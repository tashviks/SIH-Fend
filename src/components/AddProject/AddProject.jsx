import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { addProjectRoute } from '../../utils/APIRoutes';
import "../../css/addproject.css";

const tagsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'SQL',
];

const AddProject = () => {
  const [teamLeader, setTeamLeader] = useState('');
  const [teamMembers, setTeamMembers] = useState(['']);
  const [facultyMentor, setFacultyMentor] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [pdfFIle, setPdfFIle] = useState("");
  const [rarFile, setRarFile] = useState("");
  const [images, setImages] = useState([]);

  const navigate = useNavigate();
  const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
  };

  const handleTeamMemberChange = (index, value) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = value;
    setTeamMembers(updatedMembers);
  };

  const handleAddTeamMember = () => {
    setTeamMembers([...teamMembers, '']);
  };

  const handleRemoveTeamMember = (index) => {
    const updatedMembers = [...teamMembers];
    updatedMembers.splice(index, 1);
    setTeamMembers(updatedMembers);
  };

  const handleTagSelection = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    setImages(uploadedImages);
  };

  const handlePdfUpload = (event) => {
    const uploadedPdf = event.target.files[0];
    setPdfFIle(uploadedPdf);
  }

  const handleRarUpload = (event) => {
    const uploadedRar = event.target.files[0];
    setRarFile(uploadedRar);
  }

  const handleValidation = () => {
    if (teamLeader === "") {
      toast.error(
        "Enter Team Leader Name",
        toastOptions
      );
      return false;
    }
    else if (projectTitle === "") {
      toast.error(
        "Enter Project Title",
        toastOptions
      );
      return false;
    }
    else if (projectDescription === "") {
      toast.error(
        "Enter Project Description",
        toastOptions
      );
      return false;
    }
    else if (selectedTags.length === 0) {
      toast.error(
        "Select Suitable Tags",
        toastOptions
      );
      return false;
    }
    else if (images.length === 0) {
      toast.error(
        "Select Atleast One Image",
        toastOptions
      );
      return false;
    }
    return true;
  }

  function convertToBase64(file) {
    return new Promise((resolve, reject)=> {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = ()=>{
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userEmail = JSON.parse(localStorage.getItem("loginCredentials")).email;
    for (let i = 0; i < images.length; i++) {
      setImages(images.map(async (image)=> {return await convertToBase64(image)}))
    }
    async function convert() {
      setPdfFIle(await convertToBase64(pdfFIle))
      setRarFile(await convertToBase64(rarFile))
    }
    convert();
    if (handleValidation()) {
      const { data } = await axios.post(addProjectRoute, {
        userEmail,
        teamLeader,
        teamMembers,
        facultyMentor,
        projectTitle,
        projectDescription,
        selectedTags,
        pdfFIle,
        rarFile,
        images,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        navigate("/");
      }
    }
  };

  return (
    <div className='form-container'>
      <h1>Project Submission Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Team Leader Name:</label>
          <input
            type="text"
            className="text-input"
            value={teamLeader}
            onChange={(e) => setTeamLeader(e.target.value)}
          />
        </div>
        <div>
          <label>Team Members:</label>
          {teamMembers.map((member, index) => (
            <div key={index}>
              <input
                type="text"
                className="text-input"
                value={member}
                onChange={(e) => handleTeamMemberChange(index, e.target.value)}
              />
              <button type="button" onClick={() => handleRemoveTeamMember(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddTeamMember}>
            Add Member
          </button>
        </div>
        <div>
          <label>Faculty Mentor Name:</label>
          <input
            type="text"
            className="text-input"
            value={facultyMentor}
            onChange={(e) => setFacultyMentor(e.target.value)}
          />
        </div>
        <div>
          <label>Project Title:</label>
          <input
            type="text"
            className="text-input"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Project Description:</label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Select Relevant Tags:</label>
          <div>
            {tagsData.map((tag) => (
              <label key={tag}>
                <input
                  type="checkbox"
                  value={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagSelection(tag)}
                />
                {tag}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label>Upload Images:</label>
          <input type="file" multiple accept=".jpg, .png, .jpeg" onChange={handleImageUpload} />
        </div>
        <div>
          <label>Upload rar or zip:</label>
          <input type="file" accept=".zip, .rar" onChange={handleRarUpload} />
        </div>
        <div>
          <label>Upload pdf of report: </label>
          <input type="file" accept=".pdf" onChange={handlePdfUpload} />
        </div>
        <div>
          <button type="submit" id="addproject">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </div>
    
  );
};

export default AddProject;