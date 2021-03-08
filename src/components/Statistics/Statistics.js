import React from 'react';
import PropTypes from "prop-types";
import styles from './Statistics.module.css'
import StatisticsElement from './StatisticsList'



const Statistics = ({ stats, title }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            
            <ul className={styles.list}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatisticsElement
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
    stats: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    }
    ),
    title: PropTypes.string
}

export default Statistics;