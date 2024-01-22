import reactImg from "../../assets/logo192.png";
import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <img src={reactImg} alt="reactImg" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}