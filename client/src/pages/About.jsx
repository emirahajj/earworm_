import React from "react";
import Navbar from "../components/Navbar"
import questions from "../components/questions.js"
import Question from "../components/Question"
import team from "../components/team"

const About = () => {
    return (
        <div>
            <Navbar />
            <section className= "flex justify-center">
                <div className= "w-1/2">
                    <h1 className="text-3xl font-bold text-center mb-4 mt-4">About Earworm</h1>
                    <p className=" text-center text-gray-300">At the end of every year, Billboard releases its Billboard 200 Year End Charts and one of these charts lists the top 200 albums for that year. Earworm is a compilation of Billboard 200 Albums' charts over a 50 year period from 1970-2020. The application provides an overview of the top albums on every year's chart, in addition to interesting facts and data visualization to offer insights on the way music trends change and develop over time. The application also includes information about all the artists, albums and genres that appear on the charts.</p>
                </div>
            </section>
            <section className= "flex justify-center">
                <div className = "w-1/2 flex flex-col">
                    <h1 className="text-3xl font-bold text-center mb-4 mt-4">FAQ</h1>
                    {questions.map(ques => <Question question = {ques.question} answer = {ques.answer} />)}
                </div>
            </section>
        </div>
    );
}

export default About;

