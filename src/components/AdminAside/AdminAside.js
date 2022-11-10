import { Link } from "react-router-dom";
import "./AdminAside.scss";

export default function AdminAside() {
  return (
    <>
      <aside className="aside">
        <div className="aside__link">f_ckingsick admin</div>
        <ul>
          <li className="aside__list-item">
            <Link to="/" className="aside__link">
              Home Page
            </Link>
          </li>
          <li className="aside__list-item">
            <Link className="aside__link" to="/products">
              Products Page
            </Link>
          </li>
          <li className="aside__list-item">
            <Link className="aside__link" to="/admin/add">
              Add a Product
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
