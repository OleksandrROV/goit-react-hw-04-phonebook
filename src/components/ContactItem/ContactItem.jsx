import PropTypes from 'prop-types';
import { Delete } from './Contactitem.styled';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <p>{name} :</p>
      <p>{number}</p>
      <Delete onClick={onDeleteContact}>Delete</Delete>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
