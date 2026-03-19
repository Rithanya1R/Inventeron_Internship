import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header"
// import Dashboard from "./Pages/Dashboard/Dashboard"


// props (object - multiple value)
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  const profile = {
    name: "Rithanya",
    role: "Developer",
    company: "Inventron"
  };

  return (
    <div className="App">
      <Dashboard profile={profile} />
    </div>
  );
}

export default App;
// function App() { --> props (single value)

//   const name = "Rithanya Ravi";
//   return(
//     <div className='App'>
//       <Dashboard userName = {name}/>
//     </div>
//   );
// }
//   return (
//     <div className="App">
//       <Dashboard />
//       {/* <Header />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//         Rithu Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>Hi welcome to my website</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;
