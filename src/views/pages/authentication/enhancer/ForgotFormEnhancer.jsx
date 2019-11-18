import {
    withFormik
} from "formik";
import * as Yup from "yup";

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        email : Yup.string().required('Please Enter Any Email').email('Please enter valid email')
    }),
    mapPropsToValues: props => ({
        email: props.email
    }),
    handleSubmit: (values) => {},
    displayName: 'CustomValidationForm',
    enableReinitialize:true,
});

export default formikEnhancer;