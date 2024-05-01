import React from "react";
import img from "../assets/spline.jpg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Yes WeCode</h1>
          <p>Solution to all your problems at one place</p>
        </main>
      </div>
      <div className="home2">
        <img src={img} alt="" />
        <div>
          <p>
            YWC is the leading company providing high quality on-demand offline
            and online courses. Shop various courses and right instructors for
            you and grab internships in no time.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Introducing Yes WeCode -We empower businesses to leverage the
            combined power of these two fields, crafting innovative solutions
            that are not only technologically sound but also visually appealing,
            user-friendly, and impactful. Our Services: * Design Thinking and
            User Experience (UX) Design: We guide our clients through a
            human-centered design process, understanding their target audience
            and user needs through research and workshops. This allows us to
            craft intuitive and user-friendly experiences across all
            touchpoints, from websites and mobile apps to physical products and
            digital services. * Front-End and
            Back-End Development: Innovo houses a team of skilled developers who
            build robust and secure back-end infrastructure as well as visually
            stunning and user-centric front-end interfaces.
          
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>BRANDS</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
