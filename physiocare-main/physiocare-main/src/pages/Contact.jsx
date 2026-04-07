import contactInfo from "../data/contactInfo";

const Contact = () => {
  return (
    <div>
      <h2>{contactInfo.clinicName}</h2>
      <p>{contactInfo.address}</p>

      <p>{contactInfo.phones[0]}</p>
      <p>{contactInfo.email}</p>

      <p>{contactInfo.workingHours.weekdays}</p>
    </div>
  );
};

export default Contact;
