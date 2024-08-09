import { useState } from 'react'
import './App.css'
import { General } from './General'
import { Formdiv } from './Formdiv '

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <General
        text="General Info"
        
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

      </General>
      <General
        text= "Education" 
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



      </General>

      <General
        text= "Experience"
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
          forinput="company"
          text="Company Name"
          type="text"
          inputid="company"
          placeholder="Company Name"
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
        

      </General>
    </>


  )
}

export default App
