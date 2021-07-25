import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View, Image, Text,
    Platform, PermissionsAndroid
} from 'react-native';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux';
// import ActionTypes from '../Store/Constant/constant';
import LinearGradient from 'react-native-linear-gradient';
var db = firebase.firestore();


class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    getUserRole = async (user) => {

        let currentUser = user.uid
        var docRef = await db.collection("users").doc(currentUser);

        return await docRef.get().then(function (doc) {
            if (doc.exists) {
                console.log("Document datas:", doc.data());
                // role = doc.data().role
                return doc.data().role
                // dispatch({ type: ActionType.CURRENTUSER, payload: doc.data() })

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

    }

    _bootstrapAsync = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                var role;


                this.getUserRole(user).then((role) => {
                    console.log(role, 'response here***')
                    if ((Actions.currentScene == 'signup' && role == "Job")) {
                        Actions.CreateProfile()
                        console.log("ifff", role)

                    }

                    else if (Actions.currentScene === 'login' && role === "Job") {
                        Actions.profile()
                        // Actions.Footer()

                        console.log("elseifff")

                    }

                    else {
                        // Actions.profile()
                        Actions.Footer()

                        console.log("eeeef")

                    }
                })



                // console.log(Actions.currentScene, 'actionnnnnn');
                // console.log(role, 'role');
                // if ((Actions.currentScene == 'signup' && role == "Job")) {
                //     Actions.CreateProfile()
                //     console.log("ifff", role)

                // }



                // else if(Actions.currentScene === 'login'&&role==="Job"){
                //     Actions.profile()
                //     // Actions.Footer()

                //     console.log("elseifff")

                // }
                // // else if(Actions.currentScene === 'login'&&role!=="Job"){
                // //     // Actions.profile()
                // //     Actions.Footer()

                // //     console.log("elseifff")

                // // }

                // else{
                //     // Actions.profile()
                //     Actions.Footer()

                //     console.log("eeeef")

                // }
            } else {
                Actions.signup()
            }


            // if (user) {
            //     if (user && user !== null && user.uid) {
            //         AsyncStorage.setItem("currentUserId", user.uid)
            //         console.log(user, "USERFROMAUTH")
            //         firebase.database().ref('users/' + user.uid).once('value', (snapshot) => {
            //             let currentUser = snapshot.val();
            //             console.log(currentUser, 'currentuserAuth');
            //             this.props.userDisp(currentUser)
            //             if (Actions.currentScene === 'authloading') {
            //                 console.log('inside if')
            //                 Actions.login()
            //             }
            //             else {
            //                 Actions.contactList()
            //                 console.log('inside else')
            //                 fcmregisteration(user.uid);
            //             }
            //             // Actions.searchContact()
            //         });
            //     }
            // } else {
            //     console.log(Actions.currentScene, "SCENE")
            //     console.log("NO USER FOUND")
            //     if (Actions.currentScene !== 'signup' && Actions.currentScene !== 'login') {
            //         console.log("NO USER FOUND->IF")
            //         this.props.clearAllState();
            //         Actions.login()
            //     }
            //     else {

            //         console.log("NO USER FOUND->else")
            //     }
            // }

        })
    };



    render() {
        console.log(this.props.currentUser, 'currentUser123');
        return (
            <LinearGradient
                colors={['#0054BC', '#00D5EF']}
                locations={[0, 1]}
                end={{ x: 0.0, y: 1.0 }} start={{ x: 0.5, y: 0.25 }}
                style={styles.container}
            >

                <View >
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#fff', paddingVertical: 5 }}>
                        Seek Me
                     </Text>

                </View>
                <ActivityIndicator size={100} color="#fff" style={{ paddingBottom: 5 }} />
                <View><Text style={{ color: '#fff', fontSize: 18 }}>Loading...</Text></View>
                <StatusBar barStyle="default" />
            </LinearGradient>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // userDisp: (currentUser) => {
        //     dispatch({ type: ActionType.CURRENTUSER, payload: currentUser })
        // },
        // clearAllState: () => {
        //     dispatch({ type: ActionType.LOGOUT })
        // }
    }
}
let mapStateToProps = state => {
    // console.log(state, "REDSTATe")
    return {
        // signupLoader: state.root.signupLoader,
        // isLoader: state.root.isLoader,
        // submit: state.root.jobSubmitError,
        currentUser: state.root.currentUser,

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        width: 150,
        height: 153,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    }
})
