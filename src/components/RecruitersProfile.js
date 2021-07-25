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
    'Salary You Offerd', 'Not Applicable', '5,000-5,999', '6000-6,999', '7,000-7,999', '8000-8,999', '9,000-9,999', '10,000-14,999', '15,000-19,999', '20,000-24,999', '>25,000'
]
var expectedSalaries = [
    'Expected Salary', '5,000-5,999', '6000-6,999', '7,000-7,999', '8000-8,999', '9,000-9,999', '10,000-14,999', '15,000-19,999', '20,000-24,999', '>25,000'
]
var careerLevel = [
    'Career Level', 'Intern/Student', 'Entry Level', 'Experienced Professional', 'Departmental Head', 'GM / CEO / Country Head / President']


class RecruitersProfile extends Component {
    constructor() {
        super()
        this.state = {
            // text: "ads"
            showMultiplePicker: false,

        }
    }
    componentWillMount() {
        console.log(this.props.isExperienceParent,"wwwwwwwwww")
      
    }


    render() {
        return (

            <ScrollView >
                <View style={{ justifyContent: "space-between", alignItems: 'center', marginVertical: '2%', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}> Create Job </Text>
                    <TouchableOpacity onPress={this.props.logOut}><Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}> Logout </Text></TouchableOpacity>
                </View>

                <View style={{ flex: 0.5, paddingHorizontal: '3%' }}>
                    <TextInput
                        placeholderTextColor='#fff'
                        value={this.props.link}
                        placeholder='Job Title' keyboardAppearance='default' autoCapitalize='none' returnKeyType='next' style={styles.textbox} autoCorrect={false}
                        onChangeText={(link) => this.props.linkFunc(link)}
                    />
                </View>


                <View style={{ alignItems: "center" }} >
                    <TouchableOpacity style={styles.multiplePickerHeader} onPress={() => this.setState({ showMultiplePicker: true })} >
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: '#fff' }}> Your Field Sector </Text>
                        </View>

                        <View style={{ flex: 1, alignItems: "flex-end" }}>
                            {
                                this.state.showMultiplePicker ?
                                    <Text style={{ color: '#fff' }} onPress={() => { this.setState({ showMultiplePicker: false }) }}>
                                        Submit
                                 </Text>
                                    :
                                    <Icon name={'caretdown'} size={15} color={'#fff'} style={{ paddingRight: 15, }} />
                            }
                        </View>
                    </TouchableOpacity>
                    {
                        this.state.showMultiplePicker ?
                            <SelectMultiple
                                style={{ width: "95%", }}
                                items={fields}
                                selectedItems={this.props.selectedFields}
                                onSelectionsChange={(data) => this.props.onChangeForAllFields("fieldSector", data)} />
                            :
                            <View style={{
                                flexDirection: "row", marginVertical: "1%", flexWrap: "wrap",
                                justifyContent: 'center', alignItems: "center"
                            }}>
                                {
                                    this.props.selectedFields !== undefined ?
                                        this.props.selectedFields.map((data) => {
                                            console.log(data)
                                            return (
                                                <TouchableOpacity style={styles.selectedItem}>
                                                    <Text style={{ color: "#fff", fontSize: 11 }}> {data.label} </Text>
                                                </TouchableOpacity>
                                            )
                                        })
                                        :
                                        null
                                }
                            </View>
                    }
                </View>


                <View style={styles.countryPickerView}>
                    <Picker
                        mode="dropdown"
                        // iosIcon={<Icon name="ios-arrow-down-outline" />}
                        style={{ width: undefined, color: "#fff", }}
                        placeholder="Select your SIM"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={this.props.selected2}
                        onValueChange={(data) => this.props.onChangeForAllFields("country", data)}
                    >
                        {
                            countries.countries.map((data, ind) => {
                                return (
                                    <Picker.Item label={data.name} value={data.id} key={ind} />
                                )
                            })
                        }
                    </Picker>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={styles.countryPickerView}>
                        <Picker
                            mode="dropdown"
                            // iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: undefined, color: "#fff" }}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.props.selectedStates}
                            onValueChange={(data) => this.props.onChangeForAllFields("states", data)}
                        >

