import React, { Component } from 'react';
import { Text, Icon, Button, CheckBox } from 'native-base';
import {
    StyleSheet, ScrollView, View, KeyboardAvoidingView,
    ActivityIndicator, Image, TextInput, TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import { signInAction,loaderOnOf } from "../Store/Actions/action";
import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux';
// import ErrorMessage from '../containers/errorMessage'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loader: false,
            errorSignupState: '',
            jobAlert: true,
            location: true,
            job: true,

            conditions: true

        }
    }

    signInFunc = () => {
        let state = this.state
        if (state.email === '' || state.password === '') {
            this.setState({ errorSignupState: 'All fields are required' })
        } else {
            this.props.loaderOnOf()
            let credentials = {
                email: this.state.email,
                password: this.state.password,
                role:  (this.state.job === true) ? ("Job"):("Recruiters") 


            }
            console.log(credentials, "Hjkshdjkashdjk")
            this.props.signInData(credentials)
            this.setState({
                email: '',
                password: '',
                // loader: true
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps, "NEXTPROPS")
        this.setState({ loader: nextProps.signupLoader })
    }


    render() {

        return (
            <LinearGradient
                colors={['#0054BC', '#00D5EF']}
                locations={[0, 1]}
                end={{ x: 0.0, y: 1.0 }} start={{ x: 0.5, y: 0.25 }}
                style={styles.container}
            >
                {/* <View > */}
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ marginTop: '30%', paddingVertical: '5%' }}>
                            <Text style={{ fontSize: 25, color: '#FFF' }}>
                                {(this.state.job === true) ? ("JOB PORTAL APP") : ("RECRUITERS PORTAL APP")}
                            </Text>
                        </View>
                        <View style={{ paddingVertical: '5%' }}>
                            <Text style={{ fontSize: 25, color: '#FFF' }}>
                                Login
                            </Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', paddingHorizontal: '10%' }}>
                        <TextInput
                            placeholderTextColor='#fff'
                            value={this.state.email}
                            placeholder='Email' keyboardAppearance='default' autoCapitalize='none' returnKeyType='next' style={styles.textbox} autoCorrect={false}
                            onChangeText={email => {
                                this.setState({ email })

                            }}
                        />
                        <TextInput
                            placeholderTextColor='#fff'
                            value={this.state.password}
                            placeholder='Password' secureTextEntry keyboardAppearance='default' autoCapitalize='none' returnKeyType='next' style={styles.textbox} autoCorrect={false}
                            onChangeText={password => {
                                this.setState({ password })

                            }}
                        />
                        {this.props.isLoader ?

                            <Button block rounded style={{ backgroundColor: '#0054BC' }}>
                                <ActivityIndicator size='small' color="white" />
                            </Button>
                            :
                            <Button block rounded style={{ backgroundColor: '#0054BC' }}
                                onPress={() => this.signInFunc()}>
                                <Text style={{ color: '#fff' }}> Login </Text>
                            </Button>
                            // null
                        }

                        {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 4 }}>
                            <Text style={{ color: "#fff" }}> Or Sign In With</Text>
                        </View>
                        <View style={{
                            flex: 1, flexDirection: "row", justifyContent: "space-around",
                            alignItems: "center", marginTop: 15
                        }}>
                            <TouchableOpacity>
                                <Image source={require('../Images/facebook.png')} style={styles.iconStyle} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this._signInGoogle}

                            >
                                <Image source={require('../Images/Google+.png')} style={styles.iconStyleGoogle} />
                            </TouchableOpacity>
                        </View> */}
                        <TouchableOpacity style={{ marginTop: 8 }} onPress={() => {
                            Actions.signup()
                        }}>
                            <Text style={{ fontSize: 15, color: '#fff', textDecorationLine: "underline" }}>
                                Not registered yet ?
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 8 }} onPress={() => {
                            this.setState({
                                job: !this.state.job
                            })
                        }}>
                            <Text style={{ fontSize: 15, color: '#fff', textDecorationLine: "underline" }}>
                                {(this.state.job === true) ? ("Recruiters portal.") : ("Job portal")}
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
        signInData: (credentials) => {
            dispatch(signInAction(credentials))
        },
        loaderOnOf: () => {
            dispatch(loaderOnOf())
        }

    }
};

let mapStateToProps = state => {
    console.log(state, "REDSTATe")
    return {
        signinLoader: state.root.signinLoader,
        isLoader: state.root.isLoader,

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    textbox: {
        fontSize: 18,
        textAlign: 'left',
        width: '100%',
        marginBottom: 15,
        color: '#fff',
        paddingHorizontal: '3%',
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
