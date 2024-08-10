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
            if (isArraySection) {
                keyName = value.school || value.company;
                const existingItemIndex = prevValues[formName].findIndex((item) => item.key === keyName )

                if (existingItemIndex > -1) {
                    updateValues = {
                        ...prevValues,
                        [formName]: prevValues[formName].map((item, index) => 
                            index === existingItemIndex ? { ...value, key: item.key } : item
                        )
                    };
                    
                }   else {
                    updateValues = {
                        ...prevValues,
                        [formName]: [
                            ...(prevValues[formName] || []), 
                        {
                            ...value,
                            key: keyName // Add the key as a property of the object
                        }],
                    };


                }
                
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