                            {
                                this.props.states.length !== 0 ?
                                    this.props.states.map((data, ind) => {
                                        return (
                                            <Picker.Item label={data.name} value={data.id} key={ind} />
                                        )
                                    })
                                    :
                                    <Picker.Item label="States" value="key4" />
                            }
                        </Picker>
                    </View>
                    <View style={styles.countryPickerView}>
                        <Picker
                            mode="dropdown"
                            // iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: undefined, color: "#fff" }}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.props.selectedCity}
                            onValueChange={(data) => this.props.onChangeForAllFields("city", data)}
                        >
                            {
                                this.props.cities.length !== 0 ?
                                    this.props.cities.map((data, ind) => {
                                        return (
                                            <Picker.Item label={data.name} value={data.id} key={ind} />
                                        )
                                    })
                                    :
                                    <Picker.Item label="City" value="City" />
                            }
                        </Picker>
                    </View>
                    {/* ****************************** */}
                </View>
                <View style={{ flex: 1, paddingHorizontal: '3%', paddingTop: '3%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 15, color: '#fff' }}>
                            Work experience?
            </Text>
                        <View style={{ marginHorizontal: '2%', marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: '#fff' }}>
                                No
            </Text>
                            <View style={{ marginHorizontal: '5%' }}>
                                <FlipToggle
                                    value={this.props.isExperienceParent}
                                    buttonWidth={50}
                                    buttonHeight={25}
                                    buttonRadius={0}
                                    sliderWidth={22}
                                    sliderHeight={22}
                                    sliderRadius={0}
                                    sliderOnColor="blue"
                                    sliderOffColor="blue"
                                    buttonOnColor="white"
                                    buttonOffColor="white"
                                    // onLabel={'On'}
                                    // offLabel={'Off'}
                                    // labelStyle={{ color: 'black' }}
                                    onToggle={this.props.toggle}
                               
                                />
                            </View>
                            <Text style={{ fontSize: 15, color: '#fff' }}>
                                Yes
            </Text>
                            {/* <RadioForm
                            radio_props={this.state.types}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={true}
                            buttonColor={'#000'}
                            animation={true}
                            labelColor={'#000'}
                            selectedButtonColor={'#fff'}
                            buttonWrapStyle={{ paddingHorizontal: 10 }}
                            onPress={(value) => { this.setState({ value: value }) }}
                        /> */}
                        </View>
                    </View>
                    {/* ************ */}
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, color: '#fff' }}>
                            Job Status
            </Text>
                        <View style={{ marginTop: '5%' }}>
                            <ToggleSwitch
                                isOn={this.props.status}
                                onColor='green'
                                offColor='red'
                                // label='Empoyment Status'
                                labelStyle={{ color: 'white', fontWeight: '500' }}
                                size='medium'
                                onToggle={this.props.toggleStatus}
                                // onToggle={
                                //     {this.props.toggleStatus}
                                // }
                            />
                        </View>
                    </View>
                </View>

                {/* ****************************** */}


                <View style={styles.pickerView}>
                    <Picker
                        mode="dropdown"
                        // iosIcon={<Icon name="ios-arrow-down-outline" />}
                        style={{ color: "#fff" }}
                        placeholder="Select your SIM"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={this.props.currentSalary}
                        onValueChange={(data) => this.props.onChangeForAllFields("currentSalary", data)}
                    >


                        {currentSalaries.map((item, index) => {
                            return (<Picker.Item label={item} value={item} key={index} />)
                        })}
                    </Picker>
                </View>


                {/* ****************************** */}


                {/* <View style={styles.pickerView}>
                    <Picker
                        mode="dropdown"
                        // iosIcon={<Icon name="ios-arrow-down-outline" />}
                        style={{ color: "#fff" }}
                        placeholder="Select your SIM"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={this.props.expectedSalary}
                        onValueChange={(data) => this.props.onChangeForAllFields("expectedSalary", data)}
                    >


                        {expectedSalaries.map((item, index) => {
                            return (<Picker.Item label={item} value={item} key={index} />)
                        })}
                    </Picker>
                </View> */}


