const Counter = () => {
  const { useState, useEffect } = React;
  const [count, setCount] = useState(0);
  const [negative, setNegative] = useState(false);
  const decrement = () => {
    setCount(count - 1);
  }
  const increment = () => {
    setCount(count + 1);
  }
  useEffect(() => {
    setNegative(count < 0);
 }, [count]);
  return (
    <>
      <button onClick={decrement} className="subtraction">-</button>
      <span className={`${negative ? 'result negative' : 'result'}`}>{count}</span>
      <button onClick={increment} className="addition">+</button>
    </>
  );
}
ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);