import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'


function App() {
    return (
		<Router>
			<Fragment>
				<Header />
				<main className="py-3">
					<Container>
						<Switch>
							<Route path='/' exact><Home /></Route>

							<Route path='/login'><LoginPage /></Route>
							
							<Route path='/register'><RegisterPage /></Route>
							
							<Route path='/product/:id'><ProductPage /></Route>
							
							<Route path='/cart/:id?'><CartPage /></Route>
						</Switch> 
					</Container>
				</main>
				<Footer />
			</Fragment>
		</Router>
  );
}

export default App;
