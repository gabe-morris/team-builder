
import './App.css';
import React, {useState} from 'react'
import Form from './Form'
import Member from './Member'
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
    const mem = newMember
    setMembers([mem,...members])
    setFormValues(initialFormValues)
    
  }
  
  return (
    <div className="app-container">
     <h1>Members List</h1>
     <Form
     values={formValues}
     update={update}
     submit={submit}
     />

     {members.map(member => {
       return (
         <Member key={member.id} info={member}/>
       )
     })}
    </div>

  );
}

export default App;
