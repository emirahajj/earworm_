import React from "react";
import questions from "../components/questions.js"
import Question from "../components/Question"
import team from "../components/team"
import TeamProfile from "../components/TeamProfile"
import "../App.css"

const About = () => {
    return (
        <div>
            <div className="fade-in">
                <h1 className="text-3xl font-bold text-center mb-4 mt-4">About Earworm</h1>
                <section className="flex justify-center pb-7">
                    <div className="w-1/2">
                        <p className=" text-center text-gray-300">At the end of every year, Billboard releases its Billboard 200 Year End Charts and one of these charts lists the top 200 albums for that year. Earworm is a compilation of Billboard 200 Albums' charts over a 50 year period from 1970-2020. The application provides an overview of the top albums on every year's chart, in addition to interesting facts and data visualization to offer insights on the way music trends change and develop over time. The application also includes information about all the artists, albums and genres that appear on the charts.</p>
                    </div>
                </section>

                <h1 className="text-3xl font-bold text-center mt-8">FAQ</h1>
                <section className="flex justify-center pb-7">
                    <div className="w-1/2 flex flex-col">
                        {questions.map(ques => <Question question={ques.question} answer={ques.answer} />)}
                    </div>
                </section>

                <h1 className="text-3xl font-bold text-center mb-4 mt-4 pb-7">Meet the Team</h1>
                <div className="flex justify-center pb-8">
                    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
                        {team.map(member => <TeamProfile img={member.image} role={member.role} link={member.link} name={member.name} bio={member.bio} />)}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;

