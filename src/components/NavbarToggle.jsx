import PropTypes from "prop-types";

const NavbarToggle = ({ navbarConditionHandler }) => {
  return (
    <label className="absolute right-4  bg-transparent border-none text-black hover:text-[#F5F5F5] hover:bg-[#4cb0af] rounded-md top-[13px] btn btn-circle swap swap-rotate md:hidden dark:text-slate-300">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onClick={navbarConditionHandler} />

      {/* hamburger icon */}
      <svg className="fill-current swap-off" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
      </svg>

      {/* close icon */}
      <svg className="fill-current swap-on" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
      </svg>
    </label>
  );
};
NavbarToggle.propTypes = {
  navbarConditionHandler: PropTypes.func,
};
export { NavbarToggle };
