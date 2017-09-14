/* Npm import */
import { should } from 'chai';


/* Local import */
import App from 'src/components/App';


/* Code */
// launch should
should();

// Tests
describe('App', () => {
  it('should be a function', () => {
    App.should.be.a('function');
  });
});
