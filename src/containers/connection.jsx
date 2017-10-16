import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { selectUser } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { SubmissionError } from 'redux-form'
import styles from '../style/modal.css'


class Connection extends Component {
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
            <div className={styles.modal1}>
                <form className='default_margin_top' onSubmit={handleSubmit(this.submit.bind(this))}>
                    <Field
                        name="firstname"
                        type="text"
                        component={this.renderField}
                        label="Firstname"
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
                    <div><Link to='inscription'><button type="button" className="btn btn-primary">Inscription</button></Link></div>
                </form>
            </div>
        )
    }
    submit = (values) => {
        // simulate server latency
        const user = this.props.users.filter((user) => {
            if (user.firstname === values.firstname && user.password === values.password) {
                this.props.selectUser(user)
                this.props.history.push('/')
            }
        })
        if (!user[0]) {
            throw new SubmissionError({
                firstname: 'Wrong firstname',
                password: 'or wrong password',
                _error: 'Login Fail'
            })
        }



    }


}


const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectUser: selectUser }, dispatch)
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'ConnectionForm' })(Connection)))