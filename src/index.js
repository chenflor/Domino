import React from 'react';
import ReactDOM from 'react-dom';

import DominoBoard from './dominoBoard/dominoBoard.jsx';


const App = () => (
    <div>
        <DominoBoard/>  
        
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(
//     React.createElement('div',null,'hello world'),
//     document.getElementById("root")
// );
