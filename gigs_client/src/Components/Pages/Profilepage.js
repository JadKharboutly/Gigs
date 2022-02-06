import React from 'react';
import NavBar from '../NavBar';
import '../CSS/ProfilePage.css'
import {useState} from 'react'


function Profilepage() {

  const [skills,setSkills] = useState([])
  const [programming,setProgramming] = useState(false)

  function handleSkills(e) {
    if(skills.includes(e.target.value) === false){
      setSkills((prev)=>[...prev,e.target.value])

    }
    
  }

  const removeSkill = (e) => {
      var new_list =[]
      for (var i=0;i<skills.length;i++){
        if(e.target.value !== skills[i]){
          new_list.push(skills[i])
        }
      }
      setSkills(new_list)
  }

  return (
    <>
    <NavBar/>
    <div className='container'>
  <h1 className='title'>Complete Your Profile</h1>

  <div className='ProfilePage'>
      <section className='profile-summary'>
        <p className='profile-summary-title'>Profile Summary</p>
        <input className='profile-summary-input' placeholder='Enter your Bio Here'/>
      </section>
      <section className='skills'>
        <p className='skills-title'>Which of the Following Skills Best Apply to You?</p>
        <div className='skills-set'>
          <button className='skills-options' value='Programming' onClick={handleSkills}> Programming </button>
          <button className='skills-options' value='MS Office Excel' onClick={handleSkills}> MS Office Excel </button>
          <button className='skills-options' value='Transcription' onClick={handleSkills}> Transcription </button>
          <button className='skills-options' value='Graphic Design' onClick={handleSkills}> Graphic Design </button>
          <button className='skills-options' value='Web Development' onClick={handleSkills}> Web Development </button>
          <button className='skills-options' value='Accounting' onClick={handleSkills}> Accounting </button>
        </div>
        <input className='skills-input' placeholder='Other (Please Specify)'/>
        <div className='skills-list'>
          {skills.map(skill=>{
            return(
              <div  className='skill'>
              <p>{skill}</p>
              <button className='cancel-button' value={skill} onClick={removeSkill}>
              </button>
            </div>
            )
          })}

        </div>
      </section>
      <section className='personal-website'>
        <p className='personal-website-title'>Websites/URL</p>
        <input className='personal-website-input' placeholder='e.g. LinkedIn'/>
      </section>
      <div className='save-container'>
      <button className='save-button'>Save Info</button>

      </div>
  </div>;
  </div>
  </>)
}

export default Profilepage;
