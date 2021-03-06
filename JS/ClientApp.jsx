import React from 'react';
import { render } from 'react-dom'

var ce = React.createElement;

var MyTitle = function(props) {
  return ce(
    'div',
    null,
    ce('h1', { style: { color: props.color } }, props.title)
  );
};

var MyFirstComponent = function() {
  return ce(
    'div',
    null,
    ce(MyTitle, { color: 'rebeccapurple', title: 'House of Cards' }),
    ce(MyTitle, { color: 'peru', title: 'Orange is the New Black' }),
    ce(MyTitle, { color: 'burlywood', title: 'Stranger Things' })
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
