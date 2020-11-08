import Shows from './components/Shows';

function App() {
  return (
    <div className="ui container">
      <h1>
        Radio Archive
      </h1>
      			<h1>Past Shows:</h1>

      <div className="ui five doubling stackable cards">
        <Shows />
        <Shows />
        <Shows />
        <Shows />
        <Shows />
        <Shows />
        <Shows />
        <Shows />
        <Shows />
        <Shows />

      </div>

    </div>
  );
}

export default App;
