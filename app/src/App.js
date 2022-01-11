import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

function App() {
    return (
		<Router>
			<Fragment>
				<Header />
				<main className="py-3">
					<Container>
						<Switch>
							<Route path='/' exact>
								<Home />
							</Route>
							<Route path='/product/:id'>
								<ProductPage />
							</Route>
						</Switch> 
					</Container>
				</main>
				<Footer />
			</Fragment>
		</Router>
  );
}

export default App;
