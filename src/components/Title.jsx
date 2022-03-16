import PropTypes from 'prop-types';

function Title({ titulo }) {
  return <h1>{titulo}</h1>;
}

Title.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Title;
