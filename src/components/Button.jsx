export function Button(props) {
  return (
    <button className={props.className}>
      <img src={props.image} alt="" />
      {props.text}
    </button>
  );
}
