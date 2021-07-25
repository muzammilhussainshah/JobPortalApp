import React, { Component } from 'react';
import { Text, Button, CheckBox, Picker } from 'native-base';
import firebase from 'firebase';
import { getUsers } from "../Store/Actions/action";

import {
    StyleSheet, ScrollView, View, KeyboardAvoidingView,
    ActivityIndicator, Image, TextInput, TouchableOpacity,
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import FlipToggle from 'react-native-flip-toggle-button'
import axios from 'axios'
import Tags from "react-native-tags";
import SelectMultiple from 'react-native-select-multiple'
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from "react-redux";
import Loader from "../components/loader";
import JobProfile from "../components/JobProfile";
import RecruitersProfile from "../components/RecruitersProfile";
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux';
const fields = ['Marketing', 'IT', 'Computers', 'Business ', 'Management', 'Social Worker',
    'Medical Industry', 'Sales', 'Freelancer', 'oil', 'gas', 'Automotive', 'Manufacturing', 'Retailing', 'Recruitment'
    , 'Finance', 'hospitality']

var countries = require('../Countries-States-Cities-database-master/countries.json');
var states = require('../Countries-States-Cities-database-master/states.json');
var cities = require('../Countries-States-Cities-database-master/cities.json');
var currentSalaries = [
    'Current Salary', 'Not Applicable', '5,000-5,999', '6000-6,999', '7,000-7,999', '8000-8,999', '9,000-9,999', '10,000-14,999', '15,000-19,999', '20,000-24,999', '>25,000'
]
var expectedSalaries = [
    'Expected Salary', '5,000-5,999', '6000-6,999', '7,000-7,999', '8000-8,999', '9,000-9,999', '10,000-14,999', '15,000-19,999', '20,000-24,999', '>25,000'
]
var careerLevel = [
    'Career Level', 'Intern/Student', 'Entry Level', 'Experienced Professional', 'Departmental Head', 'GM / CEO / Country Head / President']



class CreateProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMultiplePicker: false,
            selectedFields: [],
            selected2: "",
            states: [],
            country: "",
            selectedStates: '',
            cities: [],
            selectedCity: '',
            intrested: [],
            skills: [],
            types: [
                { label: 'Yes  ', value: 1 },
                { label: 'No', value: 0 }
            ],
            currentSalary: '',
            expectedSalary: '',
            careerLevel: '',
            attachedFile: '',
            link: '',
            status: true,
            isExperience: true
        }
    }

    onChangeForAllFields = (fieldname, selectedFields) => {
        console.log(fieldname, selectedFields, "1")
        if (fieldname === "fieldSector") {
            this.setState({ selectedFields })
        }

        else if (fieldname === "country") {
            this.setState({
                selected2: selectedFields
            }, () => {
                var statesData = states.states.filter((data) => data.country_id === `${this.state.selected2}`)
                this.setState({ states: statesData })
            });
        }

        else if (fieldname === "states") {
            this.setState({
                selectedStates: selectedFields
            }, () => {
                var citiesData = cities.cities.filter((data) => data.state_id === selectedFields)
                this.setState({ cities: citiesData })
            });
        }

        else if (fieldname === "city") {
            this.setState({
                selectedCity: selectedFields
            })
        }

        else if (fieldname === "currentSalary") {
            this.setState({
                currentSalary: selectedFields
            })
        }

        else if (fieldname === "expectedSalary") {
            this.setState({
                expectedSalary: selectedFields
            })
        }

        else if (fieldname === "careerLevel") {
            this.setState({
                careerLevel: selectedFields
            })
        }
    }

    componentWillMount() {
        this.props.getUsers()
        console.log(countries)
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps, "nexttttt")
        this.setState({
            currentUser: nextProps.currentUser
        })

    }
    DocumentPicker = () => {
        console.log('DOCUMENTPICKER')
        DocumentPicker.show({
            filetype: [DocumentPickerUtil.allFiles()],
        }, (error, res) => {
            // Android
            if (res) {

                console.log(
                    res.uri,
                    res.type, // mime type
                    res.fileName,
                    res.fileSize
                );
                this.setState({
                    attachedFile: res.fileName
                })
            }
            else {
                console.log(error)
            }
        });
    }

    createProfile() {
        // let profileInfo = {}
        this.setState({
            loader: true
        })
        console.log(this.state.selectedFields)
        profileData = {
            fieldSector: this.state.selectedFields,
            country: this.state.selected2,
            states: this.state.selectedStates,
            cities: this.state.selectedCity,
            isExperience: this.state.isExperience,
            empStatus: this.state.status,
            currentSalary: this.state.currentSalary,
            expectedSalary: this.state.expectedSalary,
            careerLevel: this.state.careerLevel,
            intrested: this.state.intrested,
            skills: this.state.skills,
            link: this.state.link,
            attachedFile: this.state.attachedFile

        }
        console.log(profileData, "profileData")
        Actions.assessment({ profileData })
        this.setState({
            loader: false
        })
    }
    logoutFunc() {
        console.log("LOGOUTFUNC")
        firebase.auth().signOut()


    }
    toggle() {
        this.setState({
            isExperience: !this.state.isExperience
        })
        console.log('toggle long pressed!')


    }

    toggleStatus() {
        console.log("wah kia bata he")
        this.setState({ status: !this.state.status })

    }
    intrested = (tags) => {
        console.log(tags, "tagstags")
        this.setState({
            intrested: [...this.state.intrested, ...tags]
        }, () => { console.log(this.state.intrested, "intresteddd") })

    }
    skills = (tags) => {
        console.log(tags, "tagstags")
        this.setState({
            skills: [...this.state.skills, tags]
        }, () => {
            console.log(this.state.skills,"skillsskillsskillsskills");
            console.log( tags, "lags");
        })

    }
    // skills = (tags) => {
    //     this.setState({
    //         skills: [...this.state.skills, ...tags]
    //     },()=>{console.log(this.state.skills,"skillsss")})

    // }
    link = (link) => {
        this.setState({
            link: link
        })

    }
    deleteTags = (deleteTags, tagName) => {
        console.log(deleteTags, "deleteTags")
        let skillsClone = this.state[tagName]
        skillsClone.splice(deleteTags, 1)
        console.log(skillsClone, "deletedTags")
        this.setState({
            [tagName]: skillsClone
        }, () => { console.log(this.state.skills, "sssssssssss") })

    }
    render() {
        console.log(this.props.currentUser, 'currentU');
        return (

            <LinearGradient
                colors={['#0054BC', '#00D5EF']}
                locations={[0, 1]}
                end={{ x: 0.0, y: 1.0 }} start={{ x: 0.5, y: 0.25 }}
                style={styles.container}
            >
                {(this.state.loader === true) ? (
                    <View style={{ position: "absolute", zIndex: 1, left: "35%", top: "35%" }}>
                        <Loader />
                    </View>
                ) : (null)}
                {/* Multiple Picker For Fields */}
                {(this.state.currentUser) ? (
                    (this.state.currentUser && this.state.currentUser.role === "Job") ? (
                        <JobProfile
                            onChangeForAllFields={this.onChangeForAllFields}
                            logOut={() => this.logoutFunc()}
                            DocumentPicker={() => this.DocumentPicker()}
                            createProfile={() => this.createProfile()}
                            toggle={() => this.toggle()}
                            toggleStatus={() => this.toggleStatus()}
                            intrested={(tags) => this.intrested(tags)}
                            intrestedTags={this.state.intrested}
                            skills={(tags) => this.skills(tags)}
                            deleteTags={(deltags, tagName) => this.deleteTags(deltags, tagName)}
                            skillsTags={this.state.skills}
                            linkFunc={(link) => this.link(link)}
                            selectedFields={this.state.selectedFields}
                            selected2={this.state.selected2}
                            selectedStates={this.state.selectedStates}
                            states={this.state.states}
                            selectedCity={this.state.selectedCity}
                            cities={this.state.cities}
                            isExperienceParent={this.state.isExperience}
                            status={this.state.status}
                            currentSalary={this.state.currentSalary}
                            expectedSalary={this.state.expectedSalary}
                            careerLevel={this.state.careerLevel}
                            link={this.state.link}
                            attachedFile={this.state.attachedFile}
                        />


                    ) : (
                            <RecruitersProfile
                                onChangeForAllFields={this.onChangeForAllFields}
                                logOut={() => this.logoutFunc()}
                                DocumentPicker={() => this.DocumentPicker()}
                                createProfile={() => this.createProfile()}
                                toggle={() => this.toggle()}
                                toggleStatus={() => this.toggleStatus()}
                                intrested={(tags) => this.intrested(tags)}
                                skills={(tags) => this.skills(tags)}
                                linkFunc={(link) => this.link(link)}
                                selectedFields={this.state.selectedFields}
                                selected2={this.state.selected2}
                                selectedStates={this.state.selectedStates}
                                states={this.state.states}
                                selectedCity={this.state.selectedCity}
                                cities={this.state.cities}
                                isExperienceParent={this.state.isExperience}
                                status={this.state.status}
                                currentSalary={this.state.currentSalary}
                                expectedSalary={this.state.expectedSalary}
                                careerLevel={this.state.careerLevel}
                                link={this.state.link}
                                attachedFile={this.state.attachedFile}

                            />
                        )

                ) : (null)}


            </LinearGradient>

            //     <LinearGradient
            //     colors={['#0054BC', '#00D5EF']}
            //     locations={[0, 1]}
            //     end={{ x: 0.0, y: 1.0 }} start={{ x: 0.5, y: 0.25 }}
            //     style={styles.container}
            // >
            //     <View style={{ flex:1,justifyContent: "space-between", marginVertical: '2%', flexDirection: 'row' }}>
            //        <View style={{flex:2,marginLeft:'3%'}}>
            //         <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}> Profile </Text>
            //        </View>
            //        <View style={{flex:0.5}}>
            //         <TouchableOpacity onPress={this.logoutFunc}><Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}> Logout </Text></TouchableOpacity>
            //        </View>
            //     </View>
            //     <View style={{flex:6}}>
            //         <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
            //             Will be developed in next milestone
            //          </Text>

            //     </View>
            // </LinearGradient>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return ({
        getUsers: () => {
            dispatch(getUsers());
        },
    })
};

let mapStateToProps = state => {
    return ({
        currentUser: state.root.currentUser,

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', paddingHorizontal: '3%'
    },
    textbox: {
        fontSize: 12,
        textAlign: 'left',
        width: '100%',
        paddingBottom: 2,
        color: '#fff',
        paddingHorizontal: '3%',
        borderColor: '#fff',
        borderBottomWidth: 1,
        borderRadius: 5,
    },
    multiplePickerHeader: {
        borderRadius: 2, paddingBottom: 5, marginTop: 5, borderBottomColor: '#fff', borderBottomWidth: 1,
        flexDirection: "row", height: 50, justifyContent: "space-around",
        alignItems: "center", width: "96%"
    },
    selectedItem: {
        height: 12, padding: 8, borderColor: "#fff", borderWidth: 1, borderRadius: 2,
        justifyContent: "center", alignItems: "center", marginHorizontal: '1%', marginVertical: "1%"
    },
    countryPickerView: { flex: 1, borderBottomColor: "#fff", borderBottomWidth: 1, height: 42, marginHorizontal: "1%", borderRadius: 4 },
    pickerView: { flex: 1, borderBottomColor: "#fff", borderBottomWidth: 1, height: 42, marginHorizontal: "1%", borderRadius: 4 }
});
