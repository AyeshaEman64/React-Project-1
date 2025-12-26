// import { ThemeProvider } from "styled-components";
// import { BioProvider } from "./hooks/ContextApi";
// import { Home } from "./hooks/ContextApi/Home";
// import { Services } from "./hooks/ContextApi/Services";
import { ReducerComp } from "./hooks/UseReducer";
// import NetflixSeries from "./components/NetflixSeries";
// import { Todo } from "./projects/Todo/Todo";
// import { ContactForm } from "./useState/ContactForm";
// import { LoginForm } from "./useState/LoginForm";
// import { RegistrationFormReact } from "./useState/ResgistrationForm";


export const App = () => {

  return <>
  {/* <NetflixSeries />
  <Todo />
  <RegistrationFormReact/>
  <LoginForm /> */}
  {/* <ContactForm /> */}


  {/* <BioProvider >
    <Home/>
    <Home />
    <Services/>
  </BioProvider> */}


{/* <ThemeProvider>
  <DarkLight/>
</ThemeProvider> */}

<ReducerComp/>
  </>
  

};


