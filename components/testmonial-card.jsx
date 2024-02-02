import React from 'react'

export default function Testimonial() {
  return (
    <div className="w-full">
        <div className="styled-title">
            <p className="text-3xl font-bold dark:text-white">Testimonal</p>
            <div className="h-0.5 w-32 bg-slate-200 dark:bg-slate-500 after:block after:h-full after:w-8 after:bg-blue-500 dark:after:bg-slate-200 after:content-['']"></div>
        </div>
        <div className="test-card-group flex justify-start gap-8 overflow-x-auto overflow-y-hidden px-4 py-16 snap-x snap-mandatory" >
            <TestimonialCard />
            <TestimonialCard />
        </div>
    </div>
  )
}
function TestimonialCard(){
    return(
        <div className="h-98 flex-shrink-0 relative max-w-80 rounded-sm bg-white dark:bg-slate-700 p-8 shadow-xl border border-slate-100 dark:border-slate-500 snap-center">
            <div className="quotes absolute text-9xl text-slate-200">"</div>
            <div className="quotes absolute bottom-[-60px] right-5 text-9xl text-slate-200">"</div>
            <div className="img absolute left-[122px] top-[-40px] h-20 w-20 rounded-full bg-orange-400"></div>
            <div className="content mt-16">
                <p className='dark:text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In debitis, voluptatibus error saepe dolores dolor consequatur dignissimos odio vero laborum ipsa sit eveniet unde natus. Officia alias consectetur porro recusandae?</p>
                <p className="letter pt-8 font-bold dark:text-white">Client Name</p>
                <p className="text-sm font-light text-blue-500 dark:text-purple-200 ">Client Title</p>
            </div>
        </div>
    )
}
