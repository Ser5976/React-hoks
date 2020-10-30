import React, {Fragment, useContext} from 'react'
import { Search } from '../componens/Search'
import { Card } from '../componens/Card'
import { GithubContext } from '../context/github/GithubContext'

export const Home = () => {
    const {loading,users} = useContext(GithubContext)
    //const cards = Array(15).fill('').map((_, i) => i)// _, бесполезный параметр
  //  console.log(cards) 
    return(
        <Fragment>
            <Search/>
            
            <div className = 'row'>
                { loading
                  ? <p className = 'text-center'>Идёт загрузка...</p>
                  : users.map(user => {
                      //console.log(user.avatar_url)
                      return(
                         <div className = 'col-sm-4 mb-4'key = {user.id}>
                             <Card user = {user}/>
                         </div>)
                        })}
            </div>
        </Fragment>
    )
}