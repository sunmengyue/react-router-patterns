import './App.css';
import Food from './Food';
import Meal from './Meal';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Route exact path="/food/:name" component={Food} /> */}
      <Switch>
        <Route render={() => <h1>Error! Page Not Found</h1>} />
        <Route
          exact
          path="/food/:name"
          render={(routeProps) => <Food {...routeProps} />}
        />
        <Route exact path="/food/:foodName/drink/:drinkName" component={Meal} />
      </Switch>
    </div>
  );
}

export default App;
