import PropTypes from "prop-types";

const TableButton = ({ onclick }) => {
  return (
    <button onClick={onclick} className="mt-10 btn w-full  rounded-md text-xs sm:text-sm px-2 border-none  dark:shadow-black  hover:text-black hover:bg-[#ebebeb] dark:text-slate-300 bg-[#4cb0af] text-[#F5F5F5] dark:hover:text-slate-500">
      calculate
    </button>
  );
};

TableButton.propTypes = {
  onclick: PropTypes.func,
};

export default TableButton;
