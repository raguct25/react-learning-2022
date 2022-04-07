import { Link, NavLink } from "react-router-dom";

export interface AboutPage {}

const Home: React.FunctionComponent<AboutPage> = (props) => {
  return (
    <div>
      <h2>Home Page</h2>
      <NavLink to="users">Go To User Page</NavLink>
      <br />
      <NavLink to="profile">Go To Profile Page</NavLink>
      <br />
      <Link to="about">Go To About Page</Link>
    </div>
  );
};

export default Home;
