import EditProfile from './EditProfile';
import { useSelector } from 'react-redux';

const Profile = () => {

  // Fetching user from Slice
  const user = useSelector((store)=>store.user);

  // if user is present then only pre-fill the data
  return user && (
    <div>
      <EditProfile userData={user}/>
    </div>
  )
}

export default Profile
