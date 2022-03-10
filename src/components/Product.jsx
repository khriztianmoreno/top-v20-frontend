import Title from './Title';
import Body from './Body';

const Product = (props) => {
  const { title, content, onHandleClick } = props;

  return (
    <div onClick={() => onHandleClick(title)}>
      <Title titulo={title} />
      <Body content={content} />
    </div>
  )
}

export default Product;
