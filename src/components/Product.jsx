import PropTypes from 'prop-types';

import Title from './Title';
import Body from './Body';

function Product(props) {
  const { title, content, onHandleClick } = props;

  return (
    <button onClick={() => onHandleClick(title)} type="button">
      <Title titulo={title} />
      <Body content={content} />
    </button>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default Product;
