import React from 'react';
import PropTypes from "prop-types";
import styles from './Statistics.module.css'

const randomColor = () => ('#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase() )


const StatisticsList = ({label, percentage }) => {
    return (
        <li className={styles.element} style={{backgroundColor: randomColor()}}>
                            <span className={styles.text}>{label}</span>
                            <span className={styles.text}>{percentage}%</span>
                        </li>
    );
}

StatisticsList.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}
 
export default StatisticsList;