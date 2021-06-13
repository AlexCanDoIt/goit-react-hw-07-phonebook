import PropTypes from 'prop-types';
import styles from './Contact.module.css'

const Contact = ({ name, number, onDelete }) => (
  <>
    <span className={styles.text}>{name}: {number}</span>
    <button className={styles.button} type="button" onClick={onDelete}>Delete</button>
  </>
)

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Contact;