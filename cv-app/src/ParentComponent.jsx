import { useState } from "react";
import App from "./App";
import { CVDisplay } from "./Cvdisplay";

export function ParentComponent () {


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
                    <App/>
                </section>

                <section className="cv">
                    <CVDisplay/>
                </section>
            </main>
        </>
    );
}
