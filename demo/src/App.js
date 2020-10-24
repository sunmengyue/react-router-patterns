import './App.css';
import Food from './Food';
import Meal from './Meal';
import SearchFood from './SearchFood';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Route exact path="/food/:name" component={Food} /> */}
      <Switch>
        <Route
          exact
          path="/food/:name"
          render={(routeProps) => <Food {...routeProps} />}
        />
        as
        <Route
          exact
          path="/"
          render={(routeProps) => <SearchFood {...routeProps} />}
        />
        <Route exact path="/food/:foodName/drink/:drinkName" component={Meal} />
        <Route render={() => <h1>Error! Page Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
