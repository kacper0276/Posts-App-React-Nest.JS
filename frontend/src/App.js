import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import MainContext from "./context/MainContext";
import { initialState, reducer } from "./reducer";
import Navigation from "./Layout/UI/Navigation/Navigation";
import ChangeThemeButton from "./Layout/UI/ChangeThemeButton/ChangeThemeButton";
import ShowMenuMobileButton from "./Layout/UI/ShowMenuMobileButton/ShowMenuMobileButton";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Notes from "./pages/Notes/Notes";
import AuthenticatedRoute from "./hok/AuthenticatedRoute";
import AddNote from "./pages/AddNote/AddNote";

// Exported default variables
export const api_url = `http://localhost:3002/api`;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const header = (
    <Header>
      <Navigation />
      <ChangeThemeButton />
      <ShowMenuMobileButton />
    </Header>
  );

  const content = (
    <Routes>
      <Route path="/" exact element={<MainPage />} />
      <Route path="/zaloguj" exact element={<LoginPage />} />
      <Route path="/zarejestruj" exact element={<RegisterPage />} />
      <Route
        path="/notatki"
        exact
        element={
          <AuthenticatedRoute>
            <Notes />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/dodajnotatki"
        exact
        element={
          <AuthenticatedRoute>
            <AddNote />
          </AuthenticatedRoute>
        }
      />
    </Routes>
  );

  const footer = <Footer />;

  return (
    <MainContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      <Router>
        <Layout header={header} main={content} footer={footer} />
      </Router>
    </MainContext.Provider>
  );
}

export default App;
