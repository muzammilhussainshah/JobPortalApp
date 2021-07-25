import React, { Component } from 'react';
import { Text, Icon, Button, CheckBox } from 'native-base';
import {
    StyleSheet, ScrollView, View, KeyboardAvoidingView,
    ActivityIndicator, Image, TextInput, TouchableOpacity, Dimensions
} from 'react-native';
import { connect } from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import { signUpAction, _signInFacebook, _signInGoogle } from "../Store/Actions/action";
import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux';
// import ErrorMessage from '../containers/errorMessage'
import Loader from "../components/loader";

import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import firebase from 'firebase';
// import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { LoginManager, LoginButton, AccessToken } from "react-native-fbsdk";
class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            companyName: '',
            cnfpassword: '',

            loader: false,
            errorSignupState: '',
            jobAlert: true,
            location: true,
            conditions: true,
            job: true

        }
    }

    componentWillMount() {
        var { height, width } = Dimensions.get('window');
        this.setState({
            screenHeight: height,
            screenWidth: width
        })
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps, "nextProps")
        this.setState({ loader: nextProps.signupLoader })
    }

    signUpFunc = () => {
        let state = this.state

        if (this.state.job === false && (state.companyName === '' ||
            state.email === '' || state.password === '' || state.cnfpassword === '')) {

            this.setState({ errorSignupState: 'All fields are required' })
        }


        else if (this.state.job === true && (state.email === '' || state.password === '' || state.cnfpassword === '')) {
            this.setState({ errorSignupState: 'All fields are required' })
        } else {
            console.log("workd")
            let credentials = {
                email: this.state.email,
                companyName: this.state.companyName,
                password: this.state.password,
                cnfpassword: this.state.cnfpassword,
                jobAlert: this.state.jobAlert,
                location: this.state.location,
                conditions: this.state.conditions,
                role: (this.state.job === true) ? ("Job") : ("Recruiters")

            }
            console.log(credentials, "Hjkshdjkashdjk")
            this.props.signupData(credentials)
            this.setState({
                email: '',
                password: '',
                companyName: '',
                cnfpassword: '',

                loader: true
            })
        }
    }


    // _signInFacebook = () => {
    //     LoginManager.logOut()
    //     LoginManager.logInWithReadPermissions(["public_profile", "email"]).then(
    //         (result) => {
    //             if (result.isCancelled) {
    //                 // alert("Login cancelled");
    //             } else {
    //                 AccessToken.getCurrentAccessToken().then(
    //                     accessTokenData => {
    //                         // console.log(accessTokenData, "accessTokenData");
    //                         // alert(JSON.stringify(accessTokenData))
    //                         const credential = firebase.auth.FacebookAuthProvider.credential(
    //                             accessTokenData.accessToken
    //                         );
    //                         // console.log(credential);
    //                         // alert(JSON.stringify(credential))              
    //                         firebase
    //                             .auth()
    //                             .signInWithCredential(credential)
    //                             .then((user) => {
    //                                 console.log("Sign In Success", user);


    //                                 let credentials = {
    //                                     email: user.email,
    //                                     jobAlert: this.state.jobAlert,
    //                                     location: this.state.location,
    //                                     conditions: this.state.conditions,
    //                                     role:(this.state.job===true)?("Job"):("Recruiters")

    //                                 }
    //                                 console.log(credentials, "Hjkshdjkashdjk")
    //                                 db.collection("users").add(
    //                                     credentials
    //                                  )
    //                                  .then(function(docRef) {
    //                                      console.log("Document written with ID: ", docRef.id);
    //                                  })
    //                                  .catch(function(error) {
    //                                      console.error("Error adding document: ", error);
    //                                  });

    //                                 // alert(JSON.stringify(user))
    //                             }).catch((err) => {
    //                                 // alert(JSON.stringify(err))
    //                             });
    //                     },
    //                     error => {
    //                         // alert(JSON.stringify(error))              
    //                         // console.log(error, "some error occurred");
    //                     }
    //                 );
    //             }
    //         },
    //         (error) => {
    //             // alert("Login fail with error: " + error);
    //         }
    //     ).catch((err) => {
    //         //  alert(JSON.stringify(err))
    //     });
    // };

    // _signInFacebook = () => {
    //     console.log(LoginManager,"LOGINM<ANAGEER")
    //     // LoginManager.logOut()
    //     LoginManager.logInWithReadPermissions(["public_profile"]).then(
    //         function (result) {
    //             if (result.isCancelled) {
    //                 console.log("Login cancelled");
    //             } else {
    //                 console.log(
    //                     "Login success with permissions: " +
    //                     result.grantedPermissions.toString()
    //                 );
    //                 AccessToken.getCurrentAccessToken().then(
    //                     (accessTokenInfo) => {
    //                         console.log(accessTokenInfo, "accessTokenInfo")
    //                         let credential = firebase.auth.FacebookAuthProvider.credential(
    //                             accessTokenInfo.accessToken
    //                         );
    //                         console.log(credential,"CredentialFor Login");
    //                         firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential(credential)
    //                         .then((user) => {
    //                             console.log(user + "successfully sign in")
    //                         })
    //                             .catch((err) => {
    //                                 console.log(err)
    //                                 alert(JSON.stringify(err))
    //                             })
    //                     },
    //                     (error)=>{
    //                         console.log(error)
    //                         alert(JSON.stringify(error))

    //                     }
    //                 ).catch((error)=>{
    //                     console.log(error)
    //                     alert(JSON.stringify(error))
    //                 })

    //             }
    //         },
    //         function (error) {
    //             console.log("Login fail with error: " + error);
    //         }
    //     );
    // }

    // _signInGoogle = () => {
    //     GoogleSignin.hasPlayServices().then(() => {
    //         console.log("HAS SERVICES")
    //     }).catch((err) => {
    //         console.log("Play service error", err.code, err.message);
    //     })

    //     GoogleSignin.configure({
    //         // webClientId: '575871021627-ii0bkplicp11l0bus2t5566khj9ccaa4.apps.googleusercontent.com'
    //     })

    //     GoogleSignin.signIn()
    //         .then(accessTokenData => {
    //             // alert(JSON.stringify(accessTokenData))
    //             console.log(accessTokenData, "signin++++++++++++");
    //             const credential = firebase.auth.GoogleAuthProvider.credential(
    //                 accessTokenData
    //             );
    //             // alert(JSON.stringify(credential))
    //             firebase
    //                 .auth()
    //                 .signInWithCredential(credential)
    //                 .then(function (user) {
    //                     // alert(JSON.stringify(user))

    //                     console.log("Sign In Success", user);
    //                 });
    //             GoogleSignin.signOut()
    //         })
    //         .catch(err => {
    //             console.log(err, "eeeeeeee")
    //             console.log(JSON.stringify(err), "eeeeerrrrr")

    //             // console.log("WRONG SIGNIN----------", err);
    //         });

    // };


    render() {


        return (
            <LinearGradient
                colors={['#0054BC', '#00D5EF']}
                locations={[0, 1]}
                end={{ x: 0.0, y: 1.0 }} start={{ x: 0.5, y: 0.25 }}
                style={styles.container}
            >

                {(this.props.isLoader === true) ? (
                    <View style={{ position: "absolute", zIndex: 1, left: "35%", top: "35%" }}>
                        <Loader />
                    </View>
                ) : (null)}
                {/* <View > */}
                <ScrollView showsVerticalScrollIndicator={false} style={{ width: "90%" }}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ marginTop: 30, paddingVertical: '10%' }}>
                            <Text style={{ fontSize: 25, color: '#FFF' }}>
                                {(this.state.job === true) ? ("JOB PORTAL APP") : ("RECRUITERS PORTAL APP")}
                            </Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', width: "100%", }}>
                        <View style={{ width: "85%", }}>


                            {
                                [["Company Name", "companyName"], ["Email", "email"], ["Password", "password"], ["Confirm Password", "cnfpassword"]].map((value, index) => {
                                    console.log(value, index, "value,index")
                                    return (
                                        (this.state.job === true && index === 0) ?
                                            (null) :
                                            (
                                                <TextInput
                                                secureTextEntry={this.state.job === true &&(index === 2||index === 3)}
                                                    placeholderTextColor='#fff'
                                                    value={this.state[value[1]]}
                                                    placeholder={value[0]} keyboardAppearance='default' autoCapitalize='none' returnKeyType='next' style={styles.textbox} autoCorrect={false}
                                                    onChangeText={companyName => {
                                                        this.setState({ [value[1]]: companyName }, () => {
                                                            console.log("con", this.state.companyName, this.state.email, this.state.password, this.state.cnfpassword)
                                                        })

                                                    }}
                                                />
                                            )

                                    )

                                })
                            }

                        </View>
                        <View style={{ flex: 1, paddingVertical: '2%', width: "85%", }}>
                            <View style={styles.checkBoxView}>
                                <CheckBox checked={this.state.jobAlert} color={'#0054BC'} style={styles.CheckBoxStyle} onPress={() => { this.setState({ jobAlert: !this.state.jobAlert }) }} />
                                <Text style={styles.checkBoxText}>{(this.state.job === true) ? ("Notify me of urgent job posts / alerts") : ("Notify me of matching candidate profiles")}</Text>
                            </View>
                            <View style={styles.checkBoxView}>
                                <CheckBox checked={this.state.location} color={'#0054BC'} style={styles.CheckBoxStyle} onPress={() => { this.setState({ location: !this.state.location }) }} />
                                <Text style={styles.checkBoxText}>{(this.state.job === true) ? ("Once signed in, track my location to get job \nfeeds near me") : ("Once signed in, track candidates \nautomatically")}</Text>
                            </View>
                            <View style={styles.checkBoxView}>
                                <CheckBox checked={this.state.conditions} color={'#0054BC'} style={styles.CheckBoxStyle} onPress={() => { this.setState({ conditions: !this.state.conditions }) }} />
                                <Text style={styles.checkBoxText}>Accept Terms & Conditions</Text>
                            </View>
                        </View>


                        {/* {this.state.loader ?
              <Button style={{ backgroundColor: '#F09302' }} block  ><ActivityIndicator size='small' color="white" /></Button>
              :
              <Button style={{ backgroundColor: '#F09302' }} onPress={() => this.signUpFunc()} block  ><Text> Sign Up </Text></Button>
 
            } */}
                        {this.state.loader ?

                            <Button block rounded style={{ backgroundColor: '#0054BC' }}>
                                <ActivityIndicator size='small' color="white" />
                            </Button>
                            // <TouchableOpacity>
                            //     <View style={{ backgroundColor: '#F09302', alignItems: 'center', justifyContent: 'center', width: '80%', height: 40, paddingVertical: 10 }}   >
                            //     </View>
                            // </TouchableOpacity>
                            :
                            <Button block rounded style={{ backgroundColor: '#0054BC' }}
                                onPress={() => this.signUpFunc()}>
                                <Text style={{ color: '#fff' }}> Signup </Text>
                            </Button>
                            // null
                        }
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 4 }}>
                            <Text style={{ color: "#fff" }}> Or Sign In With</Text>
                        </View>
                        <View style={{
                            flex: 1, flexDirection: "row", justifyContent: "space-around",
                            alignItems: "center", marginTop: 15
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props._signInFacebook(
                                        {
                                            // email: user.email,
                                            jobAlert: this.state.jobAlert,
                                            location: this.state.location,
                                            conditions: this.state.conditions,
                                            role: (this.state.job === true) ? ("Job") : ("Recruiters")
                                        }
                                    )
                                }}
                            >
                                <Image source={require('../Images/facebook.png')} style={styles.iconStyle} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    this.props._signInGoogle(


                                        {
                                            // email: user.email,
                                            jobAlert: this.state.jobAlert,
                                            location: this.state.location,
                                            conditions: this.state.conditions,
                                            role: (this.state.job === true) ? ("Job") : ("Recruiters")

                                        }


                                    )
                                }}

                            >
                                <Image source={require('../Images/Google+.png')} style={styles.iconStyleGoogle} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ marginTop: 8 }} onPress={() => {
                            Actions.login()
                        }}>
                            <Text style={{ fontSize: 15, color: '#fff', textDecorationLine: "underline" }}>
                                Already have an account?
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 8, marginBottom: 58 }} onPress={() => {
                            this.setState({
                                job: !this.state.job
                            })
                        }}>
                            <Text style={{ fontSize: 15, color: '#fff', textDecorationLine: "underline" }}>
                                {(this.state.job === true) ? ("Recruiters portal") : ("Job portal")}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                {/* </View> */}
            </LinearGradient>
        );
    }
    //End Class
}
let mapDispatchToProps = (dispatch) => {
    return {
        signupData: (credentials) => {
            dispatch(signUpAction(credentials))
        },
        _signInFacebook: (credentials) => {
            dispatch(_signInFacebook(credentials))
        },
        _signInGoogle: (credentials) => {
            dispatch(_signInGoogle(credentials))
        }
    }
};

let mapStateToProps = state => {
    // console.log(state, "REDSTATe")
    return {
        signupLoader: state.root.signupLoader,
        isLoader: state.root.isLoader,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        // backgroundColor: "red",
        alignItems: 'center',

    },
    textbox: {
        fontSize: 18,
        textAlign: 'left',
        width: '100%',
        marginBottom: 15,
        color: '#fff',
        // paddingHorizontal: 10,
        borderColor: '#fff',
        borderBottomWidth: 1,
        borderRadius: 5,
    },
    button: {
        backgroundColor: 'black',
        width: 320,
        height: 50,
        marginBottom: 10
    },
    CheckBoxStyle: {
        height: 18, width: 18, marginRight: 20,
    },
    checkBoxView: {
        flexDirection: 'row', alignItems: 'center', marginVertical: '1%', flex: 1
    },
    checkBoxText: {
        fontSize: 12, color: '#fff',
    },
    iconStyle: {
        height: 41, width: 41, resizeMode: "contain", marginRight: 15
    },
    iconStyleGoogle: {
        height: 41, width: 41, resizeMode: "contain", marginLeft: 15
    }
});
