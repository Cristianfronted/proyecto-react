import React from 'react'
import './main.css'
import house2 from '../../img/brick-wall-1850095_1920.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'
import img4 from '../../img/img4.jpg'

const Main = () => {
  return (
    <>
    {/* ---------PRIMER APARTADO---------- */}
    <section class="about-us">
  <div class="about-container">
    <div class="about-image">
      <img src={house2} alt="Construction Building"></img>
    </div>
    <div class="about-text">
      <h3>ABOUT US</h3>
      <h2>Innovative Construction Solutions</h2>
      <p>NovaBuild is a full-service building design company with a simple and unique design and construction philosophy. We believe that one building designer will take the job from concept on paper to implementation on your site.</p>
      <ul>
        <li>
          <span>🔧</span>
          <div>
            <h4>Professional Experience</h4>
          </div>
        </li>
        <li>
          <span>👷</span>
          <div>
            <h4>Expert Team</h4>
          </div>
        </li>
        <li>
          <span>🏛️</span>
          <div>
            <h4>Company Philosophy</h4>
          </div>
        </li>
      </ul>
      <button class="learn-more">LEARN MORE</button>
    </div>
  </div>
</section>

{/* --------SEGUNDO APARTADO---------- */}
<section className="portfolio">
      <div className="portfolio-header">
        <h2>OUR PORTFOLIO</h2>
        <h1>Experience the Excellence</h1>
        <p>
          Explore our diverse portfolio showcasing our expertise across various
          projects
        </p>
      </div>
      <div className="portfolio-gallery">
        <img
          src={img4} // Imagen 1 de ejemplo
          alt="High-rise Buildings"
          className="portfolio-image"
        />
        <img
          src={img2} // Imagen 2 de ejemplo
          alt="Modern Apartments"
          className="portfolio-image"
        />
        <img
          src={img3} // Imagen 3 de ejemplo
          alt="Office Building"
          className="portfolio-image"
        />
        <img
          src={img4} // Imagen 4 de ejemplo
          alt="Luxury House"
          className="portfolio-image"
        />
      </div>
    </section>











    <section className="contact-form-section">
      <div className="contact-form">
        <h2>GET IN TOUCH</h2>
        <h1>Reach Out for Expert Assistance</h1>
        <form>
          <div className="form-group">
            <label>
              <i className="fa fa-user"></i>
              <input type="text" placeholder="Your Name" />
            </label>
          </div>
          <div className="form-group">
            <label>
              <i className="fa fa-envelope"></i>
              <input type="email" placeholder="Your Email" />
            </label>
          </div>
          <div className="form-group">
            <label>
              <i className="fa fa-phone"></i>
              <input type="text" placeholder="Your Phone" />
            </label>
          </div>
          <div className="form-group">
            <label>
              <i className="fa fa-pencil"></i>
              <input type="text" placeholder="Subject" />
            </label>
          </div>
          <div className="form-group">
            <label>
              <i className="fa fa-comment"></i>
              <textarea placeholder="Message"></textarea>
            </label>
          </div>
          <button type="submit" className="submit-btn">
            SUBMIT REQUEST
          </button>
        </form>
      </div>
    </section>
    </>
  )
}

export default Main
