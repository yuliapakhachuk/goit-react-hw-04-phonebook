import PropTypes from 'prop-types';
import { Contact, Button } from './ContactList.styled';

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul>
        {contacts.map(({ name, number, id }) => {
            return (
            <Contact key={id}>
                <span>
                {name}: {number}
                </span>
                <Button type="button" onClick={() => onDelete(id)}>
                Delete
                </Button>
            </Contact>
            );
        })}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
