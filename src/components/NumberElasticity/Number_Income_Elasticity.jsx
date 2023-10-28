import PropTypes from "prop-types";
const InfoNumberIncome = ({ ResultNumber }) => {
  if (ResultNumber < 0) {
    return <span>product Inferior</span>;
  } else if (ResultNumber > 0 && ResultNumber < 1) {
    return <span>basic necessities (produk kebutuhan pokok)</span>;
  } else {
    return <span>Luxury Goods (Barang Mewah)</span>;
  }
};
InfoNumberIncome.propTypes = {
  ResultNumber: PropTypes.number,
};
export { InfoNumberIncome };
