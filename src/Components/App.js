import React from "react";
import "./App.css";
import Header from "./Header.js"
import AddContact from "./AddContact.js"
import ContactList from "./ContactList.js"


function App() {

  const contacts  =[
    {
      id : "1",
      name: "Jatin",
      email: "jatinc957@gmail.com"
    },
    {
      id : "2",
      name: "Aanchal",
      email: "aanchals957@gmail.com"
    }
  ] 
  return (
    <div className="ui container">
    <Header/>
    <AddContact/>
    <ContactList contacts={contacts}/> 
    </div>
  );
}

export default App;
