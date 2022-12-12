
import { Maps, Feedback, Footer, Questionnaire } from './pages';
import { CircleButton } from './components';
//import { Services } from './components/Services';

function App() {
  return (
    <div className="App">
      {/*<Services />
       <Feedback />
      <Questionnaire />
      <Maps />
      <Footer /> */}

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
