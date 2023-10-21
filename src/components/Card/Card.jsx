import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FeatureCard = (props) => {
  const { title, description, url, status } = props;

  return (
    <div className="mx-auto transition-all duration-300 shadow-md text-black dark:text-slate-300 dark:shadow-black card w-[450px] bg-[#fbf9f9] dark:bg-gray-700">
      <div className="text-black card-body dark:text-slate-300">
        <div className="flex flex-wrap items-center gap-x-3">
          <h2 className="text-sm text-black capitalize md:text-base card-title dark:text-slate-300">{title}</h2> <div className={`absolute top-3 right-3 w-3 h-3 ${status === "coming_soon" ? "bg-blue-500" : ""}${status === "available" ? "bg-green-500" : ""}${status === "maintenance" ? "bg-red-500" : ""} rounded-full`}></div>
        </div>
        <ul className=" w-full mx-4 my-4 p-2  rounded h-[auto] text-black dark:text-slate-300">
          {description.map((item) => {
            return (
              <li className="my-1 text-xs text-black md:text-sm dark:text-slate-300" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
        <Link to={url}>
          <button className="capitalize w-full btn border-none shadow-sm dark:shadow-black  hover:text-black hover:bg-[#ebebeb] dark:text-slate-300 bg-[#4cb0af] text-[#F5F5F5] dark:hover:text-slate-500">try now!</button>
        </Link>
      </div>
    </div>
  );
};
FeatureCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array,
  url: PropTypes.string,
  status: PropTypes.string,
};
export default FeatureCard;
