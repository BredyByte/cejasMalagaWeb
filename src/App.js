import { Maps, Feedback, Footer, Questionnaire, Training } from './pages'
import { ContactForm, Checkbox } from './components';
function App() {
  return (
    <div className="App">
      <Training/>
      <Feedback/>
      <Questionnaire/>
      <Maps/>
      <Footer/>
    </div>
  )
}
export default App;
