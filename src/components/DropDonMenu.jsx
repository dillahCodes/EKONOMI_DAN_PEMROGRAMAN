import PropTypes from "prop-types";

const MenuDropdownComponent = (props) => {
  const { listItem } = props;
  return (
    <ul className="md:w-[80%] pl-2 my-3 text-lg text-black capitalize md:my-0 md:items-center md:flex md:justify-around font-Kanit dark:text-slate-300">
      {listItem.map((item) => (
        <li key={item.name}>
          <button>{item.name}</button>
          <div className="absolute flex flex-col">
            <li>{item.menuDropdown}</li>
          </div>
        </li>
      ))}
    </ul>
  );
};

MenuDropdownComponent.propTypes = {
  listItem: PropTypes.array,
};

export default MenuDropdownComponent;
