import React from 'react';
import PropTypes from "prop-types";

const Statistics = ({ statisticalData, title }) => {
    return (
        <section>
            {title && <h2>{title}</h2>}
            
            <ul>
                {statisticalData.map(({ id, label, percentage }) => {
                    return (
                        <li key={id}>
                            <span>{label}</span>
                            <span>{percentage}</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
}

export default Statistics;