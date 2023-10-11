export default function FunctionParenthesisAndParameters() {
  const square = a => a * a;
  const plusOne = a => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);

  return (
    <>
      <h2>Parenthesis and parameters</h2>
      twoSquared = 4 <br />
      square(2) = {twoSquared}<br />
      threePlusOne = 4<br />
      plusOne(3) = {threePlusOne}
    </>
  )
}