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

