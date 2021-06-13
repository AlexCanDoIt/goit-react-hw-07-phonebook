import PropTypes from 'prop-types';
import styles from './Section.module.css'

const Section = ({ title, children }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Section;