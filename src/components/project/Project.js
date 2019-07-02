import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './project.scss'

class Project extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        const image = this.props.img
        //style={{backgroundImage:`url(${image})`}}
       
        return (
                <div className={styles.project}>
                    <img src={image} className={styles.project__inner}  />
                </div>
            )
        }
}
export default Project

Project.propTypes = {
    img: PropTypes.string.isRequired,
};