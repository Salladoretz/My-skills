import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Main from './components/Main/Main.jsx'
import More from './components/More/More'
import Rightside from './components/RightSide/RightSide.jsx'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <div className='AppGlass'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='more' element={<More />} />
        </Routes>
        <Rightside />
      </div>
    </div>
  );
}

export default App;
