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
            <label htmlFor='email'>Email
                <input
                    id='email'
                    type='email'
                    name='email'
                    value={values.email}
                />
            </label>
            <label htmlFor='role'>Role
            <select id='role' name='role' onChange={change} value={values.role}>
            <option value=''>Choose a Role</option>
            <option value='data-admin'>Database Administrator</option>
            <option value='engi'>Software Engineer</option>
            <option value='web'>Web Development</option>
            <option value='science'>Data Science</option>
            <option value='backend'>Backend Developer</option>
            <option value='frontend'>Frontend Developer</option>
            </select>
            </label>
            <div className='submit'>
                <button>Submit</button>
            </div>
        </div>
    </form>

   )
}