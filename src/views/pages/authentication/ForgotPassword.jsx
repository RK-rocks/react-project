import React, {useState} from "react";
import { loginBack, ForgotIcon } from "helper/constant";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import enhancer from "./enhancer/ForgotFormEnhancer";
import { adminForgotPassword } from '../../../api'
import CustomToast from "../../../components/notifications/CustomToast";
import Button from "../../../components/button/Button"

const ForgotPassword = props => {
    const loginContainer = {
        backgroundImage: `url(${loginBack})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        position: "fixed",
        overflow: "auto",
        top: 0,
        bottom: 0
    };

    const [bottomRight, setBottomRight] = useState(false);
    const [message , setMessage] = useState("");
    const [loading, setLoading] = useState(false)

    const handleForgotPassword = e => {
        e.preventDefault();
        let { values, handleSubmit } = props;
        if (props.isValid) {
            setLoading(true)
            adminForgotPassword(values).then(response => {
                console.log(response)
                if(response){
                    setLoading(false)
                    if (response.success === 1) {
                        setBottomRight(true)
                        setMessage(response.message)
                        setTimeout(() => {
                            setBottomRight(false)
                        }, 3000);
                    } else {
                        console.log("here")
                        setBottomRight(true)
                        setMessage(response.message)
                        setTimeout(() => {
                            setBottomRight(false)
                        }, 3000);
                    }
                }
              })

            // const data = {
            //     token: "DEMOJWTTOKEN",
            // };
            // // using this method you can store token in redux
            // props.login(data);
            // props.history.push("/dashboard");
        }
        handleSubmit();
    };

    const {  errors, touched, handleBlur, handleChange, submitCount } = props;

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
                    <img src={ForgotIcon} alt="icon" height="100px" />
                </div>
                <div className="login-title">Forgot Password ?</div>
                <div className="text-center form-info-text plr-24 mt-16">
                    Provide your e-mail address to reset your password
                </div>
                <form className="pa-24" onSubmit={handleForgotPassword}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control react-form-input"
                            id="email"
                            aria-describedby="emailHelp"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Enter email"
                        />
                        <Error field="email" />
                    </div>
                    {/* <button type="submit" className="btn form-button">
                        Get OTP
                    </button> */}
                    <Button  
                        type="submit"
                        loading={loading}
                        disabled={loading}
                        className="btn form-button pos-relative" 
                        dataStyle="expand-right"
                    >
                        Get OTP
                    </Button>
                </form>
            </div>
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
    );
};

// const mapStateToProps = state => {
//     return {
//         authData: {
//             token: state.auth.accessToken,
//             isLogin: state.auth.isLogin
//         }
//     };
// };

export default compose(
    withRouter,
    enhancer,
    connect(
        null,
        null
    )
)(ForgotPassword);
