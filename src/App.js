import React from 'react';
import './style.css';


export default function App() {
  return (
    <div>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./design.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&family=Poppins:wght@200&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet" />
        <title>Portfolio</title>
        <header>
          <div className="container">
            <nav className="flex items-centre justify-between">
              <div className="left flex justfiy-right">
                <div className="logo">
                  <h1 id="NameHead">Graham Myles</h1>
                </div>
                <div>
                  </div>
              </div>
              <div className="right">
                <button className="btn btn-primary">Contact</button>
              </div>
            </nav>
          </div>
        </header>
        <div className="hero flex items-centre justify-between">
          <div className="left flex-1 justify-center">
          </div>
          <div className="right flex-1">
            <h6 id="heading">Graham Myles</h6>
            <h1>
              I'm a Software<br />
              <span>Engineer</span>
            </h1>
            <div>
              <a href="Graham_Myles_CV..pdf" download="Graham CV">
                <button className="btn btn-secondary">DOWNLOAD CV</button></a>
            </div>
          </div>
        </div>
        <section className="about">
          <div className="container flex items-centre">
            <div className="left flex-1 justify-right">
              <img src="Headshot.jpg" height="400px" alt="profile pic" />
            </div>
            <div className="right flex-1">
              <h1>About <span>Me</span></h1>
              <h3>Hello! I'm Graham Myles.</h3>
              <p>
                I'm a Software Engineer student at The Belgium ITversity. I'm currently completing my third year and am now preparing for my fourth year internship.
                If I'm lucky I will have the amazing opportunity to work with SovTech in my future.<br />
                See my skills below
              </p>
              <div className="skills">
                <a><img src="./webdesign.png" width="40px" /><p>Web Design</p></a>
                <a><img src="./softwaredev.png" width="40px" /><p>Software Development</p></a>
                <a><img src="./databasedev3.jpg" width="42px" /><p>Database Development</p></a>
                <a><img src="./iotdev.png" width="40px" /><p>IOT Development</p></a>
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="container">
            <h1 className="services-head">Why Do I Want To Work At Sovtech?</h1>
            <p>"The leading software development company in Africa"</p>
            <div className="card-grid">
              <div className="card">
                <h2>Experience</h2>
                <p>
                  I will be exposed to many different modern development styles.
                </p>
              </div>
              <div className="card">
                <h2>Energy</h2>
                <p>
                  From the emails and company profiles I can see a great energy and fun workplace.
                </p>
              </div>
              <div className="card">
                <h2>Future</h2>
                <p>
                  I can see a bright future ahead of myself when I think of working for SovTech.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

