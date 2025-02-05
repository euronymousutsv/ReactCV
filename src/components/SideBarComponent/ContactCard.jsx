const ContactCard = ({ phoneNumber, email }) => {
  return (
    <>
      <p>
        <h2>Contact</h2>
        <h4>{phoneNumber}</h4>
        <h4>{email}</h4>
      </p>
    </>
  );
};

export default ContactCard;
