import PropTypes from "prop-types";

const NumberElasticityComponent = ({ ResultNumber }) => {
  if (Math.abs(ResultNumber) < 1) {
    return <div className="text-[12px] text-green-500">INELASTIC</div>;
  } else if (Math.abs(ResultNumber) > 1) {
    return <div className="text-[12px] text-green-500">ELASTIC</div>;
  } else if (Math.abs(ResultNumber) === 1) {
    return <div className="text-[12px] text-green-500">UNITARY ELASTIC</div>;
  } else if (Math.abs(ResultNumber) === 0) {
    return <div className="text-[12px] text-green-500">PERFECT INELASTIC</div>;
  } else {
    return <div className="text-[12px] text-green-500">INFINITE PERFECT ELASTICITY</div>;
  }
};

NumberElasticityComponent.propTypes = {
  ResultNumber: PropTypes.number,
};
export default NumberElasticityComponent;
