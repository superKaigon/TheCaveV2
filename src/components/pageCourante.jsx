import React, { Component } from 'react';
import Salle from '../containers/salle';


class PageCourante extends Component {

  render() {

    return (
      <div  className = 'pageCourante animated fadeInUp'>
        {this.props.children}
      </div>
    )

  }
}

export default (PageCourante)
