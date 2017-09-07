/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */


/* Code */
class App extends React.Component {
  /* PROPS */
  static propTypes = {
    getData: PropTypes.func.isRequired,
    pupils: PropTypes.object,
    loading: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    pupils: {},
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
        {!this.props.loading &&
          <ul>
            {this.props.pupils.allIds.map(pupilId => (
              <li key={pupilId}>
                <span>{this.props.pupils.byId[pupilId].id} : </span>
                <span>{this.props.pupils.byId[pupilId].name}</span>
              </li>
            ))}
          </ul>
        }
      </main>
    );
  }
}


/* Export */
export default App;
