import React, { useState } from 'react'

function Contact() {
  const [contactDetail, setContactDetail] = useState({ name: "", email: "", phone: "", file: "", message: "" })

  const inputHandler = (e) => {
    const { name, value } = e.target
    setContactDetail({ ...contactDetail, [name]: value })
  }

  const contactFormSubmit = (e) => {
    e.preventDefault()
  }

  console.log(contactDetail)


  return (
    <section>
      <div className="container" id='contact'>
        <div className="contact-form-container">
          <h1>Contact Form</h1>
          <form onSubmit={contactFormSubmit}>
            <div className="input-field">
              <label htmlFor="name">Full Name</label>
              <input type="text" id='name' name='name' placeholder='Enter your full name' onChange={inputHandler} />
            </div>

            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' name='email' placeholder='Enter your email' onChange={inputHandler} />
            </div>

            <div className="input-field">
              <label htmlFor="phone">Phone number</label>
              <input type="phone" id='phone' name='phone' placeholder='Enter your phone number' onChange={inputHandler} />
            </div>

            <div className="input-field">
              <label htmlFor="file">File</label>
              <input type="file" id='file' name='file' placeholder='Enter your file' onChange={inputHandler} />
            </div>

            <div className="message-field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="5" placeholder='write your message here' onChange={inputHandler}></textarea>
            </div>

            <div className="button-field">
              <button type='submit'>submit</button>
              <button type='reset'>reset</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact