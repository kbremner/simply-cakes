import React, { Component } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

const addIcon = require('./icons/ic_add_white_24px.svg');
const backIcon = require('./icons/ic_navigate_before_white_24px.svg');

interface NavBarProps {
    location: { 
        pathname: string;
    };
}

class NavBar extends Component<NavBarProps> {
    render() {
        const { location } = this.props;
        return (
            <div className="navBar">
                <div className="appName">
                    {location.pathname !== '/'
                        ? <Link to="/">
                            <img src={backIcon} />
                        </Link>
                        : null
                    }
                    <span>{process.env.REACT_APP_NAME}</span>
                </div>
                {location.pathname === '/'
                    ? <div>
                        <Link to="/add">
                            <img src={addIcon} />
                        </Link>
                    </div>
                    : null
                }
            </div>
        );
    }
}

export default NavBar;
