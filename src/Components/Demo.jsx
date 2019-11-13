import React, {useEffect ,useState } from "react";
import { connect } from "react-redux";
import logo from '../logo.svg';
import { compose } from "redux";
const demo = () => {
    return(
        <div>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro mt-10">
                    To get started, edit<code>src/App.js</code> and save to reload.
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        authData: {
            token: state.auth.accessToken,
            isLogin: state.auth.isLogin
        }
    };
};

export default compose(
    connect(
        mapStateToProps
    )
)(demo);