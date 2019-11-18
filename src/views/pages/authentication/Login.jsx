import React, {useEffect ,useState } from "react";
import { loginBack, iconDemo } from "../../../helper/constant";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import AuthActions from "../../../redux/auth/actions";
import enhancer from "./enhancer/LoginFormEnhancer";
import CustomToast from "../../../Components/notifications/CustomToast";
import { loginCall } from '../../../api'
import Button from "../../../Components/button/Button"

const { login } = AuthActions;

const Login = props => {
    
    const [bottomRight, setBottomRight] = useState(false);
    const [message , setMessage] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(props.authData.isLogin && props.authData.token) {
            props.history.push('/dashboard')
        }
    }, []);


    const handleLogin = e => {
        e.preventDefault();
        let { values, handleSubmit } = props;

        if (values.email !== "" && values.password !== "") {
            // console.log("Here is your form value", values);

            let params = {
                email : values.email,
                password : values.password
            }

            setLoading(true)
            loginCall(params).then(response => {
                console.log(response)
                if(response){
                    setLoading(false)
                    if (response.success === 1) {
                    const data = {
                        token: response.data.adminInfo.access_token,
                        id: response.data.adminInfo.admin_id,
                        name:response.data.adminInfo.name,
                        adminType : response.data.adminInfo.admin_type,
                    };
                    props.login(data);
                    props.history.push("/dashboard");
                    } else {
                    setBottomRight(true)
                    setTimeout(() => {
                        setBottomRight(false)
                    }, 3000);
                    setMessage(response.message)
                    }
                }
            })
        }
        handleSubmit();
    };

    const { values, handleChange, handleBlur, errors, touched, submitCount } = props;

    const loginContainer = {
        backgroundImage: `url(${loginBack})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        position: "fixed",
        overflow: "auto",
        top: 0,
        bottom: 0,
    };

    const Error = props => {
        const field1 = props.field;
        if ((errors[field1] && touched[field1]) || submitCount > 0) {
            return (
                <span className={props.class ? props.class : "error-msg"}>
                    {errors[field1]}
                </span>
            );
        } else {
            return <span />;
        }
    };

    return (
        <div className="container-fluid" style={loginContainer}>
            <div className="form-container">
                <div className="login-icon">
                    <img src={iconDemo} alt="icon" height="100px" />
                </div>
                <div className="login-title">Sign in to your account</div>
                <form className="pa-24" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control react-form-input"
                            id="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            placeholder="Email"
                        />
                        <Error field="email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control react-form-input"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Password"
                        />
                        <Error field="password" />
                    </div>

                    <div className="form-check text-center mtb-16">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            Remember me
                        </label>
                    </div>

                    <Button  
                        type="submit"
                        loading={loading}
                        disabled={loading}
                        className="btn form-button pos-relative" 
                        dataStyle="expand-right"
                    >
                        Login
                    </Button>
                    <div
                        className="text-center link-label"
                        onClick={() => props.history.push("/forgotPassword")}
                    >
                        Forgot Password ?
                    </div>
                </form>
                <CustomToast
                    heading={"Alert!"}
                    width={400}
                    show={bottomRight}
                    transition
                    position="bottom-right"
                    className="c-danger"
                    message={message}
                    onCloseCLick={() =>
                        setBottomRight(false)
                    }
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        authData: {
            token: state.auth.accessToken,
            isLogin: state.auth.isLogin
        }
    };
};

export default compose(
    withRouter,
    enhancer,
    connect(
        mapStateToProps,
        { login }
    )
)(Login);
