import { Component } from 'react';
import shortid from 'shortid';
import styles from './ContactForm.module.css'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.onSubmit(name, number)

    this.setState({name: '', number: ''})
  }

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  render() {
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <label className={styles.text} htmlFor={this.nameInputId}>Name</label>
        <input
            id={this.nameInputId}
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
          />

        <label className={styles.text} htmlFor={this.numberInputId}>Number</label>
        <input
            id={this.numberInputId}
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleChange}
        />
        
        <button className={styles.button} type="submit">Add Contact</button>
      </form>
    )
  }
}

export default ContactForm;