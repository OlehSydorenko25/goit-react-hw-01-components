import React from 'react';
import PropTypes from "prop-types";
import styles from './Statistics.module.css'
import StatisticsList from './StatisticsList'



const Statistics = ({ statisticalData, title }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            
            <ul className={styles.list}>
                {statisticalData.map(({ id, label, percentage }) => {
                    return (
                        <StatisticsList
                            key={id}
                            label={label}
                            percentage={percentage}
                        />
                    )
                })}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    statisticalData: PropTypes.array.isRequired,
    title: PropTypes.string
}

export default Statistics;