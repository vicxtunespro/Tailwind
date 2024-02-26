import ContactForm from '@/components/contact-form'
import ContactInfo from '@/components/contact-info'
import PageHeader from '@/components/page-header'
import React from 'react'

export default function Contact() {
  return (
    <div className='dark:bg-slate-800'>
        <PageHeader title={"Contact Me"} />
        <div className="main-content px-8 md:px-16">
          <ContactInfo/>
          <ContactForm/>
        </div>
    </div>
  )
}
