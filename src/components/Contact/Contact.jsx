import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import styles from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => (
  <>
    <span className={styles.text}>{name}: {number}</span>
    <IconButton onClick={onDelete} aria-label="Delete contacts">
      <DeleteIcon width="30" height="30" fill="#fff" />
    </IconButton>
  </>
)

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Contact;