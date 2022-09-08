import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import Section from '../Section/Section';
import Filter from '../Filter/Filter';
import {AppStyled} from './App.styled';

export function App () {
  const testContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];

  const [contacts, setContacts] = useState(testContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const createNewContact = (currentValue) => {
    const alreadyAdded = contacts.some(
      obj => obj.name === currentValue.name);
    alreadyAdded ?
      alert(`${currentValue.name} is already in contacts`)
    :
      setContacts(prevState => [...prevState, {
          name: currentValue.name, 
          id: nanoid(),
          number: currentValue.number}]
      )
  }
  
  const deleteContact = (contactId) => {
    setContacts(prevState => (
      prevState.filter(contact => contact.id !== contactId)
    ))
  }

  const changeFilter = (e) => {
    setFilter(e.target.value);
  }

    const normalizedFilter = filter.toLowerCase();
    const filtredContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter))
      return (
        <AppStyled>
          <Section title="Phonebook">
            <Form onSubmit={createNewContact}/>
          </Section>
          <Section title="Contacts">
            <Filter
                value={filter}
                onChange={changeFilter}
            />
            <ContactList 
              contacts={filtredContacts}
              onDelete={deleteContact}
            />
          </Section>
        </AppStyled>
      );
};

