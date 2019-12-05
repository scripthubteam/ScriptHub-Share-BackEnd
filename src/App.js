import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theming from './Components/Layout/Tema';

const loading = () => {
	return (
		<Box position="absolute" top="50%" left="50%">
			<CircularProgress />
		</Box>
	);
}

function App() {
	const tema = theming.defaultTheme;

	const Login = React.lazy(() => import('./Components/Login/Login'));
	const Layout = React.lazy(() => import('./Components/Layout/Layout'));

	return (
		<MuiThemeProvider theme={tema}>
			<HashRouter>
				<React.Suspense fallback={loading()}>
					<Switch>
						<Route exact path='/login' name='Login' render={props => <Login {...props} />} />
						<Route path='/' name='Inicio' render={props => <Layout {...props} />} />
					</Switch>
				</React.Suspense>
			</HashRouter>
		</MuiThemeProvider>
	);
}
export default App;
