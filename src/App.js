import './share/fontawesome-free-6.0.0-beta3-web/css/all.min.css';
import './App.css';
import HeaderContainer from './share/layout/header/header';
import BodyContainer from './share/layout/body/body';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AuthenContainer from './container/AuthenBackGround/AuthenContainer';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
export const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ToastContainer/>
        <Switch>
          <Route path='/login'>
            <AuthenContainer />
          </Route>
          <Route path='*'>
            <HeaderContainer>
            </HeaderContainer>
            <BodyContainer />
          </Route>
        </Switch>
      </div>
    </QueryClientProvider>
  );
}

export default App;
