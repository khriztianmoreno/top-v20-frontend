import PropTypes from 'prop-types';

function OnionHater(props) {
  const { onHandleChange } = props;

  // JSX
  return (
    <div>
      <textarea name="description" id="" cols="30" rows="10" onChange={onHandleChange} />
    </div>
  );
}

OnionHater.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
};

export default OnionHater;
