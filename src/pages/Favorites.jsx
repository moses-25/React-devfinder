import { useFavorites } from '../context/useFavorites';

export default function Favorites() {
    const { favorites } = useFavorites();

    return (
        <div>
            <h3>Favorites</h3>

            {
                favorites.length === 0 ? (
                    <div className='alert alert-info'>
                        No favorites yet. Search for users and add them!
                    </div>
                ) : (
                    <div className='list-group'>
                        {
                            favorites.map((user) => (
                                <div key={user.id} className='list-group-item d-flex align-items-center gap-3'>
                                    <img
                                        src={user.avatar_url}
                                        alt={user.login}
                                        className='rounded-circle'
                                        width='40'
                                        height='40'
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <span className='fw-semibold'>{user.login}</span>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}