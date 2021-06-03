import React from "react";
import questions from "../components/questions.js"
import Question from "../components/Question"
import team from "../components/team"
import TeamProfile from "../components/TeamProfile"
import Navbar from '../components/Navbar';
import "../App.css"

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="fade-in">
                <h1 className="text-3xl font-bold text-center mb-4 mt-0">About Earworm</h1>
                <section className="flex justify-center pb-7">
                    <div className="w-1/2">
                        <p className=" text-center text-gray-300">Earworm is a music data visualization and music exploration tool based on the Billboard 200 Year-End charts from 1970-2020. Using these charts, Earworm provides an overview of the albums on every chart year as well as data visualization to offer insights on the way music trends change and develop over time.</p>
                    </div>
                </section>

                <h1 className="text-3xl font-bold text-center mb-4 mt-4 pb-7">Meet the Team</h1>
                <div className="flex justify-center pb-8">
                    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
                        {team.map(member => <TeamProfile img={member.image} role={member.role} link={member.link} github={member.github} name={member.name} bio={member.bio} />)}
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-center mt-8">FAQ</h1>
                <section className="flex justify-center pb-7">
                    <div className="w-1/2 flex flex-col">
                        {questions.map(ques => <Question question={ques.question} answer={ques.answer} />)}
                    </div>
                </section>


            </div>

        </div>
    );
}

export default About;

