import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function User() {

    // Get username from the URL => /user/<username>
    const { username } = useParams();

    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const userResponse = await fetch(
                `https://api.github.com/users/${username}`
            );

            const repositoriesResponse = await fetch(
                `https://api.github.com/users/${username}/repos`
            );

            setUser(await userResponse.json());
            setRepos(await repositoriesResponse.json());
        };

        fetchData();
    }, [username]);

    if (!user) return (
        <div className='text-center mt-5'>
            <div className='spinner-border text-primary' role='status'></div>
            <p className='mt-2'>Loading user...</p>
        </div>
    );

    return (
        <div>
            <div className='card mb-4'>
                <div className='row g-0'>
                    <div className='col-md-3'>
                        <img
                            src={user.avatar_url}
                            className='img-fluid rounded-start h-100'
                            alt={user.login}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className='col-md-9'>
                        <div className='card-body'>
                            <h2 className='card-title'>{user.login}</h2>
                            <p className='card-text'>{user.bio || 'No bio available.'}</p>
                            <div className='d-flex gap-3 text-muted'>
                                <span>Followers: {user.followers}</span>
                                <span>Following: {user.following}</span>
                                <span>Public repos: {user.public_repos}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h4>Repositories</h4>

            <div className='list-group'>
                {
                    repos.map((repository) => (
                        <div
                            key={repository.id}
                            className='list-group-item d-flex justify-content-between align-items-center'
                        >
                            <span className='fw-semibold'>{repository.name}</span>
                            <span className='badge bg-secondary'>{repository.language || 'N/A'}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}