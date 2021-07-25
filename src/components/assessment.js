import React, { Component } from 'react';
import { Text, Icon, Button, CheckBox } from 'native-base';
import {
    StyleSheet, ScrollView, View, KeyboardAvoidingView,
    ActivityIndicator, Image, TextInput, TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";
import LinearGradient from 'react-native-linear-gradient';
import { assessmentSave ,loaderOnOf} from "../Store/Actions/action";
import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux';
// import ErrorMessage from '../containers/errorMessage'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Loader from "../components/loader";

var question1 = [
    { label: 'Agree', value: 0 },
    { label: 'Disagree', value: 1 },
    { label: 'Strongly Agree', value: 2 },
    { label: 'Strongly Disagree', value: 3 }
];
var question2 = [
    { label: 'Agree', value: 0 },
    { label: 'Disagree', value: 1 },
    { label: 'Strongly Agree', value: 2 },
    { label: 'Strongly Disagree', value: 3 }
];
var question3 = [
    { label: 'Agree', value: 0 },
    { label: 'Disagree', value: 1 },
    { label: 'Strongly Agree', value: 2 },
    { label: 'Strongly Disagree', value: 3 }
];
var question4 = [
    { label: 'Agree', value: 0 },
    { label: 'Disagree', value: 1 },
    { label: 'Strongly Agree', value: 2 },
    { label: 'Strongly Disagree', value: 3 }
];
var question5 = [
    { label: 'Agree', value: 0 },
    { label: 'Disagree', value: 1 },
    { label: 'Strongly Agree', value: 2 },
    { label: 'Strongly Disagree', value: 3 }
];
var question6 = [
    { label: '10', value: 0 },
    { label: '30', value: 1 },
    { label: '41', value: 2 }
];
var question7 = [
    { label: '25', value: 0 },
    { label: '40', value: 1 },
    { label: '18', value: 2 }
];
var question8 = [
    { label: '7', value: 0 },
    { label: '57', value: 1 },
    { label: '63', value: 2 }
];

class Assessment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loader: false,
            errorSignupState: '',
            jobAlert: true,
            location: true,
            conditions: true,
            answer1: "Agree",
            answer2: "Agree",
            answer3: "Agree",
            answer4: "Agree",
            answer5: "Agree",
            answer6: 10,
            answer7: 25,
            answer8: 7,
        }
    }

    onSubmit = () => {
        this.props.loaderOnOf()
        assessment = {
            iWorkWell: this.state.answer1,
            imAConfident: this.state.answer2,
            iGetDepressed: this.state.answer3,
            peoplesFeelings: this.state.answer4,
            iSetRealistic: this.state.answer5,
            "40x7-?=270": this.state.answer6,
            "?+114=154": this.state.answer7,
            "9x?=63": this.state.answer8,
        }
        console.log(assessment, "Assessment", this.props.profileData)
        this.props.assessmentSave(assessment,this.props.profileData)
        // Actions.profile()
    }


    render() {
        // console.log("prooooo",this.props.profileData)
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
                <ScrollView>
                    <View style={{ marginHorizontal: '3%' }}>
                        <View style={{ alignItems: 'center', marginVertical: '2%', backgroundColor: '#fff' }}>
                            <Text style={styles.questionHeadsText}> Choose the correct answer </Text>
                        </View>
                        <View style={styles.questionView}>
                            <Text style={styles.questionText}>1.    I work well with people & in a team </Text>
                            <View style={styles.radioFormView}>
                                <RadioForm
                                    buttonColor={'#fff'}
                                    buttonSize={10}
                                    buttonOuterSize={20}
                                    radio_props={question1}
                                    selectedButtonColor={"#000"}
                                    onPress={(value) => { this.setState({ answer1: question1[value].label }) }}
                                    labelStyle={{ fontSize: 16, color: '#fff' }}
                                />
                            </View>
                        </View>
                        <View style={styles.questionView}>
                            <Text style={styles.questionText}>2.    Im a confident person</Text>
                            <View style={styles.radioFormView}>
                                <RadioForm
                                    buttonColor={'#fff'}
                                    buttonSize={10}
                                    buttonOuterSize={20}
                                    radio_props={question2}
                                    onPress={(value) => { this.setState({ answer2: question2[value].label }) }}
                                    labelStyle={{ fontSize: 16, color: '#fff' }}
                                    selectedButtonColor={"#000"}
                                />
                            </View>
                        </View>
                        <View style={styles.questionView}>
                            <Text style={styles.questionText}>3.    I get depressed when I make mistakes at work</Text>
                            <View style={styles.radioFormView}>
                                <RadioForm
                                    buttonColor={'#fff'}
                                    buttonSize={10}
                                    buttonOuterSize={20}
                                    radio_props={question3}
                                    onPress={(value) => { this.setState({ answer3: question3[value].label }) }}
                                    labelStyle={{ fontSize: 16, color: '#fff' }}
                                    selectedButtonColor={"#000"}
                                />
                            </View>
                        </View>
                        <View style={styles.questionView}>
                            <Text style={styles.questionText}>4.    People's feelings comes before mine</Text>
                            <View style={styles.radioFormView}>
                                <RadioForm
                                    buttonColor={'#fff'}
                                    buttonSize={10}
                                    buttonOuterSize={20}
                                    radio_props={question4}
                                    onPress={(value) => { this.setState({ answer4: question4[value].label }) }}
                                    labelStyle={{ fontSize: 16, color: '#fff' }}
                                    selectedButtonColor={"#000"}
                                />
                            </View>
                        </View>
                        <View style={styles.questionView}>
                            <Text style={styles.questionText}>5.    I set realistic goals on a month to month basis</Text>
                            <View style={styles.radioFormView}>
                                <RadioForm
                                    buttonColor={'#fff'}
                                    buttonSize={10}
                                    buttonOuterSize={20}
                                    radio_props={question5}
                                    onPress={(value) => { this.setState({ answer5: question5[value].label }) }}
                                    labelStyle={{ fontSize: 16, color: '#fff' }}
                                    selectedButtonColor={"#000"}
                                />
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginVertical: '2%', backgroundColor: '#fff' }}>
                            <Text style={styles.questionHeadsText}> Select the correct answer </Text>
                        </View>
                        <View style={styles.questionView}>
                            <Text style={styles.questionText}>1.    40x7-? = 270</Text>
                            <View style={styles.radioFormView}>
                                <RadioForm
                                    buttonColor={'#fff'}
                                    buttonSize={10}
                                    buttonOuterSize={20}
                                    radio_props={question6}
                                    onPress={(value) => { this.setState({ answer6: question6[value].label }) }}
                                    labelStyle={{ fontSize: 16, color: '#fff' }}
                                    selectedButtonColor={"#000"}
                                />
                            </View>
                        </View>
                        <View style={styles.questionView}>
                            <Text style={styles.questionText}>2.    ?+114=154</Text>
                            <View style={styles.radioFormView}>
                                <RadioForm
                                    buttonColor={'#fff'}
                                    buttonSize={10}
                                    buttonOuterSize={20}
                                    radio_props={question7}
                                    onPress={(value) => { this.setState({ answer7: question7[value].label }) }}
                                    labelStyle={{ fontSize: 16, color: '#fff' }}
                                    selectedButtonColor={"#000"}
                                />
                            </View>
                        </View>
                        <View style={styles.questionView}>
                            <Text style={styles.questionText}>3.    9x?=63</Text>
                            <View style={styles.radioFormView}>
                                <RadioForm
                                    buttonColor={'#fff'}
                                    buttonSize={10}
                                    buttonOuterSize={20}
                                    radio_props={question8}
                                    onPress={(value) => { this.setState({ answer8: question8[value].label }) }}
                                    labelStyle={{ fontSize: 16, color: '#fff' }}
                                    selectedButtonColor={"#000"}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 1, paddingBottom: 4 }}>
                            <Button onPress={this.onSubmit} style={{ backgroundColor: '#0054BC' }} block>
                                <Text>Submit</Text>
                            </Button>
                        </View>

                    </View>
                </ScrollView>
            </LinearGradient>
        );
    }




    //End Class
}
let mapDispatchToProps = (dispatch) => {
    return ({
        loaderOnOf: () => {
            dispatch(loaderOnOf());
        },
        assessmentSave: (assessment,profileData) => {
            dispatch(assessmentSave(assessment,profileData));
        },
       
    })
};

let mapStateToProps = state => {
    return ({
        isLoader: state.root.isLoader,
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    questionHeadsText: { fontSize: 18, color: '#0054BC' },
    questionText: {
        fontSize: 18, color: '#fff'
    },
    radioFormView: {
        marginVertical: 10, marginLeft: '2%'
    },
    questionView: { flex: 1, borderBottomWidth: 0.8, marginVertical: 5 },
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
