import './App.css';
import SignIn from './views/authentication/signIn';
import SignUp from './views/authentication/signUp';
import Loader from './components/loader';
import CreateProfile from './views/client/createProfile';
import LocaliteBackpacker from './views/client/localite-backpacker';
import Club from './views/client/club';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ChatRoom from './views/client/chatRoom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/create-profile">
          <CreateProfile />
        </Route>
        <Route path="/loader">
          <Loader />
        </Route>
        <Route path="/localite-backpacker">
          <LocaliteBackpacker />
        </Route>
        <Route path="/:identity/:clubName/:chatRoomName">
          <ChatRoom />
        </Route>
        <Route path="/:identity/:clubName">
          <Club />
        </Route>
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
