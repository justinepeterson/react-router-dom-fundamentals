import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";
import Topics from "./pages/Topics";
import Topic from "./components/Topic";

import "./styles.css"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/profile" component={Profile} exact={true} />
                <Route path="/profile/:id" component={EditProfile} />
                <Route path="/login" component={Login} exact={true} />
                <Route path="/register" component={Register} />
                <Route path="/details" component={Details} />

                <Route path="/dashboard" component={Dashboard} exact={true} />
                <Route path="/topics" component={Topics} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

const Home = () => {
    return <h2>Home Page</h2>
}

const About = () => {
    return <h2>About Page</h2>
}

const Contact = () => {
    return <h1>Contact Page</h1>
}

const NotFound = () => {
    return <h2>Page not found</h2>
}

const Profile = (props) => {
    console.log(props)
    return <div>
        <h2>Profile</h2>
        <Link to="profile/10">Edit Profile</Link>
    </div>
}

const EditProfile = (props) => {
    console.log(props)
    return <h2>Edit Profile Page of the user with id {props.match.params.id}</h2>
}

const Dashboard = (props) => {
    return <h2>You are logged in welcome back</h2>
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)