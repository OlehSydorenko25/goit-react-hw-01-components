import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'
import TransactionHistoryList from './TransactionHistoryList'

const TransactionHistory = ({transaction}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className={styles.item}>Type</th>
                    <th className={styles.item}>Amount</th>
                    <th className={styles.item}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transaction.map(({ id, type, amount, currency }) => {
                    return (
                        <TransactionHistoryList  key={id}
                            id={id}
                            type={type}
                            amount={amount}
                            currency={currency}
                        />
                    )
                })}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    transaction: PropTypes.array.isRequired,
    // transaction: PropTypes.shape({
    //     id: PropTypes.string.isRequired
    // })
}
 
export default TransactionHistory;