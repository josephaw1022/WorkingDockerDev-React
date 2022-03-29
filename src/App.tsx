import { useAppDispatch } from './redux/hooks';
import { Route, Routes, To, useNavigate, RouteObject } from 'react-router-dom';
import { PageProps } from './models/page';
import { reset } from './redux/entities/page/page.slice';
import { AboutPage } from './views/About';
import { HomePage } from './views/Home';


export default function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  /**
   * changePage - change the page of the application through changePage callback in every page's props 
   * @param pageRoute - route for the page 
   */
  const changePage = (pageRoute: To):void => {
    dispatch(reset())
    navigate(pageRoute)
  }

  /**
   * changeState - call a redux action in our application through the props 
   * @param reduxAction - an action defined in a redux slice or a redux thunk action 
   */
  const changeState = (reduxAction: CallableFunction): void => {
    dispatch(reduxAction());
  }

  /**
   * props passed down to every page 
   */
  const pageProps = {
    changePage: page => changePage(page),
    changeState: func => changeState(func)
  } as PageProps

  /**
   * all the routes for the application 
   */
  const routes: RouteObject[] = [
    {
      element: <HomePage {...pageProps} />,
      path: "/"
    },
    {
      element: <AboutPage {...pageProps} />,
      path: "/about"
    }
  ]


  return (
    <Routes>
      {routes.map((route, index) => <Route {...route} key={index} />)}
    </Routes>
  )

}

