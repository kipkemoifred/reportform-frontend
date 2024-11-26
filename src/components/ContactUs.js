import React from "react";

function ContactUs() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" style={styles.input} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" style={styles.input} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" style={styles.textarea}></textarea>
        </label>
        <br />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  input: {
    display: "block",
    margin: "10px 0",
    padding: "8px",
    width: "100%",
  },
  textarea: {
    display: "block",
    margin: "10px 0",
    padding: "8px",
    width: "100%",
    height: "100px",
  },
  button: {
    padding: "10px 15px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ContactUs;
