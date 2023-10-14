import PropTypes from "prop-types";

const InputValue = ({ onChange, placeholder }) => {
  return <input onChange={onChange} type="text" placeholder={placeholder} className="w-full max-w-xs bg-[#F5F5F5] text-black transition-all duration-700 ease-out input input-bordered placeholder:font-bold dark:text-slate-300 dark:bg-slate-700" />;
};
InputValue.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default InputValue;
