import React, { useState } from "react";
import Edit from "./Edit";
import Button  from '@mui/material/Button';

function Template() {
  const [isEditing, setIsEditing] = useState(false);

  const [text, setText] = useState("Jennifer");
  const [role, setRole] = useState("software Engieneer");
  const [address, setAddress] = useState("21 Street, Texas,usa");
  const [phone, setPhone] = useState("9765548978");
  const [email, setEmail] = useState("abc@h.com");
  const [social, setSocial] = useState("github Link\n linkdin link");
  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor."
  );

  const [work, setWork] = useState([]);
  const [workList, setworkList] = useState([]);

  const [skills, setSkills] = useState(["skill1", "skill2"]);

  const [educationList, setEducationList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const sumbmitHandler1 = (e) => {
    setWork([...work, e]);
  };

  const handleTextchange = (newText) => {
    setText(newText);
  };
  const handleRolechange = (newRole) => {
    setRole(newRole);
  };
  const handleAddresschange = (newAddress) => {
    setAddress(newAddress);
  };
  const handlePhonechange = (newPhone) => {
    setPhone(newPhone);
  };
  const handleEmailchange = (newEmail) => {
    setEmail(newEmail);
  };

  const handleSocialchange = (newSocial) => [setSocial(newSocial)];
  const handleAboutchange = (newAbout) => {
    setAbout(newAbout);
  };

  if (isEditing) {
    return (
      <div className="template-container">
        <div className="template" style={{ marginLeft: "0" }} >
          <div className="body">
              <div class="main-section">
                <div class="left-part">
                  <div class="photo-container">
                    <img
                      src="https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0"
                      alt=""
                    />
                  </div>
                  <div class="contact-container">
                    <h2 class="title">Contact Me</h2>
                    <div class="contact-list">
                      <div class="icon-container">
                        <i class="bi bi-geo-alt-fill"></i>
                      </div>
                      <span class="icon">
                        <i class="fa-solid fa-location-dot"></i>
                      </span>
                      <span>
                        {" "}
                        <p>{address}</p>
                      </span>
                    </div>
                    <div class="contact-list">
                      <div class="icon-container">
                        <i class="bi bi-envelope-fill"></i>
                      </div>
                      <span class="icon">
                        <i class="fa-solid fa-envelope"></i>
                      </span>
                      <span className="text">
                        {" "}
                        <p>{email}</p>
                      </span>
                    </div>
                    <div class="contact-list">
                      <div class="icon-container"></div>
                      <span class="icon">
                        {" "}
                        <i class="fa-solid fa-phone"></i>
                      </span>
                      <span>
                        {" "}
                        <p>{phone}</p>
                      </span>
                    </div>
                    <div class="contact-list">
                      <div class="icon-container">
                        <i class="bi bi-linkedin"></i>
                      </div>
                    </div>
                  </div>

                  <div class="education-container">
                    <h2 class="title">Education</h2>
                    {educationList.map((educationItem, index) => {
                      return (
                        <div key={index}>
                          <div class="course">
                            <h2 class="education-title">
                              {educationItem.specialization}
                            </h2>
                            <h5 class="college-name">
                              {educationItem.universityname}
                            </h5>
                            <p class="education-date">
                              {educationItem.from} - {educationItem.to}{" "}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div class="skills-container">
                    <h2 class="title">Skills</h2>
                    <div class="skill">
                      <div class="left-skill">
                        <ul>
                          {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-part">
                  <div class="banner">
                    <h1 class="firstname" >{text}</h1>
                    <p class="position">{role}</p>
                    <p>
                      {" "}
                      {about.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </p>
                  </div>
                  <div class="work-container ">
                    <h2 class="title text-left">work experience</h2>

                    {workList.map((wr, ind) => {
                      return (
                        <div key={ind} class="work">
                          <div class="job-date">
                            <p class="job">{wr.positon}</p>
                            <p class="date">
                              {wr.from} - {wr.to}
                            </p>
                          </div>
                          <h2 class="company-name">{wr.companyname}</h2>
                          <p class="work-text">{wr.summary}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div class="references-container">
                    <h2 class="title text-left">Projects</h2>
                    <div class="references">
                      {projectList.map((item, index) => {
                        return (
                          <div class="left-references">
                            <h1 className="project-name" key={index}>
                              {" "}
                              {item.projectname}
                            </h1>
                            <p class="project-text">{item.discription}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
          
          </div>
        </div>

        <div className="edit-form-container">
          <Edit
            text={text}
            onTextChange={handleTextchange}
            role={role}
            onRolechange={handleRolechange}
            address={address}
            handleAddresschange={handleAddresschange}
            phone={phone}
            handlePhonechange={handlePhonechange}
            email={email}
            handleEmailchange={handleEmailchange}
            social={social}
            handleSocialchange={handleSocialchange}
            about={about}
            handleAboutchange={handleAboutchange}
            submitHandler1={sumbmitHandler1}
            onSave={handleSaveClick}
            setEducationList={setEducationList}
            setworkList={setworkList}
            setProjectList={setProjectList}
            skills={skills}
            onskillChange={setSkills}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="template-container">
        <div className="template"  >
    <div className="body">

        <section class="main-section">
          <div class="left-part">
            <div class="photo-container">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0"
                alt=""
              />
            </div>
            <div class="contact-container">
              <h2 class="title">Contact Me</h2>
              <div class="contact-list">
                <div class="icon-container">
                  <i class="bi bi-geo-alt-fill"></i>
                </div>
                <span class="icon">
                  <i class="fa-solid fa-location-dot"></i>{" "}
                </span>
                <span className="text">
                  {" "}
                  <p>{address}</p>
                </span>
              </div>
              <div class="contact-list">
                <div class="icon-container">
                  <i class="bi bi-envelope-fill"></i>
                </div>
                <span class="icon">
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <span className="text">
                  {" "}
                  <p>{email}</p>
                </span>
              </div>
              <div class="contact-list">
                <div class="icon-container">
                  <i class="bi bi-laptop"></i>
                </div>
                <span class="icon">
                  <i class="fa-solid fa-phone"></i>
                </span>
                <span className="text">
                  <p>{phone}</p>
                </span>
              </div>
              <div class="contact-list">
                <div class="icon-container">
                  <i class="bi bi-linkedin"></i>
                </div>
              </div>
            </div>

            <div class="education-container">
              <h2 class="title">Education</h2>
              <div class="course">
                <h2 class="education-title">Course Studied</h2>
                <h5 class="college-name">University/College Details</h5>
                <p class="education-date">2006 - 2008 </p>
              </div>
              <div class="course">
                <h2 class="education-title">Course Studied</h2>
                <h5 class="college-name">University/College Details</h5>
                <p class="education-date">2006 - 2008</p>
              </div>
              <div class="course">
                <h2 class="education-title">Course Studied</h2>
                <h5 class="college-name">University/College Details</h5>
                <p class="education-date">2006 - 2008</p>
              </div>
            </div>

            <div class="skills-container">
              <h2 class="title">Skills</h2>
              <div class="skill">
                <div class="left-skill">
                  <p>Skill Name 01</p>
                </div>
              </div>
              <div class="skill">
                <div class="left-skill">
                  <p>Skill Name 01</p>
                </div>
              </div>
              <div class="skill">
                <div class="left-skill">
                  <p>Skill Name 02</p>
                </div>
              </div>
              <div class="skill">
                <div class="left-skill">
                  <p>Skill Name 03</p>
                </div>
              </div>
              <div class="skill">
                <div class="left-skill">
                  <p>Skill Name 04</p>
                </div>
              </div>
            </div>
          </div>
          <div class="right-part">
            <div class="banner">
              <h1 class="firstname">{text}</h1>
              <p class="position">{role}</p>
              <p>
                {" "}
                {about.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </p>
            </div>
            <div class="work-container ">
              <h2 class="title text-left">work experience</h2>
              <div class="work">
                <div class="job-date">
                  <p class="job">Job position here</p>
                  <p class="date">2019 - 2022</p>
                </div>
                <h2 class="company-name">Company Name l Location</h2>
                <p class="work-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pharetra in lorem at laoreet. Donec hendrerit libero
                  eget est tempor, quis tempus arcu elementum. In elementum elit
                  at dui tristique feugiat. Mauris convallis, mi at mattis
                  malesuada, neque nulla volutpat dolor, hendrerit faucibus eros
                  nibh ut nunc. Proin luctus urna i
                </p>
              </div>

              <div class="work">
                <div class="job-date">
                  <p class="job">Job position here</p>
                  <p class="date">2019 - 2022</p>
                </div>
                <h2 class="company-name">Company Name l Location</h2>
                <p class="work-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pharetra in lorem at laoreet. Donec hendrerit libero
                  eget est tempor, quis tempus arcu elementum. In elementum elit
                  at dui tristique feugiat. Mauris convallis, mi at mattis
                  malesuada, neque nulla volutpat dolor, hendrerit faucibus eros
                  nibh ut nunc. Proin luctus urna i
                </p>
              </div>
              <div class="work">
                <div class="job-date">
                  <p class="job">Job position here</p>
                  <p class="date">2019 - 2022</p>
                </div>
                <h2 class="company-name">Company Name l Location</h2>
                <p class="work-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pharetra in lorem at laoreet. Donec hendrerit libero
                  eget est tempor, quis tempus arcu elementum. In elementum elit
                  at dui tristique feugiat. Mauris convallis, mi at mattis
                  malesuada, neque nulla volutpat dolor, hendrerit faucibus eros
                  nibh ut nunc. Proin luctus urna i
                </p>
              </div>
            </div>

            <div class="references-container">
              <h2 class="title text-left">Projects</h2>
              <div class="references">
                <div class="left-references">
                  <h1 className="project-name">Project Title </h1>
                  <p class="project-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pharetra in lorem at laoreet. Donec hendrerit libero
                    eget est tempor, quis tempus arcu elementum. In elementum
                    elit at dui tristique feugiat. Mauris convallis, mi at
                    mattis malesuada, neque nulla volutpat dolor, hendrerit
                    faucibus eros nibh ut nunc. Proin luctus urna i
                  </p>
                  <h1 className="project-name">Project Title </h1>
                  <p class="project-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pharetra in lorem at laoreet. Donec hendrerit libero
                    eget est tempor, quis tempus arcu elementum. In elementum
                    elit at dui tristique feugiat. Mauris convallis, mi at
                    mattis malesuada, neque nulla volutpat dolor, hendrerit
                    faucibus eros nibh ut nunc. Proin luctus urna i
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="edit-option">
          {/* <button onClick={handleEditClick}>Edit</button> */}
       <Button size="small"  onClick={handleEditClick}>Edit</Button>
    {/* <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small">Small</Button> 
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div> */}
      {/* <div>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </div> */}
    
  {/* );
} */}

          </div>
        </section>
        </div>
        </div>
    </div>
  );
}

export default Template;
