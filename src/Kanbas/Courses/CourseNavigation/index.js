import { Link, useParams, useLocation } from "react-router-dom";
import './style.css'

export default function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="navigation-sidebar">
      <div class="navigation-sidebar-course">
        {courseId}
      </div>
      {links.map((link, index) => (
        <Link key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`navigation-sidebar-item ${pathname.includes(link) && "navigation-sidebar-item-active"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
