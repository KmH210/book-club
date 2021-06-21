import Logo from "../components/linkedin.png";
import "./About.css"

function About() {
  return (
    <div className="About">
      <h3>Read It and Weap</h3>
      <p>
        Have you ever wanted to read more but found yourself falling short of
        your goals? Do you enjoy a friendly competition? <strong>Read It and Weep</strong> is the
        ultimate competitive book club for you. How does it work? Create an
        account, choose a book, and start reading! You can join an existing
        competition or if you’re feeling creative, make your own and have others
        join you. Progress is updated regularly so you can always see where you
        stand in the rankings. Are you still reading this? What are you waiting
        for? Sign up and go grab a book already!{" "}
      </p>
      <p>
        Book data and cover images courtesy of Open Library:
        <a href="https://openlibrary.org/developers/api">https://openlibrary.org/developers/api</a>{" "}
      </p>
      <div className="Links">
      <a href="https://www.linkedin.com/in/anthonyabrignani/">
        <img src={Logo} alt="LinkedIn"></img>
      </a>Anthony Abrignani{" "}
      <a href="https://www.linkedin.com/in/katherine-katie-holland/">
        <img src={Logo} alt="LinkedIn"></img>
      </a>Katie Holland{" "}
      <a href="https://www.linkedin.com/in/leah-luyk/">
        <img src={Logo} alt="LinkedIn"></img>
      </a>Leah Luyk{" "}
      </div>
    </div>
  );
}

export default About;
