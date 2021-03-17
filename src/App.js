import {
  Box,
  CircularProgress,
  createMuiTheme,
  CssBaseline,
  Divider,
  makeStyles,
  ThemeProvider,
  useTheme,
} from "@material-ui/core";
import { setUser } from "actions";
import { axiosClientAuth } from "api/axiosClient";
import usersApi from "api/usersApi";
import Navigation from "components/Navigation/Navigation";
import ChatView from "containers/ChatView";
import PrivateRoute from "hoc/PrivateRoute";
import { SnackbarProvider } from "notistack";
import AccountPage from "pages/AccountPage/AccountPage";
import ChatPage from "pages/ChatPage/ChatPage";
import ContactPage from "pages/ContactPage/ContactPage";
import GroupPage from "pages/GroupPage/GroupPage";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import SettingPage from "pages/SettingPage/SettingPage";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router";
import "simplebar/dist/simplebar.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateAreas: `
      "pages"
      "navigation"
    `,
    gridTemplateRows: "1fr auto",
    gridTemplateColumns: "1fr",
    height: "100vh",

    transition: "0.3s",
    position: "relative",

    [theme.breakpoints.up("md")]: {
      gridTemplateAreas: `
      "navigation pages chatContent"
    `,
      gridTemplateColumns: "auto 1fr 2fr",
    },
  },

  navigation: {
    gridArea: "navigation",
    alignSelf: "end",
    [theme.breakpoints.up("md")]: {
      alignSelf: "stretch",
    },
  },

  pages: {
    gridArea: "pages",
    height: "100%",
    overflow: "hidden",
    borderRight: `1px solid ${theme.palette.divider}`,
  },

  chatContent: {
    zIndex: 1000,
    gridArea: "chatContent",
    height: "100%",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,

    position: "fixed",
    width: "100%",
    transform: "translateX(0)",
    transition: ".3s",

    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),

    [theme.breakpoints.up("md")]: {
      position: "static",
    },
  },

  chatContentHide: {
    transform: "translateX(100%)",
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("md")]: {
      transform: "translateX(0)",
    },
  },
}));

function App(props) {
  const classes = useStyles();
  const history = useHistory();

  const theme =
    props.theme === "dark"
      ? createMuiTheme({
          palette: {
            type: "dark",
            primary: {
              main: "#7269ef",
            },
          },
        })
      : createMuiTheme({
          palette: {
            type: "light",
            background: {
              default: "#f7f7ff",
            },
            primary: {
              main: "#7269ef",
            },
          },
        });

  useEffect(() => {
    usersApi
      .getMe()
      .then((response) => {
        console.log(response);
        props.setUser(response.data);
      })
      .catch((err) => {
        props.setUser(null);
        localStorage.removeItem("token");
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <PrivateRoute>
              <div className={classes.root}>
                <div className={classes.navigation}>
                  <Navigation />
                </div>
                <div className={classes.pages}>
                  <Switch>
                    <Route path="/chats">
                      <ChatPage />
                    </Route>
                    <Route path="/contacts">
                      <ContactPage />
                    </Route>
                    <Route path="/groups">
                      <GroupPage />
                    </Route>
                    <Route path="/settings">
                      <SettingPage />
                    </Route>
                    <Route path="/account">
                      <AccountPage />
                    </Route>
                    <Route path="/">
                      <Redirect to="/chats" />
                    </Route>
                  </Switch>
                </div>
                <div
                  className={
                    classes.chatContent + " " + classes.chatContentHide
                  }
                >
                  <ChatView />
                </div>
              </div>
            </PrivateRoute>
          </Route>
        </Switch>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    user: state.user,
  };
};
export default connect(mapStateToProps, { setUser })(App);
