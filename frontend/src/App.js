import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import img from "./public/diverse.png";
import gma from "./public/leanne.jpg";
import ben from "./public/ben.jpg";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";
import { Fade } from "react-reveal";
import Modal from "./components/registration/Registration";

const App = () => {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  const [modalShow, setModalShow] = React.useState(false);

  const blackTheme = {
    body: "#ffffff",
    text: "#14213d",
    expTxtColor: "#000a12",
    highlight: "#ffffff",
    dark: "#000000",
    secondaryText: "#5A6377",
    imageHighlight: "#fca311",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#8d99ae",
    headerColor: "#fca31177",
    splashBg: "#14213d",
  };

  const handleRegisterClick = () => {
    console.log("Register button clicked");
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const targetId = e.target.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const navLinks = document.querySelectorAll(".navbar-nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <MDBNavbar expand="lg" dark bgColor="dark" fixed="top">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            The Evolution of Systemic Racism
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="active"></MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#register">Register</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#content">Content</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#instructors">Instructors</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div id="register" className="section">
        {/* <h2>Register</h2> */}
        <Fade bottom duration={2000} distance="40px">
          <div className="greet-main" id="greeting">
            <div className="greeting-main">
              <div className="greeting-text-div">
                <div>
                  <h1 className="greeting-text" style={{ color: "	#2d2d2d" }}>
                    Greetings All
                  </h1>
                  <p
                    className="greeting-text-p subTitle"
                    style={{ color: "grey" }}
                  >
                    This is <em>The Evolution of Systemic Racism</em>, a course
                    in which you will view history from new perspectives to
                    better understand where we are today, how we got here, and
                    our options for the future.
                  </p>
                  {/* <SocialMedia theme={theme} /> */}
                  <div className="portfolio-repo-btn-div">
                    <Button
                      text="Register Now"
                      theme={blackTheme}
                      onClick={handleRegisterClick}
                      className="portfolio-repo-btn"
                    />
                  </div>
                  {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
                </div>
              </div>
              <div className="greeting-image-div">
                {/* <img
							alt="saad sitting on table"
							src={require("../../assests/images/feelingProud.svg")}
						></img> */}
                <Fade>
                  <img src={img} alt="Your Image" />
                </Fade>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <div id="content" className="section" style={{ background: "#f5f5f5" }}>
        <div className="main" id="skills">
          <div className="skills-header-div">
            <Fade bottom duration={2000} distance="20px">
              <h1
                className="skills-header"
                style={{ color: "#2d2d2d", marginTop: "50px" }}
              >
                Course Information
              </h1>
            </Fade>
            <Fade duration={2000}>
              <div style={{ marginTop: "50px" }}>
                <Fade duration={1000}>
                  <h1
                    className="skills-heading"
                    style={{
                      color: "#616161",
                      marginTop: "50px",
                      textAlign: "center",
                    }}
                  >
                    Content & Delivery
                  </h1>
                </Fade>
                <div>
                  <div
                    className="subTitle skills-text"
                    style={{ color: "grey", textAlign: "center" }}
                  >
                    We will focus on the history of the economic, legal,
                    theological, and philosophical systems embedded in our
                    country’s culture and systems that protect the dominance of
                    Anglo-Saxon institutions and blood. We will observe the four
                    roots as they transform into ideologies to produce the
                    racial disparities that we experience today. While there are
                    many stories of minorities that could be told, given six
                    weeks, our conversations will focus on those systems and
                    structures that have resulted in disparities in access to
                    education, health care, employment opportunities, wealth
                    accumulation and unequal treatment in our criminal justice
                    system experienced by our Black brothers and sisters. <br />{" "}
                    <br />
                    The course will be held on Tuesday evenings from Sept 12 to
                    Nov 14, with the exception of Oct 31st. <br /> Classes will take
                    place on Zoom from 6:30 pm to 8:30 pm.
                  </div>
                </div>
              </div>
            </Fade>
            <Fade duration={2000}>
              <div style={{ marginBottom: "40px", marginTop: "20px" }}>
                <Fade duration={1000}>
                  <h1
                    className="skills-heading"
                    style={{
                      color: "#616161",
                      marginTop: 0,
                      textAlign: "center",
                    }}
                  >
                    Themes
                  </h1>
                </Fade>
                <div style={{ justifyContent: "center" }}>
                  <div className="greeting-main">
                    <div
                      className="subTitle skills-text"
                      style={{ color: "grey", textAlign: "center" }}
                    >
                      Session 1: The Roots <br />
                      Session 2: Great Awakening Impact <br />
                      Session 3: Civil War and Aftermath <br />
                      Session 4: More of “Them” than “Us” <br />
                      Session 5: Beginnings of Civil Rights <br />
                      Session 6: Civil Rights and Push Back <br />
                      Session 7: Pushback Intensifies <br />
                      Session 8: Culture Wars and Issues for Difficult
                      Conversations
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="circle circle1"></div>
        {/* <div className="circle circle2"></div>
        <div className="circle circle3"></div> */}
      </div>

      <div id="instructors" className="section">
        <div className="main" id="skills" style={{ marginTop: "30px" }}>
          <div className="skills-header-div">
            <Fade bottom duration={2000} distance="20px">
              <h1 className="skills-header" style={{ color: "#2d2d2d" }}>
                About the Instructors
              </h1>
            </Fade>
          </div>
          <div className="skills-main-div">
            <div className="skills-text-div">
              <div className="portrait-container">
                <div>
                  <Fade duration={1000}>
                    <h1
                      className="skills-heading"
                      style={{ color: "#616161", marginTop: "50px" }}
                    >
                      Leanne Puglielli
                    </h1>
                  </Fade>
                  <Fade duration={1500}>
                    <h1
                      className="subTitle skills-text"
                      style={{ color: "grey", fontWeight: "bold" }}
                    >
                      Professor Emeritus <br />
                      Retired Consultant – DemoSoph Enterprises
                    </h1>
                  </Fade>
                </div>
                <div>
                  <img src={gma} alt="Your Image" className="portrait" />
                </div>
              </div>

              <Fade duration={2000}>
                <div>
                  <p className="subTitle skills-text" style={{ color: "grey" }}>
                    Leanne Puglielli is a retired Professional and
                    Organizational Design and Development expert. Her primary
                    area of interest was, and still is, in those leadership
                    skills and organizational systems focused on developing
                    people to reach their full potential as she consulted with,
                    primarily, State Agencies. She taught in Schools of
                    Management at Edgewood College, Capital University, and the
                    John Glenn School of Public Affairs at The Ohio State
                    University in addition to serving as regular faculty for the
                    Ohio and Nevada Certified Public Manager Programs and the
                    MAPS program at Ohio State. She was selected to serve on the
                    board of examiners for the Ohio Award for Excellence, for
                    the Wisconsin Forward Award.
                  </p>
                  <p className="subTitle skills-text" style={{ color: "grey" }}>
                    Leanne is an active member of the Episcopal church. Her
                    focus on living the baptismal covenant to love her neighbor
                    as herself, search for justice and truth, and respect the
                    dignity of every human being has revolved around racism
                    since she became involved with the civil rights movement in
                    the 1960’s. She taught JustFaith – a 30 week course on the
                    justice tradition of scripture, she became an active member
                    of Christ the Solid Rock for 8 years, working closely with
                    The Hon. Everett Mitchell on racial disparities in Madison,
                    and created “The Evolution of Systemic Racism” class which
                    she has taught for the past six years.
                  </p>
                  <p className="subTitle skills-text" style={{ color: "grey" }}>
                    Dr. Puglielli has a B.A. from Grinnell College, Grinnell,
                    Iowa, an M.A. from Smith College, Northampton,
                    Massachusetts, and a Ph.D. from The Ohio State University,
                    Columbus, Ohio.
                  </p>
                </div>
              </Fade>

              <div className="portrait-container">
                <div>
                  <Fade duration={1000}>
                    <h1
                      className="skills-heading"
                      style={{ color: "#616161", marginTop: "50px" }}
                    >
                      Ben Kempinen
                    </h1>
                  </Fade>
                  <Fade duration={1500}>
                    <h1
                      className="subTitle skills-text"
                      style={{ color: "grey", fontWeight: "bold" }}
                    >
                      Distinguished Clinical Professor Emeritus <br />
                      University of Wisconsin Law School
                    </h1>
                  </Fade>
                </div>
                <div>
                  <img src={ben} alt="Your Image" className="portrait" />
                </div>
              </div>

              <Fade duration={2000}>
                <div>
                  <p className="subTitle skills-text" style={{ color: "grey" }}>
                    Ben Kempinen taught at the University of Wisconsin Law
                    School for more than four decades until his retirement in
                    2018. His focus was criminal law and professional
                    responsibility. His teaching included both traditional
                    classroom teaching and experiential learning, where law
                    students gained experience by working on actual cases under
                    the supervision of faculty.
                  </p>
                  <p className="subTitle skills-text" style={{ color: "grey" }}>
                    While at the Law School, he was a member of several
                    legislative committees, a frequent speaker at continuing
                    education conferences, and engaged in trial and appellate
                    criminal defense work.
                  </p>
                  <p className="subTitle skills-text" style={{ color: "grey" }}>
                    Since 2018 he has served on the Wisconsin State Bar's
                    Standing Committee on Professional Ethics and currently
                    chairs the committee. He is a member of Midvale Community
                    Lutheran Church where he leads the Social Ministry Committee
                    and is also a member of the church's Racial Justice Group.
                  </p>
                  <p className="subTitle skills-text" style={{ color: "grey" }}>
                    BA Clinical Psychology - UW 1972. <br />
                    JD, 1976, Cum Laude <br />
                    University of Wisconsin Law School <br />
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
