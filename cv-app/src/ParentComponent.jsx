import { useState } from "react";
import App from "./App";
import { CVDisplay } from "./Cvdisplay";

export function ParentComponent () {
    const [formValues, setFormValues] = useState({
        "General Info": {},
        "Education": [],
        "Experience": []
    });

    function updateFormValues(formName, value) {
        setFormValues(prevValues => {
            const isArraySection = formName === 'Education' || formName === 'Experience';
            let updateValues;
            let keyName;
            if (formName === 'Education' || formName === 'Experience') {
                // Generate a key based on schoolName or companyName
                keyName = formName === 'Education' ? value.school : value.company;
            }
            if (isArraySection) {
                updateValues = {
                    ...prevValues,
                    [formName]: [
                        ...(prevValues[formName] || []), 
                    {
                        ...value,
                        key: keyName // Add the key as a property of the object
                    }],
                };
                
            }   else {
                updateValues = {
                    ...prevValues,
                    [formName]: value,
                };
            }
            console.log("form", updateValues);
            return updateValues;

        });

    }

    return (
        <>
            <header>
                <h1>CV generator</h1>
                <a href="https://github.com/moahnaf11/CV-App">
                    Follow me on github
                    <img src="./src/github.svg" alt="github icon" />
                </a>
            </header>

            <main>
                <section className="forms">
                    <App updateFormValues={updateFormValues} formValues={formValues}/>
                </section>

                <section className="cv">
                    <CVDisplay formValues={formValues}/>
                </section>
            </main>
        </>
    );
}
