import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs'

// document.addEventListener("DOMContentLoaded", () => {
//   const root = document.getElementById('root');
//   ReactDOM.render(<Clock/>, root);
// });

const Panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
      <div className="tabs">
        <Tabs panes={Panes} />
      </div>
    </div>
    )

  }
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
