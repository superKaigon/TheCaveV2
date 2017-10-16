import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectSalle, selectTable } from '../actions/index'
import styles from '../style/ongletSalle.css'



class OngletsSalle extends Component {
    render() {
        const {mySalles} = this.props
        return (
            <nav className='row'>

                <div className='col-md-12'>
                    {
                        mySalles.map((salle) => {
                            return (
                                <button className={styles.ongletSalle + 'col-lg-4 btn btn-secondary' }
                                    key={salle.id}
                                    onClick={() => this.selectSalle(salle)}
                                    disabled = {salle.full == true}>
                                    Salle {salle.id}
                                </button>
                            )
                        })
                    }

                </div>
            </nav>
        )
    }
    selectSalle (salle) {
        this.props.selectSalle(salle)
    }

}

const mapStateToProps = (state) => {
    return {
        mySalles: state.salles
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectSalle: selectSalle, selectTable:selectTable }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OngletsSalle)