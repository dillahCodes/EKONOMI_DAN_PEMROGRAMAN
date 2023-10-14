import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#ebebeb]">
        <div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold  lg:text-6xl text-[#4cb0af]">{error.status}</h1>
            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page {error.statusText}
            </h6>
            <p className="mb-4 text-center text-gray-500 md:text-lg">{error.error.message}</p>
            <Link to="/home" className="px-5 py-2 text-blue-100 bg-[#4cb0af] rounded-md hover:bg-white hover:text-[#4cb0af]">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
