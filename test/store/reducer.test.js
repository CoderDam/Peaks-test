/* Npm import */
import { should } from 'chai';


/* Local import */
import reducer from 'src/store/reducer';


/* Code */
// launch should
should();

// Tests
describe('reducer', () => {
  it('should be a function', () => {
    reducer.should.be.a('function');
  });

  describe('without args', () => {
    it('should return an object (the initial state)', () => {
      reducer().should.be.an('object');
    });
  });

  describe('with first arg (state)', () => {
    it('should return the state it\'s given', () => {
      const state1 = { test: true };
      reducer(state1).should.equal(state1);

      const state2 = ['test', 'test again'];
      reducer(state2).should.equal(state2);

      const state3 = 'test';
      reducer(state3).should.equal(state3);

      const state4 = 55;
      reducer(state4).should.equal(state4);
    });
  });

  describe('with 2 args (state & action)', () => {
    it('should return the state if action is unknown', () => {
      const state = { test: true };

      let action = 'anything-wrong';
      reducer(state, action).should.equal(state);

      action = ['anything-wrong'];
      reducer(state, action).should.equal(state);

      action = 55;
      reducer(state, action).should.equal(state);

      action = { type: 'anything-wrong' };
      reducer(state, action).should.equal(state);

      action = { type: 'get-data' };
      reducer(state, action).should.equal(state);

      action = { type: 'GET_DATA' };
      reducer(state, action).should.equal(state);

      action = { type: 'DATA-GET' };
      reducer(state, action).should.equal(state);
    });

    it('should return a new state if action is known', () => {
      const state = { test: true };

      let action = { type: 'data-get' };
      reducer(state, action).should.not.equal(state);

      action = { type: 'form-hide' };
      reducer(state, action).should.not.equal(state);
    });
  });
});
