// import React from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// export default class Example extends React.Component {
//   render() {
//     return (
//       <div>
//         <div>Todo LIst</div>
//       {this.state.todos.map(todo => 
//         (<TodoDetail description={todo.description} done={todo.done}/>)

//       }
//       </div>  




// )
// }
// }

import React from 'react';
import TodoDetail from "./TodoDetail"

const Header = (props) => {
  return (
  <div>
    {/* { props.todos.length !== 0 && props.todos[0].description} */}

    {props.todos.map(todo =>
      <TodoDetail description={todo.description} done={todo.done} />
    )}

  </div>);
}

export default Header;
