const UserCard = ({userData})=>{

    // destructuring user data 
    const {firstName, lastName, age, gender, about, photoURL} = userData;


    return(
        <div>
            <div className="card bg-base-300 w-85 shadow-sm m-2 p-2">
                <figure>
                    <img
                    className="w-50 h-40 rounded-lg"
                    src={photoURL}
                    alt="profilePhoto" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstName + " " + lastName}</h2>
                    {age && gender && <p>{age + ", " + gender}</p>}
                    <p>{about}</p>

                    <div className="card-actions justify-end">
                    <button className="btn btn-success">Ignore</button>
                    <button className="btn btn-primary">Interested</button>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default UserCard;