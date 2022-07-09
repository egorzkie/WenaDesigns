import Parse from 'parse';
import Components from './Components/Components';

// In a React Native application
import * as Env from './environments';

// You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;
export 

function App() {
  return <Components />;
}

export default App;
