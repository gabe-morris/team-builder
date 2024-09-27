import React from 'react'

export default function Form(props) {
    const {update,values,submit} = props
const change = evt => {
    const {name,value} = evt.target
    update(name,value)
}
   const onSubmit = evt => {
       evt.preventDefault()
       submit()
   }

   return(
    <form className='form-container' onSubmit={onSubmit}>
        <div className='form-inputs'>
            <label htmlFor='username'> Username
                <input 
                id='username'
                type='text'
                name='username'
                onChange={change}
                value ={values.username}
                />
            </label>
            <label htmlFor='email'> Email
                <input
                    id='email'
                    type='email'
                    name='email'
                    onChange={change}
                    value={values.email}
                />
            </label>
            <label htmlFor='role'> Role
            <select id='role' name='role' onChange={change} value={values.role}>
            <option value=''>Choose a Role</option>
            <option value='Database Administrator'>Database Administrator</option>
            <option value='Software Engineer'>Software Engineer</option>
            <option value='Web Developer'>Web Developer</option>
            <option value='Data Scientist'>Data Science</option>
            <option value='Backend Engineer'>Backend Engineer</option>
            <option value='Frontend Engineer'>Frontend Engineer</option>
            </select>
            </label>
            <div className='submit'>
                <button>Submit</button>
            </div>
        </div>
    </form>

   )
}