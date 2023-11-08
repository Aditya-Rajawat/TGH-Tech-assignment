# Quote Generator App [Link](https://quote-generator-assignment.netlify.app/)

URL : https://quote-generator-assignment.netlify.app/

# Step 1

- *Install Vite with React*

`npm vite@latest`

# Step 2

- *Install node modules and dependencies*
- 
`npm install`

# Step 3

- *Install Tailwind CSS with vite*

`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`
  
# Step 4

- *Configure tailwind.config.js*
  
`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`

# Step 5

- *Install React loading spinner*
  
`npm i react-loader-spinner`

# Step 6

- *Run the app*

`npm run dev`

# Step 7

- *Development Build*

`npm run build`
