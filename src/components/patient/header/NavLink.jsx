import { NavLink } from "react-router-dom";

const links = [
 { id: 1, url: "/insight", text: "Trimesters" },
  { id: 2, url: "/notification", text: "Notifications" },
  { id: 3, url: "/health", text: "My Health Tip" },
  { id: 4, url: "/blood", text: "Blood-Type" },
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
