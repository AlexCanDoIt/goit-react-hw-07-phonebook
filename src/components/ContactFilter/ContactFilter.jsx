import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts'
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
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default  connect(mapStateToProps, mapDispatchToProps)(ContactFilter);