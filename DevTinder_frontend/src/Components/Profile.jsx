import EditProfile from './EditProfile';
import { useSelector } from 'react-redux';

const Profile = () => {

  // Fetching user from Slice
  const user = useSelector((store)=>store?.user);

  // Not user don't render the Edit Profile Component
  return user && (
    <div>
      <EditProfile userData={user}/>
    </div>
  )
}

export default Profile
