import PropTypes from 'prop-types';

function Body(props) {
  const { cardFull, content, children } = props;

  const className = cardFull ? 'card-body card-body-full' : 'card-body';
  return (
    <div className={className}>
      {children || content}
    </div>
  );
}

Body.propTypes = {
  cardFull: PropTypes.bool,
  content: PropTypes.string,
  children: PropTypes.node,
};

Body.defaultProps = {
  cardFull: false,
  content: '',
  children: null,
};

export default Body;
