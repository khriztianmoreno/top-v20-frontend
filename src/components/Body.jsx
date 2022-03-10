// function Body(props){
//   return (
//     <div>
//       {props.content}
//     </div>
//   )
// }

const Body = (props) => {
  const className = props.cardFull ? 'card-body card-body-full' : 'card-body';
  return (
    <div className={className}>
      {props.children ? props.children : props.content}
    </div>
  )
}

export default Body;
