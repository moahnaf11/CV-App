import { useState } from "react";
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export function CVDisplay ({formValues}) {
    const generalinfo = Object.keys(formValues["General Info"]).length > 0;
    const education = formValues["Education"].length > 0;
    const experience = formValues["Experience"].length > 0;

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        pageStyle: `
            @font-face {
                font-family: 'intro_rust_gbase_2_line';
                src: url('./introrustg-base2line-webfont.woff2') format('woff2');
                font-weight: normal;
                font-style: normal;
            
            }
  
  
  
  
            @font-face {
                font-family: 'source_sans_proextralight';
                src: url('./sourcesanspro-extralight-webfont.woff2') format('woff2');
                font-weight: normal;
                font-style: normal;
            
            }
  
            .cv h1 {
                text-align: center;
                font-family: "intro_rust_gbase_2_line", sans-serif;
            }
            
            .cv h2 {
                color: black;
                text-align: center;
                display: block;
            }
  
            div.info a {
                color: black;
                cursor: pointer;
                text-decoration: underline;
                display: flex;
                font-family: 'intro_rust_gbase_2_line', sans-serif;
            }
            
            div.info {
                display: flex;
                justify-content: space-between;
                padding: 0 30px;
                font-family: 'intro_rust_gbase_2_line', sans-serif;
                border-top: 2px solid black;
                border-bottom: 2px solid black;
                margin: 20px 0;
                gap: 30px;
            }
            
            
            
            div.mail, .phone {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            div.mailphonelinkedin {
                padding-left: 5px;
                border-left: 2px solid black;
            }
            
            div.mailphonelinkedin, .namelocation{
                display: flex;
                flex-direction: column;
                align-items: center;
            
            }
            
            div.namelocation {
                justify-content: space-between;
                padding: 10px 0;
                box-sizing: border-box;
                font-weight: 700;
                gap: 20px;
            }
            
            div.school, .experience2 {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 0 30px;
                margin-bottom: 20px;
            }
            
            div.schoolnamedate, .companydate {
                display: flex;
                justify-content: space-between;
                gap: 15px;
                font-family: 'intro_rust_gbase_2_line', sans-serif;
            }
            
            div.date-wrapper {
                display: flex;
                align-items: center;
                gap: 5px;
            }
            
            .responsibility, .description {
                font-family: 'source_sans_proextralight', sans-serif;
                font-weight: 900;
                font-size: 1rem;
            }
            
            h3 {
                font-family: 'intro_rust_gbase_2_line', sans-serif;
                font-size: 1rem;
            }
            
            .education h2, .experience h2 {
                border-top: 1px solid black;
            }
            
            div.arrow {
                display: flex;
            }
            
            .viewbar {
                flex-direction: column;
                align-items: center;
                padding: 0 10px;
                gap: 10px;
            }
            
            .address {
                display: flex;
                align-items: center;
                gap: 10px;
            }
        `
    });



    return (
        <>
            <button onClick={handlePrint}>Download as PDF</button>

            <div ref={componentRef} className="cv">
                <h1>CV</h1>
                {generalinfo && <section className="generalinfo">
                    <h2>General info</h2>
                    <div className="info">
                        <div className="namelocation">
                            <div className="name">{formValues["General Info"].name}</div>
                            <div className="address">{formValues["General Info"].address}
                                <img src="./src/location.svg" alt="location icon" />
                            </div>
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
                </section>}
                {education && <section className="education">
                    <h2>Education</h2>
                    {formValues["Education"].map((item) => (
                        <div className="school" key={item.key}>
                            <div className="schoolnamedate">
                                <div className="schoolname">{item.school}</div>
                                <div className="date-wrapper">
                                    <div className="start">{new Date(item.date).toLocaleString("en-GB", {day: "2-digit", month: "2-digit", year: "numeric"})}</div>
                                    <div className="arrow">-</div>
                                    <div className="end">{item.enddate ?  new Date(item.enddate).toLocaleString("en-GB", {day: "2-digit", month: "2-digit", year: "numeric"}): "current"}</div>
                                </div>
                            </div>
                            <h3 className="title">{item.title}</h3>
                            <div className="description">{item.description}</div>
                        </div>
                    ))}
                </section>}
                {experience && <section className="experience">
                    <h2>Experience</h2>
                    {formValues["Experience"].map((item) => (
                        <div className="experience2" key={item.key}>
                            <div className="companydate">
                                <div className="companyname">{item.company}</div>
                                <div className="date-wrapper">
                                    <div className="start">{new Date(item.start).toLocaleString("en-GB", {day: "2-digit", month: "2-digit", year: "numeric"})}</div>
                                    <div className="arrow">-</div>
                                    <div className="end">{item.end ? new Date(item.end).toLocaleString("en-GB", {day: "2-digit", month: "2-digit", year: "numeric"}) : "current"}</div>
                                </div>
                            </div>
                            <h3 className="position">{item.position}</h3>
                            <div className="responsibility">{item.responsibility}</div>
                        </div>
                    ))}
                </section>}
            </div>       
        </>
    )
}