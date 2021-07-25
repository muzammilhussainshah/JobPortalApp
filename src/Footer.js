import React, { Component } from 'react';
import { Image, TouchableOpacity, View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import {
    StyleSheet,

} from 'react-native';
import Home from './TabBar/home/Home';
import JobPost from './TabBar/jobPost/JobPost';
import App from './TabBar/app/AppSetting';
import Profile from './TabBar/profile/Profile'

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



class AppContainer extends Component {
    constructor() {
        super()
        this.state = {
            rout: "Home",
           
        }
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "red" }}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <View style={{ flex: 6 }}>
                    {
                        (this.state.rout === "Home") ? (<Home />) : null
                    }

                     {
                        (this.state.rout === "JobPost") ? (<JobPost />) : null
                    }
                     {
                        (this.state.rout === "App") ? (<App />) : null
                    }
                     {
                        (this.state.rout === "Profile") ? (<Profile />) : null
                    }
                    
                </View>




                {/* //Footer// */}

                <View style={{ flex: 0.6, flexDirection: "row", backgroundColor: "#00274C" }}>

                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => { this.setState({ rout: "Home" }) }} >
                        <AntDesign  name="home" size={25} style={{ color: this.state.rout === "Home" ? "#00bfff" : "#fff" }}  />
                        <Text style={{ textAlign: "center", marginTop: 0, color: this.state.rout === "Home" ? "#00bfff" : "#fff", fontSize: 12 }}>Home</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => { this.setState({ rout: "JobPost" }) }}  >
                        <AntDesign name="form" size={25} style={{ color: this.state.rout === "JobPost" ? "#00bfff" : "#fff" }}/>
                        <Text style={{ textAlign: "center", marginTop: 0, color: this.state.rout === "JobPost" ? "#00bfff" : "#fff", fontSize: 12 }}>JobPost</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => { this.setState({ rout: "App" }) }}>
                        <AntDesign name="appstore1" size={25} style={{ color: this.state.rout === "App" ? "#00bfff" : "#fff" }}/>
                        <Text style={{ textAlign: "center", marginTop: 0, color: this.state.rout === "App" ? "#00bfff" : "#fff", fontSize: 12 }}>App</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => { this.setState({ rout: "Profile" }) }}>
                        <AntDesign name="profile" size={25} style={{ color: this.state.rout === "Profile" ? "#00bfff" : "#fff" }}/>
                        <Text style={{ textAlign: "center", marginTop: 0, color: this.state.rout === "Profile" ? "#00bfff" : "#fff", fontSize: 12 }}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }

    
}

                        {/* <IconFontAwesome name="users" size={20} style={{ color: this.state.rout === "Home" ? "#FFCB05" : "white" }} /> */}

                        {/* <IconFontAwesome name="search" size={20} style={{ color: this.state.rout === "Nearby" ? "#FFCB05" : "white", }} /> */}

                        {/* <IconFontAwesome name="camera" size={20} style={{ color: this.state.rout === "Sell" ? "#FFCB05" : "white", }} /> */}

                        {/* <IconFontAwesome name="newspaper-o" size={20} style={{ color: this.state.rout === "News" ? "#FFCB05" : "white", }} /> */}





    
function mapStateToProp(state) {
    return ({
    })
}
function mapDispatchToProp(dispatch) {
    return ({
    })
}

  export default connect(mapStateToProp, mapDispatchToProp)(AppContainer);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    imgSize: {
        width: "50%",
        height: 100,
    },
    imgView: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 200,
    },
    footerColor: {
        backgroundColor: "#cc3333"
    },
    marginText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 15
    },
    forgetYourPassword: {
        color: '#004D94',
        textAlign: 'center',
        margin: 15

    },
    btnTextMargin: {
        fontWeight: 'bold',
        marginTop: 8,

    }

});

// const styl = StyleSheet.create({
//     header: { backgroundColor: "#2196f3", flexDirection: 'row', borderBottomColor: '#cbcacf', borderBottomWidth: 1, shadowRadius: 1.2, shadowOpacity: 0.2, height: 50, shadowOffset: { width: 0, height: 2 }, elevation: 3 },
//     input: { backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', width: '80%', margin: 5, borderBottomColor: "#FFCB05", borderBottomWidth: 0.5 },
//     icons: { color: '#2196f3', marginRight: 10 },
//     form: { backgroundColor: '#F8F8F8', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 2, height: 4 }, shadowOpacity: 2, width: '80%', margin: 10, elevation: 7, borderRadius: 100, borderWidth: 1, borderColor: '#d6d7da' },
//     button: { width: '80%', backgroundColor: '#FFCB05', marginLeft: '10%', marginRight: '10%', marginTop: '5%', borderColor: '#FFCB05', borderRadius: 100, borderWidth: 1, shadowColor: '#d7f0ff', shadowOffset: { width: 2, height: 4 }, shadowOpacity: 2, elevation: 9, marginBottom: 30 },
//     error: { color: 'red', marginLeft: 30, marginRight: 30, width: '80%', fontWeight: "600" }
// })