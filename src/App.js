import { Maps, Feedback, Footer, Questionnaire, Training, Portfolio } from './pages'
import { ContactForm, Checkbox, CustomButton } from './components';

function App() {
  return (
    <div className="App" >
      <Portfolio/>
      <Training/>
      <Feedback/>
      <Questionnaire/>
      <Maps/>
      <Footer/>
    </div>
  );
}
export default App;
