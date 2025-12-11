import './App.css';
import Dog from './components/Animal/Dog';
import InputComponent from './components/Register/InputComponent';
import RegisterForm from './components/Register/RegisterForm';
function App() {
  return (
    <div>
        <Dog />
        <InputComponent />
        <br />
        <RegisterForm />
    </div>
  );
}

export default App;
