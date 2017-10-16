import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { selectUser } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { SubmissionError } from 'redux-form'
import Modal from './modal'



class Inscription extends Component {
    renderField = ({ input, label, type, meta: { touched, error } }) =>
        <div>
            <label>
                {label}
            </label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched &&
                    error &&
                    <span>
                        {error}
                    </span>}
            </div>
        </div>

    render() {
        const { error, handleSubmit, pristine, reset, submitting } = this.props
        return (
            <Modal>
                <div className='modal2'>
                    <form className='default_margin_top' onSubmit={handleSubmit(this.submit.bind(this))}>
                        <Field
                            name="firstname"
                            type="text"
                            component={this.renderField}
                            label="Firstname"
                        />
                        <Field
                            name="lastname"
                            type="text"
                            component={this.renderField}
                            label="Lastname"
                        />
                        <Field
                            name="email"
                            type="text"
                            component={this.renderField}
                            label="Email"
                        />
                        <Field
                            name="password"
                            type="text"
                            component={this.renderField}
                            label="Password"
                        />
                        {error &&
                            <strong>
                                {error}
                            </strong>}
                        <div>
                            <button type="submit" className='btn btn-secondary' disabled={submitting}>
                                Log In
                            </button>
                            <button type="button" className='btn btn-secondary' disabled={pristine || submitting} onClick={reset}>
                                Clear Values
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        )
    }
    submit = (values) => {
        // simulate server latency
        if (!values.firstname) {
            throw new SubmissionError({
                firstname: 'Ce champ doit être renseigner'
            })
        } else if (!values.lastname) {
            throw new SubmissionError({
                lastname: 'Ce champ doit être renseigner'
            })
        } else if (!values.email) {
            throw new SubmissionError({
                email: 'Ce champ doit être renseigner'
            })
        } else if (!values.password) {
            throw new SubmissionError({
                password: 'Ce champ doit être renseigner'
            })
        } else {
            const user = { firstname: values.firstname, lastname: values.lastname, email: values.email, password: values.password }
            this.props.selectUser(user)
            BrowserRouter.push('/')
        }

    }
}





const mapStateToProps = (state) => {
    return {
        users: state.users,
        myUser: state.activeUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectUser: selectUser }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'InscriptionForm' })(Inscription))