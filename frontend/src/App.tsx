import './App.css';
import Input from './components/Input';
import Table from './components/Table';

import GHStateProvider from './contexts/GHContext';

function App() {
  return (
    <div className="App">
      <GHStateProvider>
        <Input/>
        <Table/>
      </GHStateProvider>
    </div>
  );
}

export default App;
