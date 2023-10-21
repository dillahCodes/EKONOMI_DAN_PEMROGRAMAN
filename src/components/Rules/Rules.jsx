import PropTypes from "prop-types";

const RulesComponent = (props) => {
  const { inputRule, inputRuleEng } = props;
  return (
    <div className="text-xs text-red-500 capitalize">
      *{inputRule} <br />
      *({inputRuleEng}) <br />
    </div>
  );
};
RulesComponent.propTypes = {
  inputRule: PropTypes.string,
  inputRuleEng: PropTypes.string,
};
export default RulesComponent;
