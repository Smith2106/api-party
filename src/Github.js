import React, { Component } from 'react';

import './Github.css';

class Github extends Component {
    state = {
        username: '',
    }

    handleChange = (e) => {
        this.setState({ username: e.target.value })
    }

    render() {
        return (
            <div className="Github">
                <img
                    src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
                    alt="GitHub"
                    className="logo"
                />

                <form>
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
            </div>
        );
    }
}

export default Github;