                {/* ****************************** */}


                <View style={styles.pickerView}>
                    <Picker
                        mode="dropdown"
                        // iosIcon={<Icon name="ios-arrow-down-outline" />}
                        style={{ color: "#fff" }}
                        placeholder="Select your SIM"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={this.props.careerLevel}
                        onValueChange={(data) => this.props.onChangeForAllFields("careerLevel", data)}
                    >


                        {careerLevel.map((item, index) => {
                            return (<Picker.Item label={item} value={item} key={index} />)
                        })}
                    </Picker>
                </View>


                {/* ****************************** */}


                <View style={{ flex: 1, paddingVertical: '1%', paddingHorizontal: '3%' }}>
                    <Text style={{ fontSize: 15, color: 'white' }}>
                        Type Job titles which you want
        </Text>
                    <Tags
                        // initialText="Type Job titles you are interested in"
                        textInputProps={{
                            placeholder: "Type Job titles you are interested in"
                        }}
                        // initialTags={[]}
                        onChangeTags={(tags) =>this.props.intrested(tags)}

                        onTagPress={(index, tagLabel, event, deleted) =>
                            console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                        }
                        containerStyle={{ justifyContent: "center" }}
                    // inputStyle={{ borderColor:'white',borderWidth:1 }}
                    />
                </View>
                <View style={{ flex: 1, paddingVertical: '1%', paddingHorizontal: '3%' }}>
                    <Text style={{ fontSize: 15, color: 'white' }}>
                        Skills
        </Text>
                    <Tags
                        // initialText="Type Job titles you are interested in"
                        textInputProps={{
                            placeholder: "Type Skills here"
                        }}
                        // initialTags={[]}
                        onChangeTags={(tags) => 
                        this.props.skills(tags)
                        }
                        onTagPress={(index, tagLabel, event, deleted) =>
                            console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
                        }
                        containerStyle={{ justifyContent: "center" }}
                    // inputStyle={{ borderColor:'white',borderWidth:1 }}
                    />
                </View>

                <View style={{ flex: 0.5, paddingHorizontal: '3%' }}>
                    <TextInput
                        placeholderTextColor='#fff'
                        value={this.props.link}
                        placeholder='Paste your intro video link here' keyboardAppearance='default' autoCapitalize='none' returnKeyType='next' style={styles.textbox} autoCorrect={false}
                        onChangeText={(link) => this.props.linkFunc(link)}
                    />
                </View>

                {/* <View style={{ flex: 1, marginVertical: '5%', marginLeft: '3%' }}>
                <ToggleSwitch
                    isOn={this.state.status}
                    onColor='green'
                    offColor='red'
                    label='Empoyment Status'
                    labelStyle={{ color: 'white', fontWeight: '500' }}
                    size='medium'
                    onToggle={(isOn) => {
                        this.setState({status:isOn})
                        console.log('changed to : ', isOn)
                    }}
                />
            </View> */}

                <View style={{ flex: 1, marginVertical: '5%', paddingVertical: 10 }}>
                    {
                        this.props.attachedFile ? <View><Text>{this.props.attachedFile}</Text></View> : null
                    }
                    <Button block rounded style={{ backgroundColor: '#0054BC' }}
                        onPress={ this.props.DocumentPicker}>
                        <Icon name={'addfile'} size={20} color={'#fff'} />
                        <Text style={{ color: '#fff' }}> Attach your documentary </Text>
                    </Button>
                </View>
                <View style={{ flex: 1, marginBottom: '3%', paddingBottom: '3%' }}>
                    <Button block rounded style={{ backgroundColor: '#0054BC' }}
                        onPress={this.props.createProfile}>
                        <Text style={{ color: '#fff' }}> Create Job </Text>
                    </Button>

                </View>

                {/* </View> */}
            </ScrollView>


        );
    }
}

export default RecruitersProfile;



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
