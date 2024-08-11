import { useState } from 'react'
import './App.css'
import { General } from './General'
import { Formdiv } from './Formdiv'
import { Button } from './Button'

function App({updateFormValues, formValues, setCurrentKeyAction, currentKeyAction}) {

  function handleFormSubmit(id, value, currentKeyAction) {
    updateFormValues(id, value, currentKeyAction);
  }
  

  return (
    <>
      <General
        text="General Info"
        onFormSubmit={handleFormSubmit}
        formValues={formValues}
        setCurrentKeyAction={setCurrentKeyAction}
        currentKeyAction={currentKeyAction}
        
      >
        <Formdiv
          forinput="name"
          text="Name"
          type="text"
          inputid="name"
          placeholder="name"
        >
        </Formdiv>

        <Formdiv
        forinput="mail"
        text="Email"
        type="email"
        inputid="mail"
        placeholder="ahnaf@top.com"
        >
        </Formdiv>
                    
        <Formdiv
          forinput="address"
          text="Address"
          type="text"
          inputid="address"
          placeholder="UAE"
        >
        </Formdiv>

        <Formdiv
          forinput="phone"
          text="Phone"
          type="tel"
          inputid="phone"
          placeholder="xxx-xxx-xxxx"
        >
        </Formdiv>

        <Formdiv
          forinput="linkedin"
          text="LinkedIn"
          type="url"
          inputid="linkedin"
          placeholder="linkedin url"
        >
        </Formdiv>

        <Button
          type="submit"
          text="Save"
        >
        </Button>

        <Button
          type="reset"
          text="Reset"
        >
        </Button>

      </General>
      <General
        text= "Education" 
        onFormSubmit={handleFormSubmit}
        formValues={formValues}
        setCurrentKeyAction={setCurrentKeyAction}
        currentKeyAction={currentKeyAction}
      >
        <Formdiv
          forinput="school"
          text="School Name"
          type="text"
          inputid="school"
          placeholder="School"
        >
        </Formdiv>

        <Formdiv
          forinput="title"
          text="Title of Study"
          type="text"
          inputid="title"
          placeholder="A levels"
        >
        </Formdiv>

        <Formdiv
          forinput="date"
          text="Date of study"
          type="date"
          inputid="date"
          placeholder=""
        >
        </Formdiv>

        <Formdiv
          forinput="enddate"
          text="End Date"
          type="date"
          inputid="enddate"
          placeholder=""
        >
        </Formdiv>

        <Formdiv
          forinput="current"
          text="Currently a student?"
          type="checkbox"
          inputid="current"
          placeholder=""
          classid={"check"}
        >
        </Formdiv>

        <Button
          type="submit"
          text="Save"
        >
        </Button>

        <Button
          type="reset"
          text="Reset"
        >
        </Button>

      </General>

      <General
        text= "Experience"
        onFormSubmit={handleFormSubmit}
        formValues={formValues}
        setCurrentKeyAction={setCurrentKeyAction}
        currentKeyAction={currentKeyAction}
      >
        <Formdiv
          forinput="company"
          text="Company Name"
          type="text"
          inputid="company"
          placeholder="Company Name"
        >
        </Formdiv>

        <Formdiv
          forinput="position"
          text="Position title"
          type="text"
          inputid="position"
          placeholder="Position Title"
        >
        </Formdiv>

        <Formdiv
          forinput="responsibility"
          text="Job Responsibility"
          type="text"
          inputid="responsibility"
          placeholder="Job Responsibility"
        >
        </Formdiv>

        <Formdiv
          forinput="start"
          text="Start Date"
          type="date"
          inputid="start"
          placeholder=""
        >
        </Formdiv>

        <Formdiv
          forinput="end"
          text="End Date"
          type="date"
          inputid="end"
          placeholder=""
        >
        </Formdiv>

        <Formdiv
          forinput="current"
          text="Currently an employee?"
          type="checkbox"
          inputid="current"
          placeholder=""
          classid={"check"}
        >
        </Formdiv>

        <Button
          type="submit"
          text="Save"
        >
        </Button>

        <Button
          type="reset"
          text="Reset"
        >
        </Button>

      </General>
    </>


  )
}

export default App
