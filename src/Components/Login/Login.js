
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/scripthubteam/">
                ScriptHub
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const imagen = Math.floor(Math.random() * (1 - 4) + 4)


const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${imagen === 1 ? 'https://i.imgur.com/8INJcrg.jpg' : imagen === 2 ? 'https://i.imgur.com/x3FKKfS.jpg' : imagen === 3 ? 'https://i.imgur.com/h45pApP.jpg' : ''})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: theme.palette.getContrastText(theme.palette.primary.main),
    },
    close: {
        padding: theme.spacing(0.5)
    },
    snack: {
        backgroundColor: theme.palette.primary.main
    }
}));

export default function Login() {
    const [irInicio, setIrInicio] = React.useState(false)
    const [body, setBody] = React.useState({})
    const [aviso, setAviso] = React.useState(false)
    const classes = useStyles();

    const handleCloseMensaje = () => {
        setAviso(false)
    };

    const ingresar = () => {
        setIrInicio(false)
        setAviso(true)
    }

    const onChange = (e) => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }

    if (irInicio === true) {
        return (<Redirect to='/inicio' />)
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={aviso}
                autoHideDuration={3000}
                onClose={handleCloseMensaje}
                style={{ opacity: '0.9', backgroundColor: 'primary' }}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<Typography id="message-id" variant='button' color='secondary'>Error al autenticar</Typography>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={handleCloseMensaje}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={10} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar} src='https://i.imgur.com/lEVEyiW.jpg' alt='...' />
                    <Typography component="h1" variant="h5" color='secondary'>
                        SH Share
          			</Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Nickname"
                        onChange={onChange}
                        name="nickname"
                        autoComplete="nickname"
                        color='secondary'
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        onChange={onChange}
                        color='secondary'
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => ingresar()}
                    >
                        Ingresar
            			</Button>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}