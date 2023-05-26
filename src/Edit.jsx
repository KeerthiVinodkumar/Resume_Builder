import React, { useState } from "react";
import Button  from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
const Edit = (props) => {
    // const [startDate, setStartDate] = useState("2015");
    // const [endDate, setEndDate] = useState("2018");
    // const [college, setCollege] = useState("college");
    // const [degree, setDegree] = useState("degree");
    // const [specialization, setSpecialization] = useState("specialization");
    const [education, setEducation] = useState({
      from: "",
      to: "",
      universityname: "",
      specialization: "",
    }); 
    const [educationList, setEducationList] = useState([]);
  
    const [skills,setSkills]=useState([])
    const[textskill,setTextskills]=useState("")
    // const [resumeSkills, setResumeSkills]=useState([]);

    // const handleInputChange = (e) => {
    //   setSkills(e.target.value);
    // };

    // const addSkill= ()=>{
    //   setResumeSkills([...resumeSkills, skills])
    //   setSkills("")
    // }

    
    const [workex, setWorkex] = useState({
      from:"",
      to:"",
      companyname:"",
      positon:"",
      summary:"" 
    });
   const[workList,setworkList] = useState([])

   const [project,setProject]=useState({
      projectname:"",
      discription:""
   })
   const[projectList,setProjectList]=useState([])
   
   const Addproject =(event)=>{
    event.preventDefault()
    setProjectList([...projectList,project]);
    props.setProjectList([...projectList,project])
    setProject({
      projectname:"",
      discription:""
    })
   }

  const AddEducation =(event)=>{
    event.preventDefault()
    setEducationList([...educationList,education]);
    props.setEducationList([...educationList,education])
    setEducation({
      from:"",
      to:"",
      universityname:"",
      specialization:""
    })
  }

  const AddExperience=(event)=>{
    event.preventDefault()
    setworkList([...workList,workex]);
    props.setworkList([...workList,workex])
    setWorkex({
      from:"",
      to:"",
      companyname:"",
      positon:"",
      summary:"" 
    })
    
    
  }
 
  function handleAddskill(event){
    event.preventDefault();
    const textemp=textskill.trim()
    if(textemp){
      setSkills([...skills,textemp])
      props.onskillChange([...skills,textemp])
      setTextskills("")
    }
  }

  function handleDeleteskill(index){
    setSkills(skills.filter((_,i)=> i!==index))
    props.onskillChange(skills.filter((_,i)=>i!==index))
  }

   function handleDeleteworex(index){
    setworkList(workList.filter((_,i)=>i!==index))
    props.setworkList(workList.filter((_,i)=>i!==index))

   }

   function handleDeleteeducation(index){
    setEducationList(educationList.filter((_,i)=>i!==index))
    props.setEducationList(educationList.filter((_,i)=>i!==index))
   }

   function handleDeleteProject(index){
    setProjectList(projectList.filter((_,i)=>i!==index))
    props.setProjectList(projectList.filter((_,i)=>i!==index))
   }
    // const [workList, setWorkList] = useState([]);
    console.log("worklist", workList);
  
    // const [showForm, setShowForm] = useState(false);
  
    // const handleDelete = (event, index) => {
    //   console.log("event", event);
    //   console.log("index", index);
    //   event.preventDefault();
    //   // setWorkList(workList.filter((_, i) => i !== index));
    //   // props.deleteWork(workList.filter((_, i) => i !== index));
    // };
    const changeNameas = (e) => {
      props.onTextChange(e.target.value);
    };
  
    const changeRoleas = (e) => {
      props.onRolechange(e.target.value);
    };
  
    // const changeAddressas = (e) => {
    //   props.handleAddresschange(e.target.value);
    // };
  
    // const changePhoneas = (e) => {
    //   props.handlePhonechange(e.target.value);
    // };
  
  
    // const changeSkillas = (e) => {
    //   props.handleSkillchange(e.target.value);
    // };
    const changeAboutas = (e) => {
      props.handleAboutchange(e.target.value);
    };
    const changeAddress = (e)=>{
      props.handleAddresschange(e.target.value)
    }
    const changePhone=(e)=>{
      props.handlePhonechange(e.target.value)
    }
    const changeEmail = (e) => {
      props.handleEmailchange(e.target.value);
    };
    // const submitHandler = (e) => {
    //   e.preventDefault();
    //   props.submitHandler({
    //     startDate,
    //     endDate,
    //     degree,
    //     college,
    //     specialization,
    //   });
    // };
    const submitHandler = (e) => {
      e.preventDefault();
      setEducationList([...educationList, education]);
      props.psetEducation([...educationList, education]);
    };
  
    // const sumbmitHandler1 = (e) => {
    //   e.preventDefault();
    //   setWorkList([...workList, work]);
    //   props.pSetWork([...workList, work]);
  
      // props.submitHandler1({
      //   startDate1,
      //   endDate1,
      //   role,
      //   company,
      //   summary,
      // });
      // props.submitHandler1([workList]);
    // };
  
    function deleteWork(e, ind) {
      e.preventDefault();
      console.log("event", e);
      console.log("index", ind);
      // setWorkList(workList.filter((_, i) => i !== ind));
      props.pSetWork(workList.filter((_, i) => i !== ind));
  
      function deleteWork1(e, ind) {
        e.preventDefault();
        console.log("event", e);
        console.log("index", ind);
        setEducationList(educationList.filter((_, i) => i !== ind));
        props.pSetEducation(educationList.filter((_, i) => i !== ind));
      }
    }
    // const changeProjectsas = (e) => {
    //   props.handleProjectschange(e.target.value);
    // };
    // const changeSocialas = (e) => {
    //   props.handleSocialchange(e.target.value);
    // };
    // const changeCeras = (e) => {
    //   props.handleCertificatechange(e.target.value);
    // };
    // const deleteHead = (e) => {
    //   e.preventDefault();
    //   props.deleteHeading(e.target.value);
    // };
     
  return (
   
     <div class="container">
    <h1>Resume Details</h1>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required  placeholder="Name" onChange={changeNameas}/>

      <label for="email">Role:</label>
      <input type="text" id="email" name="email" onChange={changeRoleas} required/>

      <label for="phone">About us:</label>
      <input type="text" id="About" name="phone" onChange={changeAboutas}
 required/>
 <label for="address">contact Me:</label>
 <input type="text" id="About" name="phone" placeholder="Adress" onChange={changeAddress}/><br/><br/>
 <input type="text" id="About" name="phone" placeholder="Email" onChange={changeEmail}/><br/><br/>
 <input type="text" id="About" name="phone" placeholder="PhoneNo" onChange={changePhone}/>
      
     
      <label for="experience">Experience:</label><br/>
      From:<input type="month" onChange={(e)=> setWorkex((prevWork)=>({
        ...prevWork,from:e.target.value 
      }))}></input>
      To:<input
                type="month"
                style={{  marginLeft: "10px"}}
                onChange={(e) =>
                  setWorkex((prevcompany) => ({
                    ...prevcompany,
                    to: e.target.value,
                  }))
                }
                placeholder="to"
              ></input>
             {/* <input type="text" id="name" name="name" required  placeholder="Position" 
             onChange={(e)=> setWorkex((prevWork)=>({
              ...prevWork,
              position: e.target.value
             }))}
             /> */}
             <br/><br/>
             <input
          type="text"
          id="text-input"
          placeholder="Company name"
          value={education.companyname}
          style={{ width: "100%" }}
          onChange={(e) =>
            setWorkex({ ...workex, companyname: e.target.value })
          }
        ></input>

<input
          type="text"
          id="text-input"
          placeholder="position"
          value={workex.positon}
          style={{ width: "100%" }}
          onChange={(e) =>
            setWorkex({ ...workex, positon: e.target.value })
          }
        ></input>
        <textarea   type="text"
          id="text-input"
          placeholder="summary"
          value={workex.summary}
          style={{ width: "100%" }}
          onChange={(e) =>
            setWorkex({ ...workex, summary: e.target.value })
          }
          ></textarea>


              <button class="btn" style={{ width: "100%" }} onClick={AddExperience}>
          ADD
        </button>
      {/* <textarea id="experience" name="experience" required onChange={(e)=> setWork((prevWork)=>({
        ...prevWork,startDate:e.target.value
      }))}></textarea> */}

{workList.map((workitem, index) => {
          return (
            <div key={index}>
              {/* {console.log("educationItem", educationItem.universityname)} */}
              <div>{workitem.companyname}</div>
              <div>{workitem.positon}</div>
              <div>{workitem.from}</div>
              <div>{workitem.to}</div>
              <div>{workitem.summary}</div>
              {/* <button
                style={ {
                  height: "30px",
                  borderRadius: "10px",
                  backgroundColor: " gray",
                  color: "white",
                  marginLeft: "5px",
                }}
                type="button"
              onClick={()=>handleDeleteworex(index)}
              >
                Delete
              </button> */}
<Button variant="outlined" startIcon={<DeleteIcon />}  onClick={()=>handleDeleteworex(index)}>
  Delete
</Button>
            </div>
          );
        })}

<label for="address">Education:</label><br/>
      From:  <input
          type="date"
          id="text-input"
          placeholder="From"
          value={education.from}
          onChange={(e) => setEducation({ ...education, from: e.target.value })}

         
        ></input>
       To: <input
          type="date"
          id="text-input"
          placeholder="To"
          value={education.to}
          onChange={(e) => setEducation({ ...education, to: e.target.value })}
        />
        <br></br>
        <input
          type="text"
          id="text-input"
          placeholder="University name"
          value={education.universityname}
          style={{ width: "100%" }}
          onChange={(e) =>
            setEducation({ ...education, universityname: e.target.value })
          }
        ></input>
        <input
          type="text"
          id="text-input"
          placeholder="specialization"
          value={education.specialization}
          style={{ width: "100%" }}
          onChange={(e) =>
            setEducation({ ...education, specialization: e.target.value })
          }
        ></input>
        {/* <button class="btn" style={{ width: "100%" }} onClick={AddEducation}>
          ADD
        </button> */}
        <Button variant="contained" startIcon={<AddIcon/>} onClick={AddEducation}>Add</Button><br/>

        {educationList.map((educationItem, index) => {
          return (
            <div key={index}>
              {/* {console.log("educationItem", educationItem.universityname)} */}
              <div>{educationItem.universityname}</div>
              <div>{educationItem.specialization}</div>
              <div>{educationItem.from}</div>
              <div>{educationItem.to}</div>
              {/* <button
                style={ {
                  height: "30px",
                  borderRadius: "10px",
                  backgroundColor: " gray",
                  color: "white",
                  marginLeft: "5px",
                }}
                type="button"
                onClick={()=>handleDeleteeducation(index)}
              >
                Delete
              </button> */}
              <Button variant="outlined" startIcon={<DeleteIcon />}  onClick={()=>handleDeleteeducation(index)}>Delete</Button>

            </div>
          );
        })}
              <label for="experience">Skills:</label><br/>
         
              <input
          type="text"
          id="text-input"
         value={textskill}
         onChange={(e)=> setTextskills(e.target.value)}
        placeholder="skill"
          style={{ width: "100%" }}
       
        ></input>
        {/* <button class="btn" style={{ width: "100%" }} onClick={handleAddskill} >
          ADD
        </button> */}
                <Button variant="contained" startIcon={<AddIcon/>} onClick={handleAddskill}>Add</Button ><br/>

          <ul>
            {skills.map((text,index)=>(
              <li  key={index}>{text}
              {/* <button style={{height:"30px",}} onClick={()=>handleDeleteskill(index)}>Delete</button> */}
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>handleDeleteskill(index)} >
  Delete
</Button>
              </li>
            ))}
          </ul>
          <input
          type="text"
          id="text-input"
          placeholder="project name"
          value={project.projectname}
          style={{ width: "100%" }}
          onChange={(e) =>
            setProject({ ...project, projectname: e.target.value })
          }
        ></input>
        <input
          type="text"
          id="text-input"
          placeholder="discription"
          value={project.discription}
          style={{ width: "100%" }}
          onChange={(e) =>
            setProject({ ...project, discription: e.target.value })
          }
        ></input>
        {/* <button class="btn" style={{ width: "100%" }} onClick={Addproject}>
          ADD
        </button> */}
                        <Button variant="contained" startIcon={<AddIcon/>} onClick={Addproject}>Add</Button ><br/>


        {projectList.map((projectItem, index) => {
          return (
            <div key={index}>
              <div>{projectItem.projectname}</div>
              <div>{projectItem.discription}</div>
            
              {/* <button
                style={ {
                  height: "30px",
                  borderRadius: "10px",
                  backgroundColor: " gray",
                  color: "white",
                  marginLeft: "5px",
                }}
                type="button"
                onClick={()=>handleDeleteProject(index)}
              >
                Delete
              </button> */}
                            <Button variant="outlined" startIcon={<DeleteIcon />}   onClick={()=>handleDeleteProject(index)}>Delete</Button>

            </div>
          );
        })}
         
      <input type="submit" value="save"/>
    </form>
   </div> 
  );
};

export default Edit;