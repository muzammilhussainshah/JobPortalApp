import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from './Store';
import Signup from "./components/signup";
import Login from "./components/login";
import AuthLoadingScreen from "./containers/authLoading";
import CreateProfile from "./components/CreateProfile";
import Profile from "./components/profile";
import Assessment from "./components/assessment";
import { Icon } from 'native-base';
import firebase from 'firebase';
import Footer from './Footer';
import JobDetails from './TabBar/home/JobDetails';
import JobAdd from './TabBar/home/JobAdd';

// const iconLogout = () => (
//     <Icon style={{ color: '#000', fontSize: 30 }}/>
// )
// const iconEvents = () => (
//     <FontAwesome style={{ color: '#000', fontSize: 30 }}>{Icons.listUl}</FontAwesome>
// )


export default class Routes extends Component {


    onBackPress = () => {
        Actions.pop();
        return true;
    };

    render() {

        return (

            <Provider store={store}>
                <Router
                    // backAndroidHandler={this.onBackPress}
                    tintColor='#fff' navigationBarStyle={{ backgroundColor: '#0054BC' }} titleStyle={{ color: '#FFF' }}>

                    <Scene key="root">
                    

                        <Scene key="AuthLoadingScreen" component={AuthLoadingScreen} hideNavBar={true} />
                        <Scene key="Footer" component={Footer} hideNavBar={true} />
                        <Scene key="profile" component={Profile} hideNavBar={true}
                        // title={"Profile"}  
                        //   onRight={this.onLogout}
                        //   rightTitle={"Logout"}
                        />
                        <Scene key="assessment" component={Assessment} hideNavBar={false} title={"Candidate Assessment Sheet"} />
                        <Scene key="signup" component={Signup} hideNavBar={true} />
                        <Scene key="login" component={Login} hideNavBar={true} />
                        <Scene key="CreateProfile" component={CreateProfile} hideNavBar={true} />
                        <Scene key="JobDetails" component={JobDetails} hideNavBar={true} />
                        <Scene key="JobAdd" component={JobAdd} hideNavBar={true} />
                        </Scene>


                </Router>
            </Provider>
        );
    }
}
