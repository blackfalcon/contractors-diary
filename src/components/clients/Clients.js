import React, { Component } from 'react';
import firebase from 'firebase';
import ClientEntry from './ClientEntry';
import './clients.css';

const auth = firebase.auth();
const database = firebase.database();

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ClientEntries: {},
      entryInput: ''
    }
  }

  componentDidMount() {
    if(!auth.currentUser) {
      return this.props.history.push('/');
    }
    database.ref(`/users/${auth.currentUser.uid}/clients`).on('value', (snapshot) => {
      console.log(snapshot)
      this.setState(() => {
        return {
            ClientEntries: snapshot.val() || {}
        };
      });
    });
  }

  onInputChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    this.setState(() => {
      return {
        entryInput: newValue
      };
    })
  }

  addEntry = (e) => {
    e.preventDefault();
    database.ref(`/users/${auth.currentUser.uid}/clients`).push(this.state.entryInput)
    this.setState(() => {
      return {
        entryInput: ''
      };
    })
  }

  render() {
    return (
      <section className='clients__container'>
        <div className='clients__data-list'>
          {Object.keys(this.state.ClientEntries).length === 0 ?
            <p>You have no client data ...</p>
            :
            <p className='clients__header'>Current client data</p>
          }

          <ol>
            {Object.keys(this.state.ClientEntries).map((key) => {
              return <ClientEntry key={key} entry={this.state.ClientEntries[key]} />;
            })}
          </ol>
        </div>

        <div className='clients__data-entry'>
          <form onSubmit={this.addEntry}>
            <label htmlFor='AddEntry'>Add new client entry:</label>
            <input id='addEntry' type='text' onChange={this.onInputChange} value={this.state.entryInput} />
            <button className='btn' type="submit">Add Client</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Clients;
