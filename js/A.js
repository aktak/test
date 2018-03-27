import React from 'react';
import ReactDOM from 'react-dom';

// export default class A extends React.Component {

//   constructor(props) {
//     super(props);
//     console.log('constructor', this.props.count, this.props.index);
//   }

//   componentDidMount() {
//     console.log('componentDidMount', this.props.count, this.props.index);
//   }
//   componentWillMount() {
//     console.log('componentWillMount', this.props.count, this.props.index);
//   }

//   componentDidUpdate() {
//     console.log('componentDidUpdate', this.props.count, this.props.index);
//   }
//   componentWillUpdate() {
//     console.log('componentWillUpdate', this.props.count, this.props.index);
//   }

//   render() {
//     console.log('render', this.props.count, this.props.index);

//     var c = [];

//     for (var i = 0; i < this.props.count; i++) {
//       c.push(<A index={i} count={this.props.count - 1} />);
//     }

//     return (
//       <span>
//         {this.props.count}.{this.props.index}[{c}]
//       </span>
//     );

//   }

// }

export default class A extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
          <div id="d1"><I /></div>
          <div id="d2"></div>
      </div>
    );
  }
}

class I extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render() {
  
      return (
        ReactDOM.createPortal(<span>PORTALCONTENT</span>, document.getElementById('d2'))
      );
    }
  }
  
window.reactRenderA = function(props, id) {
    ReactDOM.render(
      <A {...props} />,
      document.getElementById(id)
    );
};
  