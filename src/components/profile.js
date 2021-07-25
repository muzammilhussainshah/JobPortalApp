import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View, Image, Text,
    Platform, PermissionsAndroid,TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
// import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux';
// import ActionTypes from '../Store/Constant/constant';
import LinearGradient from 'react-native-linear-gradient';


class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    onLogout=()=>{
        firebase.auth().signOut()
    }

    render() {
        return (
            <LinearGradient
                colors={['#0054BC', '#00D5EF']}
                locations={[0, 1]}
                end={{ x: 0.0, y: 1.0 }} start={{ x: 0.5, y: 0.25 }}
                style={styles.container}
            >
                <View style={{ flex:1,justifyContent: "space-between", marginVertical: '2%', flexDirection: 'row' }}>
                   <View style={{flex:2,marginLeft:'3%'}}>
                    <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}> Profile </Text>
                   </View>
                   <View style={{flex:0.5}}>
                    <TouchableOpacity onPress={this.onLogout}><Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}> Logout </Text></TouchableOpacity>
                   </View>
                </View>
                <View style={{flex:6}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
                        Will be developed in next milestone
                     </Text>

                </View>
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
export default connect(null, mapDispatchToProps)(Profile)

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
