import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Github.css';
import GithubUser from './GithubUser';

class Github extends Component {
    state = {
        username: '',
    }

    handleChange = (e) => {
        this.setState({ username: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push(`/github/${this.state.username}`);
    }

    render() {
        return (
            <div className="Github">
                <img
                    src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
                    alt="GitHub"
                    className="logo"
                />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            required
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">
                            Look up GitHub User
                        </button>
                    </div>
                </form>
                <Route 
                    path="/github/:username" 
                    component={GithubUser} />
            </div>
        );
    }
}

export default Github;