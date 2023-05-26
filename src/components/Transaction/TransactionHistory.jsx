import PropTypes from "prop-types";
import s from "./Transaction.module.css";

export const TransactionHistory = ({ items }) => {
  return (<table className={s.transactionHistory}>
  <thead>
    <tr className={s.line}>
      <th className={s.lineName}>Type</th>
      <th className={s.lineName}>Amount</th>
      <th className={s.lineName}>Currency</th>
    </tr>
  </thead>

      <tbody>
          {items.map(item => (
        <tr key={item.id}>
      <td className={s.lineInfo}>{item.type}</td>
      <td className={s.lineInfo}>{item.amount}</td>
      <td className={s.lineInfo}>{item.currency}</td>
    </tr>))}

        </tbody>
        
</table>)  
}

TransactionHistory.propTupes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionHistory;