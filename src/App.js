import {
  Maps,
  Feedback,
  Footer,
  Questionnaire,
  Training,
  Portfolio,
  Services,
  SecondarySlogan,
  Header
} from './pages'
import { ContactForm, Checkbox, CustomButton } from './components';

function App() {
  return (
    <div className="App" >

      <Header/>
      <SecondarySlogan/>
      <Portfolio/>
      <Services/>
      <Training/>
      <Feedback/>
      <Questionnaire/>
      <Maps/>
      <Footer/>
    </div>
  );
}
export default App;
