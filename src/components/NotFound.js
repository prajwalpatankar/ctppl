import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {

    render () {
      return (
        <div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h1>404 - Not Found!</h1>
        <Link to="/">
          Go Home
        </Link>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      );
    }
}

export default NotFound;