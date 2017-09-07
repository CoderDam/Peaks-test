/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */
import Pupils from 'src/containers/Pupils';


/* Code */
class App extends React.Component {
  /* PROPS */
  static propTypes = {
    getData: PropTypes.func.isRequired,
  }

  /* LIFECYCLES */
  componentWillMount() {
    this.props.getData();
  }

  /* RENDER */
  render() {
    return (
      <main id="app">
        Tous en classe !
        <Pupils />
      </main>
    );
  }
}


/* Export */
export default App;
