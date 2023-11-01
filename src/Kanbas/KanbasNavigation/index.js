import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faGauge, faBook, faCalendarDays, faInbox, faClock, faTv, faCircleArrowRight, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import sideBarItems from "./sidebarItems.json"
import northeastern_logo_icon from './northeastern_logo_icon.png'; // Tell webpack this JS file uses this image
import './style.css'
function KanbasNavigation() {
  const linkIcons = [faCircleUser, faGauge, faBook, faCircleUser, faCalendarDays, faInbox, faClock, faTv, faCircleArrowRight, faQuestionCircle]
  linkIcons.forEach(icon => {
    library.add(icon);
  })
  const { pathname } = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <img src={northeastern_logo_icon} alt="Logo" className="northeastern-icon" />
      </div>
      {sideBarItems.map((item, index) => (
        <Link
          key={index}
          to={`/Kanbas/${item.title}`}
          className={`sidebar-item ${pathname.includes(item.title) && "sidebar-item-active"}`}>
          <div className={`sidebar-item-icon ${item.title.toLowerCase()}`}>
            <FontAwesomeIcon icon={item.icon} />
          </div>
          <div className={`sidebar-item-text`}>{item.title}</div>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;