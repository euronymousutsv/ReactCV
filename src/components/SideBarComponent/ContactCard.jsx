const ContactCard = ({ phoneNumber, email }) => {
  return (
    <>
      <div>
        <h4>Contact</h4>
        <h6>{phoneNumber + " (Mobile)"}</h6>
        <h6>{email}</h6>
      </div>
    </>
  );
};

export default ContactCard;
