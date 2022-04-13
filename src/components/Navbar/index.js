import user from "../../Images/userImage.png";
import "./style.css"
const Navbar = () => {
  return (
    <nav>
      <img src={user} className="nav--icon" alt="userimage" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
};
export default Navbar;
