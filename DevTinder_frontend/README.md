# DevTinder-web

- Created a Vite + React Project
    - React Command: npm create vite@latest devTinderWeb -- --template react(using react instead of vue)
    - npm install - installs all the dependencies
    - npm run dev

- Tailwind & Dazy UI for building the application
    - Tailwind Commnd : npm install tailwindcss @tailwindcss/vite
        - A vite.config.js file is created
            - Inside vite.config.js
            - Add - import tailwindcss from '@tailwindcss/vite'
            // https://vite.dev/config/
            export default defineConfig({
            plugins: [
                react(),
                tailwindcss() - this line is added
            ],})

        - Add @import "tailwindcss"; - index.css, #note- don't forget the semicolon

    - Design Library : Component Library - Compatible with tailwind
        - Use it as a Plug In
        - Command: npm i -D daisyui@latest
        - In index.css - @plugin "daisyui";

- Add NavBar Component to App.jsx

- Install react-router lib - npm install react-router
    - Using different approach for creating routes
    - Using <BrwoserRouter> <Routes> <Route>

- Created Footer - fixed bottom-0 (fixed in the bottom)


# Routing 
- <Outlet> will be replaced by the children routes Login or Profile
- Import Login and Profile where they are called (App.jsx)
- Body (<BrowserRouter>,<Routes><Router>)
    Login (<Router>)
    Profile (<Router>) 

# Login 
- Create a Login Page - For creating a Login Page - Create a Card
- Binding State Variable with UI component - Controlled Component Form
- Why we do this? React-Driven UI

# Axios
- Note: You can use fetch also
- npm install axios - for making api call
- For using axios - import axios from axios
- Always use try and catch block making an api call
- The nature of the api call should be same as route - post for post, get for get
- async & await - must 
- Token is sent back by the server - However, must use configuration for this


# Cors Error - Solution - DO THIS IN BACKEND - IN BACKEND
- A different port is not allowed to make a api call to a different port
- To solve this, install a package - npm install cors
- Use this cors as a middleware - app.use(cors({configuration}))


# Cookies - Issue
- Cookies not coming in the browser - Browser blocks cookies from cooking - blackList the port
- WhiteList Domain Name - for cookies
- Add configuration on cors (Backend) - Add frontend origin
- app.use(cors({
    origin:"http://localhost:5173", (Keep original origin)
    credentials:true,
}))
- On Frontend with axios use -  const res = await axios.post('http://localhost:7000/login',{
        emailId, 
        password
      }, {withCredentials:true})


# Installing @reduxjs/toolkit & react-redux 
- Create a folder - utils - file - appStore 
- Configure Store
- Create redux store, provide appStore using Provider(react-reducx)
- (import appStore from appStore) it to all the routes in App.jsx
- Create userSlice - using createSlice - initialState:null, (keep initial state as null),
- Returning: return only - action.paylaod, don't reassign
- Export actions from userSlice.actions, reducer from userSlice.reducer
- Import userReducer form userSlice 

# Dispatching and Reading (Subscribing to the Store)
- Dipatch an action from the handleClick() add user to redux store

# Reading the user - Subsrcribing to the store 
- Use useSelector() - hook to read from the store
- const user = useSelector((store)=>store.user) // user coming from- reducer
- if user is logged in, show profile section or not 
- {user && <div>entire profile code</div>}

# Create a constant file inside utils -
- const BASE_URL ='http://localhost:7000';
- Keep the base ('http://localhost:7000') of axio inside the constant file

# Using token for keeping user loggedIn 
- You must make request to -/profile/view - to get the user
- Next, call useEffect() - for calling the fetchUser() after Feed Component is loaded
- Token Not Valid - Navigate user back to ("/login")

# Use Link for Profile and Logo - redirect

# API call 
- Only make a api call if userData is not present
- Note: When you manually change the url an api call is made.
- However, if you do in the page using <Link to="/"> it won't make a full page reload
- So, if you change the url manually an api call is made and page reloads
- status - 401 - anauthorized

# Strict Mode
- In Strict mode 2 Api calls are made

# Logout 
- Make an api call to "/logout"
- After logging out - clear the redux store
- Dispatch an action - removeUser()

# Error Dynamic, Adding Error in Login Card
- For making error dynamic you have to use state variable 
- For making anything dyanmic use state variable

# Building Feed Page
 - Make a get request to "/feed" 
 - Create a feed slice 
 - Add in the redux store
 - Add response from the feed to redux store
 - Read the feed from the store 
 - call getFeed() inside useEffect()

 # Building UserCard Component 
 - Call UserCard Component inside Feed
 - To make this card use card component from daisy ui
 - Pass the props from Feed calling <UserCard>

 # EditProfile Component 
 - To Edit the Proile make an Edit Profile Component
 - Copy Login Form
 - Pass the Data to EditProfile Component from Profile 
 - In Profile get the data from the store
 - Prefill the data by getting the data from the store 

 ## Imp concept inside Edit Component
 - Only prefill the data if user is present
    # You can only see live changes if you pass the state variables
    - pass <UserCard userData={{firstName, lastName, age, gender, about, photoURL}}>
    - These all values are state variables, which makes changes dynamic and live 
    - Therefore, pass a new obj with state variable as values

 - Call <UserCard Component> to let user see how their card looks
 - Keep them side by side

# Saving Profile & Sending Notification
- Call /profile/edit route from the backend
- Add saving profile logic to Save Profile 
- While making a patch request, send the updated data 
- After sending the new data - dispatch an action to update redux store
- Note: Make sure that response is sending data back
- Clear erros after a vali data is entered 

## Adding a Toast for showing profile udpated successfully
- Initially, showToast is false
- Use a state variable for this
- Use {showToast && <div>} 
- Use setTimeout(()=>{ setShowToast(showToast)})
- Use z value for showing toast above

# Add two new components Connection && Request

# Connections Component 
- Define a function fetchConnection()
- Make an api call to "/users/connections"
- Get all the connections of the user
## You can either create state variable or redux slice for storing connections
- Going with redux slice 
- Create a new connectionSlice and export the reducer and actions
- Import into the appStore (redux store) - cruical step don't forget it
- Dispatch an action to store the connection inside the redux store
- Now, for reading the connection use useSelector()
- Add conditional statement for connections obj not existing
- Add conditinoal statement for connections length 0 
- For list of connnections (not using a component this time),
- We are using map & <div> to display the list of connections
- In backend - populate all other fields required in the front-end

# Requests Component
- All the initial steps are similar to Connections Component 
- Creating a slice, adding it to redux store
- Create a fetchRequest() function and use useEffect() function 
- Call useDispatch() useSelector() for adding & reading data from the redux store
- Add conditional statement when requests obj doesn't exist
- Add conditional statement when request length is zero.
- Make use of map & <div> for displaying list of requests
- Add a link of Requests to the Navbar

# Note: Always use optional chaining when you are fetching data from API
# Note: Add key in the <div> and the key should be id
