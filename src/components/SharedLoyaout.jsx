import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

function SharedLoyaout() {
  return (
    <>
        <header>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/movies">Countries</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
            </ul>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </>
  );
}

export default SharedLoyaout;