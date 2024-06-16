import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h1>WvW Log Viewer</h1>
      </header>
      <div className="layoutContainer">
        <div id="sidebar">
          <nav>
            <ul>
              <li>
                <Link to={``}>Overview</Link>
              </li>
              <li>
                <Link to={`topplayers`}>Top Players</Link>
              </li>
              <li>
                <Link to={`details`}>Details</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export const loader = async ({ params }) => {
  var myHeaders = new Headers();
  myHeaders.append("Pragma", "no-cache");
  myHeaders.append("Cache-Control", "no-cache");
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append("Sec-Fetch-Dest", "document");
  myHeaders.append("Sec-Fetch-Mode", "navigate");
  myHeaders.append("Sec-Fetch-Site", "none");

  return fetch(
    `https://kevinvisser.nl/server/gwlogviewer/record/${params.logId}`,
    {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
    }
  );
};

export default Layout;
