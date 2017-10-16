import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTable } from '../actions/index'
import styles from '../style/listeTables.css'

class LocationList extends Component {

    render() {
        const { salle } = this.props
        return (
            <ul className='TableList animated fadeInRight '>
                {<div>
                    <div className={styles.left}>
                        {
                            this.props.salle.tables.map((table) => {
                                if (table.id % 2 !== 0) {
                                    return (
                                        <li key={table.name} className={styles.listeTable}>
                                            <button
                                                className='btn btn-secondary'
                                                onClick={() => this.selectTable(table, salle)}
                                                disabled={table.occuped === true || this.props.myTable != null}>
                                                {table.name}
                                                <img className={styles.imgTable} alt="Table" src={salle.image} />
                                            </button>
                                            <button
                                                className='btn btn-secondary'
                                                onClick={() => this.unselectTable(table, salle)}
                                                disabled={table.occuped === false}>
                                                Quitter la table
                                        </button>
                                        </li>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className={styles.right}>
                        {
                            this.props.salle.tables.map((table) => {
                                if (table.id % 2 === 0) {
                                    return (
                                        <li key={table.name} className={styles.listeTable}>
                                            <button
                                                className='btn btn-secondary'
                                                onClick={() => this.selectTable(table, salle)}
                                                disabled={table.occuped === true || this.props.myTable != null}>
                                                {table.name}
                                                <img className={styles.imgTable} alt="Table" src={salle.image} />
                                            </button>
                                            <button
                                                className='btn btn-secondary'
                                                onClick={() => this.unselectTable(table, salle)}
                                                disabled={table.occuped === false}>
                                                Quitter la table
                                        </button>
                                        </li>
                                    )
                                }
                            })
                        }
                    </div>
                </div>

                }
            </ul>
        )
    }




    selectTable(table, salle) {
        this.props.salle.tables[table.id - 1].occuped = true
        this.props.selectTable(table, salle)
    }
    unselectTable(table, salle) {
        this.props.salle.tables[table.id - 1].occuped = false
        this.props.selectTable(null, salle)
    }
}

const mapStateToProps = (state) => {
    return {
        mySalles: state.salles,
        salle: state.activeSalle,
        myTable: state.activeTable
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectTable: selectTable }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(LocationList)

