import ActionType from '../Constant/constant';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { LoginManager, LoginButton, AccessToken } from "react-native-fbsdk";
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

var config = {
    apiKey: "AIzaSyDVxnMRv3pH4CkCK5OM7NH0GMwmoTON6bU",
    authDomain: "jobportalapp-539f8.firebaseapp.com",
    databaseURL: "https://jobportalapp-539f8.firebaseio.com",
    projectId: "jobportalapp-539f8",
    storageBucket: "jobportalapp-539f8.appspot.com",
    messagingSenderId: "575871021627"
};
firebase.initializeApp(config);
require('firebase/firestore')
var db = firebase.firestore();
export function signUpAction(user) {
    return dispatch => {
        dispatch({ type: ActionType.LOADER })

        console.log(user, 'action')
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                console.log(createdUser, "createdUser", createdUser.user.uid)
                delete user.password;
                delete user.cnfpassword;
                user.uid = createdUser.user.uid;
                db.collection("users").doc(user.uid).set(user)
                    .then(function (docRef) {
                        console.log(docRef,"rocccc")
                        //    dispatch({ type: ActionType.CURRENTUSER, payload: snapshot.val() })

                        // console.log("Document written with ID: ", docRef.id);
                    })
                    .catch(function (error) {
                        console.error("Error adding document: ", error);
                    });
                // console.log('signed up successfully', createdUser.uid);
                // delete user.password;
                // user.uid = createdUser.uid;
                // firebase.database().ref('users/' + createdUser.uid + '/').set(user)
                //     .then(() => {
                //         // firebase.database().ref('users/' + createdUser.uid).on('value', function (snapshot) {
                //         //     console.log(snapshot.val(), "currentUserSignUP")
                //         //     dispatch({ type: ActionType.CURRENTUSER, payload: snapshot.val() })
                //         //     if (Actions.currentScene !== 'contactList') {
                //         //         Actions.contactList()
                //         //     }
                //         // });

                //     })


            }).catch((error) => {
                alert(error)

                dispatch({ type: ActionType.SIGNUPLOADER, payload: false })

            })
        dispatch({ type: ActionType.LOADER })

    }
}

export function _signInFacebook(userData) {
    return dispatch => {
        dispatch({ type: ActionType.LOADER })

        console.log(userData, 'action')
        LoginManager.logOut()
        LoginManager.logInWithReadPermissions(["public_profile", "email"]).then(
            (result) => {
                if (result.isCancelled) {
                    // alert("Login cancelled");
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        accessTokenData => {
                            // console.log(accessTokenData, "accessTokenData");
                            // alert(JSON.stringify(accessTokenData))
                            const credential = firebase.auth.FacebookAuthProvider.credential(
                                accessTokenData.accessToken
                            );
                            // console.log(credential);
                            // alert(JSON.stringify(credential))              
                            firebase
                                .auth()
                                .signInWithCredential(credential)
                                .then((user) => {
                                    console.log("Sign In Succsssess", user, userData);
                                    userData.email = user.email
                                    userData.uid = user.uid
                                    console.log("Sign In Succsssess", user, userData, user.uid);
                                    db.collection("users").doc(user.uid).set(userData)
                                        .then(function (docRef) {
                                            // console.log("Document written with ID: ", docRef.id);
                                        })
                                        .catch(function (error) {
                                            console.error("Error adding document: ", error);
                                        });
                                    // alert(JSON.stringify(user))
                                }).catch((err) => {
                                    // alert(JSON.stringify(err))
                                });
                        },
                        error => {
                            // alert(JSON.stringify(error))              
                            // console.log(error, "some error occurred");
                        }
                    );
                }
            },
            (error) => {
                // alert("Login fail with error: " + error);
            }
        ).catch((err) => {
            //  alert(JSON.stringify(err))
        });
        dispatch({ type: ActionType.LOADER })

    }
}

export function _signInGoogle(userData) {
    return dispatch => {
        dispatch({ type: ActionType.LOADER })

        console.log("dablu pachis", userData)

        GoogleSignin.hasPlayServices().then(() => {
            console.log("HAS SERVICES")
        }).catch((err) => {
            console.log("Play service error", err.code, err.message);
        })

        GoogleSignin.configure({
            webClientId: '575871021627-ii0bkplicp11l0bus2t5566khj9ccaa4.apps.googleusercontent.com'
        });

        GoogleSignin.signIn()
            .then(accessTokenData => {
                // alert(JSON.stringify(accessTokenData))
                console.log(accessTokenData, "signin++++++++++++");
                const credential = firebase.auth.GoogleAuthProvider.credential(
                    accessTokenData
                );
                // alert(JSON.stringify(credential))
                firebase
                    .auth()
                    .signInWithCredential(credential)
                    .then(function (user) {
                        // alert(JSON.stringify(user))
                        console.log("Sign In Succsssess", user, userData);
                        userData.email = user.email
                        userData.uid = user.uid
                        console.log("Sign In Succsssess", user, userData);
                        db.collection("users").doc(user.uid).set(userData)
                            .then(function (docRef) {
                                // console.log("Document written with ID: ", docRef.id);
                            })
                            .catch(function (error) {
                                console.error("Error adding document: ", error);
                            });
                    });
                GoogleSignin.signOut()
            })
            .catch(err => {
                console.log("WRONG SIGNIN----------", err, JSON.stringify(err));
            });

        dispatch({ type: ActionType.LOADER })

    }
}

