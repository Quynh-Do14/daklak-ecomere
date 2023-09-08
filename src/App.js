import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';
import DetailTour from './components/Tour/DetailTour';
import ViewPost from './components/Post/ViewPost';
import ListTour from './components/Tour/ListTour';
import ListFestival from './components/Festival/ListFestival';
import Login from './components/Auth/Login';
import CheckoutBookingTour from './components/Checkout/CheckoutBookingTour';

function App() {
  const showRouter = (router) => {
    var result = '';
    if (router.length > 0) {
      result = router.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />)
      })
    }
    return (
      <Switch>{result}</Switch>
    )
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/"><HomePage /> </Route>
          <Route exact path="/Festival"><ListFestival /> </Route>
          <Route exact path="/Tour"><ListTour /> </Route>
          <Route exact path="/DetailTour"><DetailTour /> </Route>
          <Route exact path="/CheckoutBookingTour"><CheckoutBookingTour /> </Route>

          <Route exact path="/ViewPost"><ViewPost /> </Route>

          <Route exact path="/Login"><Login /> </Route>
        </Switch>
        <Footer />
      </BrowserRouter>

      {/* <Header />
      <Footer /> */}
      {/* <Router>

        <Header />
        <div className="outer">
          <div className="inner">
            {showRouter(
              [
                {
                  path: '/',
                  exact: true,
                  main: () => <HomePage />
                },

                {
                  path: "/DetailProduct",
                  exact: false,
                  main: () => <DetailTour />
                },
              ]
            )}
          </div>
        </div>
        <Footer />
      </Router> */}
    </div>
  );
}

export default App;
