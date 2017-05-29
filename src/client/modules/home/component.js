import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const defaultProps = {
  name: ''
};

const propTypes = {
  name: PropTypes.string
};

const Home = () => (
  <div>
    <div>
      Home
    </div>
    <Link to="/login">Login</Link>
  </div>
);

Home.defaultProps = defaultProps;
Home.propTypes = propTypes;

export default Home;
