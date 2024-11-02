import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5">
      <h2 className="text-3xl text-black font-bold">Oops!</h2>
      <p className="text-lg font-semibold">Page Not Found</p>
      <Link to="/" className="btn btn-success">
        Go Back
      </Link>
    </div>
  );
};

export default Error;
