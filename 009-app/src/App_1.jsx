// import "./App.css"

function App() {
  return <Hello name="licat" />;
}

function Hello({ name }) {
  const num = [1, 2, 3, 4, 5];
  const numComponentList = num.map((i) => (
    <p key={i.toString()}>
      안녕, {name} {i}호{" "}
    </p>
  ));
  return <div>{numComponentList}</div>;
}

export default App;
