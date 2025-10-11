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

# status - 401 - anauthorized

# Strict Mode
- 2 Api calls

