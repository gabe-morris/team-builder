import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'
import Form from './Form'
const initialFormValues = {
  username: '',
  email: '',
  role: '',
}
function App() {
  const [members,setMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const update = (input,value) => {
    setFormValues({...formValues, [input]:value})

  }
  
  const submit = () => {
    const newMember ={
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }
    if (!newMember.username || !newMember.email || !newMember.role ) return
  }
  
  return (
    <div className="app-container">
     <h1>Members List</h1>
     <Form
     values={formValues}
     update={update}
     submit={submit}
     />
    </div>
  );
}

export default App;
