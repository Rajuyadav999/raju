import logo from './logo.svg';
import './App.css';



import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Navs from './components/Navs';
import Gmailpage from './components/gmailpage';

// function App() {
//   /*
//       Routing:
//         1 => Install react-router-dom from Npmjs (npm i react-router-dom)
//         2 => import BrowserRouter, Routes, Route, Navigate
//         3 => Dclare those Statements
//         4 => declacre the Components to a path
//   */
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello world..!</h1>
//       </header>
//         <BrowserRouter>
//           <Routes>
//             <Route path='/a' element={<Home/>} />
//             <Route path='/b' element={<About/>} />
//             rou
//             <Route path='*' element={<Navigate to={'/a'}/>}/>
//           </Routes>
//         </BrowserRouter>
//         <div className='foot'>
//         <Navs/>
//         </div>
//     </div>
//   );
// }

// export default App;



function App(){
  return(
    
    <>
    
     <BrowserRouter>
     <Routes>
      <Route path='/a' element={<Gmailpage/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )

}

export default App;