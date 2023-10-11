export default function ImpliedReturns() {
  const multiply = (a, b) => a * b;
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);

  return (
    <>
      <h2>Implied return</h2>
      fourTimesFive = 20 <br />
      multiply(4,5) = {fourTimesFive}
    </>
  )
}