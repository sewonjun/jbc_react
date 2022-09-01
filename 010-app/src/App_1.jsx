function App() {
  return (
    <div className="App">
      <Hello name="" />
    </div>
  );
}

function Hello({ name }) {
  if (name) {
    return (
      <div>
        <h2>hello {name}!</h2>
      </div>
    );
  }
  return <NoName />;
}

function NoName() {
  return <div>이름이 입력이 안됐잖아!!!</div>;
}

export default App;
