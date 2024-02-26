import React from 'react'
import SectionHeader from './section-header'

export default function Experience() {
  return (
    <div className='mt-16'>
        <SectionHeader  title={"Experience"}/>
        <ExpCard
        company={"VtecUg"}
        role={"Web Developer"}
        description={"As a web developer at Vtecug, your role involves designing, developing, and maintaining websites and web applications. You'll collaborate with teams to understand project requirements, create user-friendly interfaces, and optimize website performance across various devices and browsers. Staying updated on industry trends, you'll continuously improve skills and contribute to the company's web development innovation."}
        period={"2023 - Current"}
        />
        <ExpCard
        company={"Metro JS"}
        role={"IT Specialist"}
        description={"As an IT specialist at Metro Junior School, my responsibilities include managing the school's IT infrastructure, providing technical support to staff and students, maintaining hardware and software systems, ensuring network security, and implementing technology solutions to enhance teaching and learning experiences."}
        period={"2023 - Current"}
        />
        <ExpCard
        company={"Ezone "}
        role={"ICT Instructor"}
        description={"As an ICT Instructor at eZone School of Computing,my role was to teach computer fundamentals, software applications, and digital literacy.I could design engaging lessons, assess student progress, and stay updated on industry trends to ensure curriculum relevance. Your aim is to prepare students for success in the ICT field."}
        period={"2022 - 2023"}
        />
    </div>
  )
}
function ExpCard({company, role, description, period}){
  return(
          <div className="exp-card bg-white dark:bg-slate-800 h-fit w-full p-8 relative">
            <p className="text-slate-400 mb-2">{company}</p>
            <p className="font-bold text-xl dark:text-white tracking-wider mb-2 mt-8">{role}</p>
            <p className="dark:text-white">{description}</p>
            <button className="px-2 py-1 border border-slate-200 dark:text-white absolute top-7 right-8 ">{period}</button>
          </div>
          )
}