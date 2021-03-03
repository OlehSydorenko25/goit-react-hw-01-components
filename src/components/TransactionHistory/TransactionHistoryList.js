import React from 'react';
import styles from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

const TransactionHistoryList = ({ type, amount, currency }) => {
    return (
        <tr className={styles.string}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
}

TransactionHistoryList.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}
 
 
export default TransactionHistoryList;