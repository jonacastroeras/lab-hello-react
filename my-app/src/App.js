import Menu from './components/header/menu'
import AppsList from './components/appsList/index';
import Title from './components/header/title'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Title />
      </header>
      <body>
        < AppsList />
      </body>
    </div>
  );
}

export default App;
