// external 
import React, { useState } from 'react'
import {  Redirect } from 'react-router-dom';
// internal
import Search from '../components/search/Search';
import { AUTH_LOGIN } from 'shared/constants';
import Api from 'service/Api';
import { Header, CardItem } from 'ui';
// style
import './Users.scss'


function Users() {
    const isAuthenticate = localStorage.getItem("@authenticate");

    const [user, setUser] = useState(null);
    const [inputSearch, setInputSearch] = useState("")
    const [redirect, setRedirect] = useState(false);

    async function getUser() {
        try{
            const getUser = await Api.get(`/users/${inputSearch}`);
            console.log(getUser)
            setUser(getUser.data);
        } catch(e) {
            console.error(e);
            alert("Erro ou usuário não encontrado");
            setUser(null);
            setInputSearch("")
        }
    }

    function redirectRepository() {
        setRedirect(true);
    }
  
    return (
        <div>
            { isAuthenticate !== "true" && <Redirect to="/"/> }
            { redirect && <Redirect to={`/repositories/${user.login}`}/> }

            <div>
                <Header 
                    username={`[${AUTH_LOGIN}]`} 
                    title={'GitHub'} 
                    onClick={() => localStorage.clear()} 
                    link={'/'} 
                    labelButton={'Sign Out'} 
                />
            </div> 
            <div className="search-container">
                <Search 
                    onClick={() => getUser()}
                    onChange={(event) => setInputSearch(event.target.value)}
                    value={inputSearch}
                />
                <div className="users-results">
                    {
                        user && (
                            <CardItem 
                                img={user.avatar_url}
                                userName={user.name}
                                userDescription={user.bio}
                                onClick={() => redirectRepository()}
                            />
                        )
                    }
                </div>
            </div>
        </div>
           
    )
}

export default Users;