export function signIn(user) {
    console.log(user, "userrrr")
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {

                var docRef = db.collection("users").doc("SF");

                docRef.get().then(function (doc) {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }).catch(function (error) {
                    console.log("Error getting document:", error);
                });

                // firebase.database().ref('users/' + createdUser.uid).on('value', function (snapshot) {
                //     console.log(snapshot.val(), "currentUserSignUP  signin")
                //     var userData = snapshot.val();
                //     fcmregisteration(userData.uid);

                //     dispatch({ type: ActionType.CURRENTUSER, payload: snapshot.val() })
                //     if (Actions.currentScene !== 'contactList') {
                //         Actions.contactList()
                //     }

                // });
                console.log(createdUser, "user")
                dispatch({ type: ActionType.LOADER })

            }).catch((error) => {
                dispatch({ type: ActionType.LOADER })

                alert(error)
                console.log(error)
                // dispatch({ type: ActionType.SIGNINLOADER, payload: false })

            })

    }
}

export function signInAction(user) {
    console.log(user, "userrrr")
    return dispatch => {


        let portalMacth = false
        db.collection("users").where("email", "==", user.email)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log(doc.id, " => ", doc.data());
                    if (doc.data().role === user.role) {
                        portalMacth = true
                        dispatch(signIn(user));

                    }
                    else {
                        alert("this user is not availble for this portal")
                        dispatch({ type: ActionType.LOADER })

                    }
                });
            })
            .catch(function (error) {
                dispatch(signIn(user));

                dispatch({ type: ActionType.LOADER })

                portalMacth = true
                console.log("Error getting documents: ", error);
            });
        // console.log(docRef,"docrefffff")
        // docRef.get().then(function (doc) {
        //     if (doc.exists) {
        //         console.log("Document data:", doc.data());
        //         dispatch({ type: ActionType.CURRENTUSER, payload: doc.data() })

        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // }).catch(function (error) {
        //     console.log("Error getting document:", error);
        // });



    }
}

export function getUsers() {
    return dispatch => {
        console.log("welcomeeee")
        let currentUser = firebase.auth().currentUser.uid
        var docRef = db.collection("users").doc(currentUser);

        docRef.get().then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                dispatch({ type: ActionType.CURRENTUSER, payload: doc.data() })

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });


    }
}
export function loaderOnOf() {
    return dispatch => {
        dispatch({ type: ActionType.LOADER })

    }
}

export function assessmentSave(assessment, profileData) {
    return dispatch => {
        let currentUser = firebase.auth().currentUser.uid
        assessment.uid = currentUser
        profileData.uid = currentUser
        console.log(currentUser, "assesment", assessment, profileData)
        // for assesment

        db.collection("assesment").doc(currentUser).set(assessment)
            .then((docRef) => {

                db.collection("profile").doc(currentUser).set(profileData)
                    .then((docRef) => {
                        Actions.profile()

                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });

            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

        dispatch({ type: ActionType.LOADER })
        // for profile



    }
}


export function jobData(jobData) {
    return (dispatch) => {

        db.collection("jobData").add({
            jobData,
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef);
                dispatch({ type: 'SUBMIT_DATA', payload: 'Your Job Submit' });
                Actions.Footer();
            })
            .catch(function (error) {
                dispatch({ type: 'SUBMIT_DATA', payload: 'Something Went Wrong' });

            });
        dispatch({ type: ActionType.LOADER })


    }
}


export function getJobData() {
    // console.log('data Gate');
    return (dispatch) => {
        // console.log('data');
        let jobArry = []
        db.collection("jobData").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data(), "arry");
                jobArry.push(doc.data());
                console.log(jobArry);

            });
            dispatch({ type: "GET_JOBDATA", payload: jobArry })


            // .catch(function (error) {
            //     console.log(error, 'error')
            // })

        });
    }
}

// export function searchDis() {
//     console.log('data Gate');
//     return (dispatch) => {
//         console.log('data Gate');
//         let bloodData = []
//         firebase.firestore().collection("bloodDonate").get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 console.log(doc.data(), "index");
//                 bloodData.push(doc.data())


//             });
//             console.log(bloodData, 'Updatedeeeeeeeeeee');
//             dispatch({ type: "GET-BLOOD", payload: bloodData })


//         });
//         // console.log(bloodData, 'Updated');
//     }
// }


