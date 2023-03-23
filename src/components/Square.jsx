export default function Square({ value }) {
  
  const handleClick = () => {
    console.log('clicked!');
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}