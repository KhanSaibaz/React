import React, { StrictMode } from 'react'  // Importing React and StrictMode from the react library
import { createRoot } from 'react-dom/client'  // Importing the createRoot function from the react-dom/client to create the root for rendering
import App from './App.jsx'  // Importing the App component from the local App.jsx file

function MyApp(){  // Creating a functional component MyApp
  return(
    <>
      <h1>Hii react</h1>  // Rendering a simple heading in the MyApp component
    </>
  )
}

const ReactElement = {  // Defining a custom React element manually
  type: 'a',  // Element type is an anchor tag
  props: {  // Props contain the attributes for the anchor tag
      href: 'https://google.com',  // Sets the href attribute to Google's link
      target: '_blank'  // Opens the link in a new tab
  },
  children: 'click here to visit'  // The text inside the anchor tag
}

const otherElement = React.createElement(  // Creating another element using React.createElement function
  'a',  // Element type is an anchor tag
  {href: 'https://google.com', target: '_blank'},  // Props for the anchor tag
  "Clicks"  // Children/text inside the anchor tag
)

createRoot(document.getElementById('root')).render(  // This is where the root of the React app is created and rendering starts
    <App />  // Rendering the App component in the root div
    /* <MyApp /> */  // You can uncomment this to render the MyApp component instead of App
  //  ReactElement  // Uncomment this to render the manually created ReactElement
  // MyApp()  // Uncomment to render the MyApp function
  // otherElement  // Uncomment this to render the otherElement created with React.createElement
)
