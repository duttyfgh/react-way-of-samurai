import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import { compose } from 'redux';
import './App.css';
import FindUsersContanier from './components/findUsers/FindUsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/login';
import Music from './components/music/Music';
import Nav from './components/nav/Nav';
import News from './components/news/News';
import { initializeApp } from './redux/appReducer';
import { useParams } from "react-router-dom";
import Preloader from './common/preloader/preloader';
import preloader from './assets/images/preloader.svg'
import store from './redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContanier'))
const ProfileContainer = React.lazy(() => import('./components/profile/profileContainer'))
const Settings = React.lazy(() => import('./components/settings/Settings'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) return <Preloader preloader={preloader} />

    return (

      <div className='main'>
        <HeaderContainer />
        <Nav />
        <div className='mainContent'>
          <Suspense fallback={<Preloader preloader={preloader} />}>
            <Routes>
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/profile/:userId?' element={<ProfileContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/findUsers' element={<FindUsersContanier />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Suspense>
        </div>
      </div>

    );
  }
}

const mapStateToPorps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    const params = useParams()
    return (
      <Component {...props} router={{ params }} />
    )
  }
  return ComponentWithRouterProp
}

const AppContainer = compose(
  withRouter,
  connect(mapStateToPorps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default SamuraiJSApp