// external
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
// internal
import CardRepo from '../components/cardRepo/CardRepo';
import Api from 'service/Api';
import { AUTH_LOGIN } from 'shared/constants';
import { Header } from 'ui';
// style
import './Repositories.scss'

function Repositories({match}) {
    const isAuthenticate = localStorage.getItem("@authenticate");
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        async function getRepos() {
            const repos = await Api.get(`/users/${match.params.user}/repos`);
            setRepos(repos.data)
        }
        getRepos();
    }, []);

    function openRepository(repo) {
        const data = `Name repository: ${repo.name}\nSSH url: ${repo.ssh_url}\nLanguage: ${repo.language}`;
        alert(data);
    }
    
    return (
        <div>
            { isAuthenticate !== "true" && <Redirect to="/"/> }
            <Header username={`[${AUTH_LOGIN}]`} title={'GitHub'} link={'/users'} labelButton={'Back'} />
            <div className="search-container">
                <h3>Repositories</h3>
                <div className="users-results">
                    {
                        repos.map((repo) => (
                            <CardRepo userName={repo.name} onClick={() => openRepository(repo)}/>
                        ))
                    }
                </div>
            </div>
        </div>
           
    )
}

export default Repositories;