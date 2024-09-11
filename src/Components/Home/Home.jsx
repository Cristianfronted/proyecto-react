import React from 'react'
import './home.css'

const Home = () => {
  return (
    <>
    <section className='home-cont'>
        <div className='home-text'>
          <h1>Casas de alquiler</h1>
          <p>Alquila la casa de tus sueños para poder descansar y disfrutar de tu tiempo libre</p>
        </div>
        <div className="home-btn">
          <button>
            <a href='#'>Contacto</a>
          </button>
        </div>
    </section>
    </>
  )
}

export default Home
