import { Link } from "react-router-dom";

const ComingSoonPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-100">
        <div className="flex flex-col items-center justify-center">
          <img src="/public/profile.jpg" alt="Logo" className="object-cover w-40 h-40 mb-8 rounded-full" />
          <h1 className="mb-4 text-4xl font-bold text-center">Coming Soon</h1>
          <p className="px-4 mb-8 text-lg text-center md:px-0">I{"'"}m working hard to bring you something awesome. Stay tuned!</p>
          <div className="flex items-center justify-center space-x-4">
            <Link to="/home" className="px-5 py-2 text-blue-100 bg-[#4cb0af] rounded-md hover:bg-white hover:text-[#4cb0af]">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonPage;
