import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from './context/UserContext';


const UserProfile = () => {
    const { user, repos, userProfile, userReop } = useContext(UserContext)

    console.log(repos);
    const { userName } = useParams();
    useEffect(() => {
        userProfile(userName)
        userReop(userName)
    }, [])
    
  return (
    <div className="md:flex flex-initial">
        <div className="md:w-1/4 pr-1">
            <div className="media flex justify-center">
                <img className="rounded-full max-w-xs w-full" src={user.avatar_url} alt={user.name} />
            </div>
            <div className="user-info text-left mt-5">
                <h3 className="md:text-2xl text-lg font-bold">{user.name}</h3>
                <p>{user.login}</p>
                <ul>
                    <li>Followers: {user.followers}</li>
                    <li>Following: {user.following}</li>
                    <li>Public Gists: {user.public_gists}</li>
                    <li>Public Repos: {user.public_repos}</li>
                </ul>
                <div className="bio">
                    <p>{user.bio}</p>
                </div>
            </div>
        </div>
        <div className="md:w-3/4 pl-3 repos-wrapper">
            <h2 className="text-2xl font-bold mb-5" >Public repositories</h2>
            <div className="md:grid grid-cols-2 gap-3">
                {repos.map((repo, index) => (
                    <a target="_blank" rel="noreferrer" href={repo.clone_url} key={repo.id} className="w-full h-full border p-4 m-1 block bg-white border-black rounded-lg relative">
                        <strong>{repo.name}</strong>
                        <p>{repo.description}</p>
                        <p>{repo.language}</p>
                        <span className="border rounded-full border-black px-3 pb-1 absolute top-2 right-2">{repo.visibility}</span>
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default UserProfile