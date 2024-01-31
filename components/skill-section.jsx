import React from 'react'


export default function Skill() {
  return (
<div className="skill my-8">
  <div className="styled-title">
    <p className="text-3xl font-bold dark:text-white">What I Do</p>
    <div className="h-0.5 w-32 bg-slate-200 dark:bg-slate-500 after:block after:h-full after:w-8 after:bg-blue-500 dark:after:bg-slate-200 after:content-['']"></div>
  </div>
  <div className="activities my-8 flex flex-col md:flex-row flex-wrap">
    <div className="flex basis-1/2">
      <div className="icon h-16 min-w-16 flex justify-center items-center text-5xl rounded-lg bg-slate-200 lg:max-w-16"></div>
      <div className="px-2 md:px-4 py-4">
        <p className="mb-4 text-2xl dark:text-white font-semibold">Demo Data</p>
        <p className="dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nihil perspiciatis voluptate, dolores dignissimos accusamus placeat, tenetur ullam magni illo incidunt harum nemo rem iusto, fuga temporibus repellat voluptatem et.</p>
      </div>
    </div>
  </div>
</div>

  )
}
