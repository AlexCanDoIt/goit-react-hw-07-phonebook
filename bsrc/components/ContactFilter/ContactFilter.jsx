import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css'

const ContactFilter = ({ value, onChange }) => (
  <label className={styles.text}>
    Find contacts by name
    <input className={styles.input} type="text" value={value} onChange={onChange} />
  </label>
);

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ContactFilter;