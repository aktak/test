import React from 'react';
import ReactDOM from 'react-dom';

import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import orange from 'material-ui/colors/orange';

import Site from './Site'

const theme = createMuiTheme({
  palette: {

    primary: orange,

    background: {
      default: '#EEEEEE'
    }
  },
  typography: {
    subheading: {
      fontSize: '15px'
    }
  }
});

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <span />
    );

  }

}

window.reactRenderApp = function(props, id) {

  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Site {...props} />
    </MuiThemeProvider>,
    document.getElementById(id)
  );

};
