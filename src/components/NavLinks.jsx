import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/login", text: "SignIn" },
  { id: 3, url: "/register", text: "Crate Account" },
  ,
];
const Navlinks = () => {
  return (
    <>
      {links.map((link) => {
        const { url, id, text } = link;
        return (
          <li key={id}  className="mr-3">
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default Navlinks;
