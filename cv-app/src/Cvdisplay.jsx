import { useState } from "react";

export function CVDisplay ({formValues}) {
    const generalinfo = Object.keys(formValues["General Info"]).length > 0;
    const education = formValues["Education"].length > 0;
    const experience = formValues["Experience"].length > 0;
    return (
        <>
            <h1>CV</h1>
            {generalinfo && <div className="generalinfo">
                <h2>General info</h2>
                <div className="info">
                    <div className="namelocation">
                        <div className="name">{formValues["General Info"].name}</div>
                        <div className="address">{formValues["General Info"].address}</div>
                    </div>
                    <div className="mailphonelinkedin">
                        <div className="mail">{formValues["General Info"].mail}
                            <img src="./src/gmail.svg" alt="gmail icon" />
                        </div>
                        <div className="phone">{formValues["General Info"].phone}
                            <img src="./src/phone.svg" alt="phone icon" />
                        </div>
                        <div className="linkedin">
                            <a href={formValues["General Info"].linkedin} target="_blank">My LinkedIn
                                <img src="./src/linkedin.svg" alt="linkedin icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>}

            {education && <div className="education">
                <h2>Education</h2>
                {formValues["Education"].map((item) => (
                    <div className="school" key={item.key}>
                        <div className="schoolnamedate">
                            <div className="schoolname">{item.school}</div>
                            <div className="date-wrapper">
                                <div className="start">{item.date}</div>
                                <div className="arrow">---</div>
                                <div className="end">{item.enddate ? item.enddate : "current"}</div>
                            </div>
                        </div>
                        <div className="title">{item.title}</div>
                    </div>
                ))}
            </div>}

            {experience && <div className="experience">
                <h2>Experience</h2>
                {formValues["Experience"].map((item) => (
                    <div className="experience" key={item.key}>
                        <div className="companydate">
                            <div className="schoolname">{item.school}</div>
                            <div className="date-wrapper">
                                <div className="start">{item.date}</div>
                                <div className="arrow">---</div>
                                <div className="end">{item.enddate ? item.enddate : "current"}</div>
                            </div>
                        </div>
                        <div className="title">{item.title}</div>
                    </div>
                ))}


            </div>}
        </>
    )
}