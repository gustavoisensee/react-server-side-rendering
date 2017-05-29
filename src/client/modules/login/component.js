import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const defaultProps = {
  name: ''
};

const propTypes = {
  name: PropTypes.string
};

const Login = () => (
  <div>
    <div>
      Login
    </div>
    <Link to="/">Back</Link>
  </div>
);

Login.defaultProps = defaultProps;
Login.propTypes = propTypes;

export default Login;
