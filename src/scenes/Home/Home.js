import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './Calculator/Calculator';

function Home() {
  return (
    <Switch>
      <Route exact path="/home" component={Calculator} />
      <Route path="/home/calculator" component={Calculator} />
    </Switch>
  );
}

export default Home;