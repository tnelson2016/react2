import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true
  return (
    <div className="App">
       { showEmployees ? (
        <>
        <Employee />
        <Employee/>
        <Employee/>
        <Employee/>
        <Employee />
        </>
      )
          :
         (<p>You cannot see employees</p>
      )}
      
    </div>
  );
}

export default App;
