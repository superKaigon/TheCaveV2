import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, Link } from 'react-router-dom';
import { selectUser, selectSalle, selectTable } from '../actions/index'
import styles from '../style/hello.css'

class InfoCompte extends Component {

    render() {
        const { user } = this.props

        if (!user) {
            return (
                <div>
                  <Link to='connection'><button type="button" className="btn btn-secondary">Connexion</button></Link>
                    <Link to='inscription'><button type="button" className="btn btn-secondary">Inscription</button></Link>
                </div>
            )
        }
        return (
            <div className = {styles.hello}>

                Bonjour {user.firstname}
               <button type="button" className="btn btn-secondary" onClick={() => this.resetActive()}>Déconnexion</button>

            </div>
        )
    }
    resetActive = () => {
        this.props.selectUser(null)
        this.props.selectSalle(null)
        this.props.selectTable(null)
        this.props.history.push('/')
    }

}


const mapStateToProps = (state) => {
    return {
        user: state.activeUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectUser: selectUser, selectSalle: selectSalle, selectTable: selectTable }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InfoCompte))
