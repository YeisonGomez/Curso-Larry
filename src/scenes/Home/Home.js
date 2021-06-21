import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SidebarInvoice from '../../components/SidebarInvoice/SidebarInvoice';
import Calculator from './Calculator/Calculator';

function Home() {

  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Calculator} />
        <Route path="/home/calculator" component={Calculator} />
      </Switch>
      <SidebarInvoice/>
    </div>
  );
}

export default Home;