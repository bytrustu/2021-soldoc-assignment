import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Reservation,
  ReservationConfirm,
  ReservationBlank
} from '../pages';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Reservation} />
        <Route path="/confirm" component={ReservationConfirm} />
        <Route path="/blank" component={ReservationBlank} />
      </Switch>
    </>
  )
}

export default App;