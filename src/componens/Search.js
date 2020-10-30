import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/alert/AlertContext'
import { GithubContext } from '../context/github/GithubContext'

export const Search = () => {
   const [value,setValue] = useState('')
   const alert = useContext(AlertContext)
   const github = useContext(GithubContext)
   const onSubmit = (event) => {
       if(event.key !== 'Enter'){
           return
       }
       github.clearUsers()
       if(value.trim()){
           alert.hide()
           github.search(value.trim())
       }else{
           alert.show('Введите данные пользователя')
       }
      // console.log(github.users)
       // можно ит так
       /* if(event.key === 'Enter'){ 
          if(value.trim()){
              console.log(value)
          }else{
              show('Введите данные пользователя!')
          }
        } */
      
    }

    return(
        <div  className = 'form-group'>
           <input 
              type = 'text' 
              className = 'form-control'
              placeholder = 'Введите ник пользователя...' 
              onKeyPress = {onSubmit}
              value = {value}
              onChange = {event => {setValue(event.target.value)}}
              />
        </div>
    )
}