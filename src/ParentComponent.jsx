import { useState } from "react";
import App from "./App";
import { CVDisplay } from "./Cvdisplay";
import github from "./github.svg";

export function ParentComponent () {
    const [formValues, setFormValues] = useState({
        "General Info": [],
        "Education": [],
        "Experience": []
    });
    const [currentKeyAction, setCurrentKeyAction] = useState({key: null, action: null}); // Store the current key

    function updateFormValues(formName, value, currentKeyAction) {
        setFormValues(prevValues => {
            const isArraySection = formName === 'Education' || formName === 'Experience';
            let updateValues;
            let keyName;

            if (currentKeyAction.action === "del") {
                const updatedItems = prevValues[formName].filter(item => item.key !== currentKeyAction.key);
                updateValues = {
                    ...prevValues,
                    [formName]: updatedItems
                }
                setCurrentKeyAction({key: null, action: null});
                console.log("del", updateValues)
                return updateValues;
            }   else if (currentKeyAction.action === "edit") {

                updateValues = {
                    ...prevValues,
                    [formName]: prevValues[formName].map(item => 
                        item.key === currentKeyAction.key ? { ...value, key: currentKeyAction.key } : item
                    )
                };
                setCurrentKeyAction({key: null, action: null});
                console.log("edit", updateValues)
                return updateValues;
            }

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
                            key: keyName
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
                    <img src={github} alt="github icon" />
                </a>
            </header>

            <main>
                <section className="forms">
                    <App updateFormValues={updateFormValues} formValues={formValues} setCurrentKeyAction={setCurrentKeyAction} currentKeyAction={currentKeyAction}/>
                </section>

                <section className="cv">
                    <CVDisplay formValues={formValues}/>
                </section>
            </main>
        </>
    );
}
