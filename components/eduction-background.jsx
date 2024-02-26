import React from 'react'
import SectionHeader from './section-header'

export default function EduBackground() {
  return (
    <div>
        <SectionHeader  title={"Education"}/>
        <EduCard
        institution={"UICT"}
        award={"Computer Science"}
        description={"I am currently enrolled in a computer science program, where I am actively developing foundational skills in programming, algorithms, and software development. Learning languages such as Java and Python, alongside exploring topics like data structures and database management. Engaging in hands-on projects to reinforce theoretical concepts and gain practical experience"}
        period={"2023 - 2025"}
        />
        <EduCard
        institution={"Nsangi S.S"}
        award={"A-Level UACE"}
        description={"I successfully completed my A-level studies in Uganda, where I focused on a combination of three major subjects: Mathematics, Technical Drawing, and Entrepreneurship, supplemented by two subsidiary subjects: General Paper (GP) and Information and Communication Technology (ICT)."}
        period={"2020 - 2022"}
        />
        <EduCard
        institution={"St. Catherine S.S"}
        award={"O-Level UCE"}
        description={"During my O-level studies, I gained a comprehensive understanding of key subjects essential for academic and professional success. Mathematics equipped me with problem-solving skills, while English Language enhanced my communication abilities. Science subjects provided me with a solid understanding of fundamental scientific principles, and additional subjects like Geography and History broadened my knowledge base and critical thinking skills."}
        period={"2016 - 2019"}
        />
    </div>
  )
}
function EduCard({institution, award, description, period}){
  return(
          <div className="edu-card bg-white dark:bg-slate-800 h-fit w-full p-8 relative">
            <p className="text-slate-400 mb-2 ml-28">{institution}</p>
            <p className="font-bold text-xl dark:text-white tracking-wider my-4">{award}</p>
            <p className="dark:text-white">{description}</p>
            <button className="px-2 py-1 border border-slate-200 dark:text-white absolute top-7 left-2 ">{period}</button>
          </div>
          )
}