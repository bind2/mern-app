import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate()
  const goBack = ()=>{
    navigate(-1)
  }
  return (
    <section>
      <div className="container" id='page-not-found'>
        <div class="flex-container">
          <div class="text-center">
            <h1>
              <span class="fade-in" id="digit1">4</span>
              <span class="fade-in" id="digit2">0</span>
              <span class="fade-in" id="digit3">4</span>
            </h1>
            <h3 class="fadeIn">PAGE NOT FOUND</h3>
            <div className="buttons">
            <button type="button" className='go-back-btn' onClick={goBack}>Go back</button>
            <button type="button"><HashLink to={`/`}>Return To Home</HashLink></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound