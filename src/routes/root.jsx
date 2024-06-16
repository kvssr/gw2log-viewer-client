import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export const loader = ({ params }) => {};

export default Root;
