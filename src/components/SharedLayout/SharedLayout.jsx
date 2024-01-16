import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";

function SharedLayout() {
  return (
    <>
      <header>
        <div className={css.container}>
          <div className={css.image_container}>
            <img
              src="https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png"
              alt="logo-icon"
            />
          </div>
          <nav className={css.navigation}>
            <ul className={css.list_item}>
              <li>
                <Link to="/">
                  <p>World</p>
                </Link>
              </li>
              <li>
                <Link to="/countries">
                  <p>Countries</p>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <p>Contact to us</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Suspense fallback={<div>Loading...</div>} className={css.main}>
        <Outlet />
      </Suspense>
      <footer>
        <div className={css.bottom_container}>
          <h1>Copyright © 2023</h1>
        </div>
      </footer>
    </>
  );
}

export default SharedLayout;
