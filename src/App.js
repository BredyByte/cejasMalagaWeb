import { Maps, Feedback, Footer, Questionnaire, Training, Test } from './pages'
import { ContactForm, Checkbox } from './components';
import { ReactComponent as Logo} from './assets/img/Logo.svg'

function App() {
  return (
    <div className="App">
      <Test mainTitle="Услуги" logo={Logo}/>
    </div>
  )
}
export default App;
