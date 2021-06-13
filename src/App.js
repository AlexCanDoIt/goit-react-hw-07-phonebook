/* Modules */
import { Component } from 'react';
import { connect } from 'react-redux';

/* Components */
import Section from './components/Section';
import ContactEditor from './components/ContactEditor';
import ContactFilter from './components/ContactFilter';
import ContactList from './components/ContactList';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';
import { contactsOperations, contactsSelectors } from './redux/contacts';

/* Styles */

class App extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Section title={'Contacts'}>
          <ContactFilter />
          <IconButton onClick={this.toggleModal} aria-label="Add contacts">
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton>
          <ContactList />
          {this.props.isLoadingContacts && <h4>Updating data...</h4>}
        </Section>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ContactEditor onSave={this.toggleModal} />
          </Modal>
        )}
      </>
    );
  }
}

const mapStapeToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStapeToProps, mapDispatchToProps)(App);
