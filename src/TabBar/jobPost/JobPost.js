import React from 'react';
import {
    StyleSheet,
    View, Image, Text,
    TextInput,
    ScrollView,
    Button,
    Platform, ActivityIndicator, TouchableOpacity, Picker
} from 'react-native';

import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import Entypo from "react-native-vector-icons/Entypo";
import TimePicker from "react-native-modal-datetime-picker";
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import { jobData } from '../../Store/Actions/action';

var d = new Date();
var date = d.getDate();
var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
var year = d.getFullYear();
var cruntDate = date + "/" + month + "/" + year;


class JobPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            referenceNo: '',
            jobTitle: '',
            isDateTimePickerVisible: false,
            isDatePickerVisible: false,
            startDate: '',
            closingDate: '',
            jobStatusSelect: '',
            experience: '',
            education: '',
            salary: '',
            location: '',
            keyFactor: '',
            description: '',
            attachmentsEmail: '',
            cruntDate,
        };
    }

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })
    _hideDatePicker = () => this.setState({ isDatePickerVisible: false })


    // validate = (text) => {
    //     console.log(text);
    //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if (reg.test(text) === false) {
    //         alert("Email is Not Correct");
    //         this.setState({ attachmentsEmail: text })
    //         return false;
    //     }
    //     else {
    //         this.setState({ attachmentsEmail: text })
    //         alert("Email is Correct");
    //     }
    // }


    submit() {
        // let startDate = this.state.startDate;
        // let closingDate = this.state.closingDate.toString();

        // var startDate = this.state.startDate;
        // var citrus = startDate.slice(0,4);

        // console.log(citrus);
        // console.log(closingDate);




        let job = {
            companyName: this.state.companyName,
            referenceNo: this.state.referenceNo,
            jobTitle: this.state.jobTitle,
            jobStatusSelect: this.state.jobStatusSelect,
            startDate: this.state.startDate,
            closingDate: this.state.closingDate,
            experience: this.state.experience,
            education: this.state.education,
            salary: this.state.salary,
            location: this.state.location,
            keyFactor: this.state.keyFactor,
            description: this.state.description,
            email: this.state.attachmentsEmail,
            cruntDate: this.state.cruntDate,

        }

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        if (this.state.companyName === '') {
            alert('Please Enter Company Name');
        }
        else if (this.state.referenceNo === '') {
            alert('Please Enter Reference No');
        }
        else if (this.state.jobTitle === '') {
            alert('Please Enter Job Title');
        }
        else if (this.state.jobStatusSelect === '') {
            alert('Please Select Job Status');
        }
        else if (this.state.startDate === '') {
            alert('Please Select Start Date');
        }
        else if (this.state.closingDate === '') {
            alert('Please Select Closing Date');
        }
        else if (this.state.experience === '') {
            alert('Please Select Experience');
        }
        else if (this.state.education === '') {
            alert('Please Enter Education');
        }
        else if (this.state.salary === '') {
            alert('Please Enter Salary');
        }
        else if (this.state.location === '') {
            alert('Please Enter Location');
        }
        else if (this.state.keyFactor === '') {
            alert('Please Enter Key Factor');
        }
        else if (this.state.description === '') {
            alert('Please Enter Description');
        }
        else if (reg.test(this.state.attachmentsEmail) === false) {
            alert("invalid email type")
        }
        else {
            console.log('job Submit', job);
            alert('Job Submit');
            this.props.jobSubmitAction(job);
        }

        // this.setState({
        //     companyName: null,
        //     referenceNo: null,
        //     jobTitle: null,
        //     jobStatusSelect: null,
        //     startDate: null,
        //     closingDate: null,
        //     experience: null,d
        //     education: null,
        //     salary: null,
        //     location: null,
        //     keyFactor: null,
        //     description: null,
        //     email: null,
        //     cruntDate: null
        // })


    }





    render() {
        let { companyName, referenceNo, jobTitle, jobStatusSelect, experience, education, salary, location, keyFactor, description, attachmentsEmail, closingDate, startDate } = this.state;
        return (

            // MainView
            <LinearGradient
                colors={['#0054BC', '#00D5EF']}
                locations={[0, 1]}
                end={{ x: 0.0, y: 1.0 }} start={{ x: 0.5, y: 0.25 }}
                style={styles.container}
            >

                {/* Header */}
                <View style={{ flex: 0.1, flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: '#fff' }}>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
                        <TouchableOpacity onPress={() => { Actions.pop(); }}>
                            <Entypo color="#fff" name="back" size={25} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 3, alignItems: "center", justifyContent: "center", }}>
                        <Text style={{
                            fontSize: 22,
                            color: '#fff',
                        }}>Job Create</Text>
                    </View>
                </View>


                {/* <ScrollView> */}
                <ScrollView style={{ flex: 8, marginTop: '8%', }}>

                    {/* CompanyName and JobTitle View */}
                    <View style={{ flex: 1, }}>
                        <View style={{ flex: 2, flexDirection: 'row', marginLeft: '4%', }}>
                            <View style={{ flex: 1, height: '80%' }}>
                                <Text style={styles.jobText}>Company Name</Text>
                                <TextInput style={styles.input}
                                    onChangeText={(companyName) => { this.setState({ companyName: companyName }) }
                                    } />
                            </View>


                            <View style={{ flex: 1, height: '80%' }}>
                                <Text style={styles.jobText}>Job Title</Text>
                                <TextInput style={styles.input}
                                    onChangeText={(jobTitle) => { this.setState({ jobTitle: jobTitle }) }
                                    } />
                            </View>

                        </View>
                    </View>

                    {/* ReferenceNo and JobStatus View */}
                    <View style={{ flex: 1, }}>
                        <View style={{ flex: 2, flexDirection: 'row', margin: '4%', height: 50 }}>
                            <View style={{ flex: 1, }}>
                                <Text style={styles.jobText}>Reference No</Text>
                                <TextInput style={styles.input}
                                    onChangeText={(referenceNo) => { this.setState({ referenceNo: referenceNo }) }
                                    } />
                            </View>

                            <View style={{ flex: 1, height: '80%' }}>
                                <Text style={styles.jobText}>Job Status</Text>
                                <Picker
                                    selectedValue={this.state.jobStatusSelect}
                                    style={{ width: 90, color: '#fff' }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ jobStatusSelect: itemValue })
                                    }
                                >
                                    <Picker.Item label="Select" value="" />
                                    <Picker.Item label="Permanant" value="Permanant" />
                                    <Picker.Item label="Contract" value="Contract" />
                                    <Picker.Item label="Temporary" value="Temporary" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    {/* StartDate and ClosingDate View */}
                    <View style={{ flex: 1, }}>
                        <View style={{ flex: 2, flexDirection: 'row', margin: '4%', height: 70, }}>
                            <View style={{ flex: 1, marginRight: '5%' }}>
                                <Text style={{ color: '#fff', fontSize: 16, marginBottom: 20 }}>Start date:</Text>
                                <Button title="Select date" onPress={() => { this.setState({ isDatePickerVisible: true }); }} />
                                <TimePicker
                                    isVisible={this.state.isDatePickerVisible}
                                    onConfirm={(dateStart) => {
                                        console.log('select date', dateStart);
                                        this.setState({ startDate: dateStart });
                                        this._hideDatePicker();
                                    }}
                                    onCancel={() => { this.setState({ isDateTimePickerVisible: false }); }}
                                />
                            </View>
                            <View style={{ flex: 1, height: '80%', marginRight: '5%' }}>
                                <Text style={{ color: '#fff', fontSize: 16, marginBottom: 20 }}>Closing Date:</Text>
                                <Button title="Select date" onPress={() => { this.setState({ isDateTimePickerVisible: true }); }} />
                                <TimePicker
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={(dateClosing) => {
                                        console.log('select date', dateClosing);
                                        this.setState({ closingDate: dateClosing });
                                        this._hideDateTimePicker();
                                    }}
                                    onCancel={() => { this.setState({ isDateTimePickerVisible: false }); }}
                                />
                            </View>
                        </View>
                    </View>

                    {/* SalaryOfferd and Location View */}
                    <View style={{ flex: 0.75, }}>
                        <View style={{ flex: 2, flexDirection: 'row', margin: '4%', }}>
                            <View style={{ flex: 1, height: '80%' }}>
                                <Text style={styles.jobText}>Salary Offerd:</Text>
                                <TextInput style={styles.input}
                                    onChangeText={(salary) => { this.setState({ salary: salary }) }
                                    } />
                            </View>
                            <View style={{ flex: 1, height: '80%' }}>
                                <Text style={styles.jobText}>Location</Text>
                                <TextInput style={styles.input}
                                    onChangeText={(location) => { this.setState({ location: location }) }
                                    } />
                            </View>

                        </View>
                    </View>

                    {/* Experience and Education View */}
                    <View style={{ flex: 0.75, }}>
                        <View style={{ flex: 2, flexDirection: 'row', margin: '4%' }}>
                            <View style={{ flex: 1, height: '80%' }}>
                                <Text style={styles.jobText}>Experience Needed:</Text>
                                <Picker
                                    selectedValue={this.state.experience}
                                    style={{ width: 90, color: '#fff' }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ experience: itemValue })
                                    }
                                >
                                    <Picker.Item label="Select" value="" />
                                    <Picker.Item label="1 Year" value="1 Year" />
                                    <Picker.Item label="2 Years" value="2 Years" />
                                    <Picker.Item label="3 Years" value="3 Years" />
                                    <Picker.Item label="4 Years" value="4 Years" />
                                    <Picker.Item label="5 Years" value="5 Years" />
                                    <Picker.Item label="6 Years" value="6 Years" />
                                    <Picker.Item label="7 Years" value="7 Years" />
                                    <Picker.Item label="8 Years" value="8 Years" />
                                    <Picker.Item label="9 Years" value="9 Years" />
                                    <Picker.Item label="10 Years" value="10 Years" />

                                </Picker>
                            </View>

                            <View style={{ flex: 1, height: '80%' }}>
                                <Text style={styles.jobText}>Education: </Text>
                                <Text style={{ fontSize: 12, color: 'black' }}>Masters,Degree,Diploma,etc</Text>
                                <TextInput style={styles.input}
                                    onChangeText={(education) => { this.setState({ education: education }) }
                                    } />
                            </View>
                        </View>
                    </View>


                    {/* KeyFactors View */}
                    <View style={{ flex: 0.75, }}>
                        <View style={{ flex: 1, height: '80%', margin: '4%' }}>
                            <Text style={styles.jobText}>Key Factors Wanted:</Text>
                            <TextInput style={styles.input}
                                onChangeText={(keyFactor) => { this.setState({ keyFactor: keyFactor }) }
                                } />
                        </View>
                    </View>

                    {/* Job Descriotion View */}
                    <View style={{ flex: 2, margin: '4%' }}>
                        <Text style={styles.jobText}>Job Descriotion:</Text>
                        <TextInput style={styles.description}
                            onChangeText={(description) => { this.setState({ description: description }) }
                            } />
                    </View>

                    {/* Forward CV Attachments View */}

                    <View style={{ flex: 1, margin: '4%', }}>
                        <Text style={styles.jobText}>Forward CV & necessary attachments to</Text>

                        <TextInput style={styles.attachments}

                            placeholder={'Please Enter Your Email Address !'}
                            // value={this.state.attachmentsEmail}
                            onChangeText={(attachmentsEmail) => { this.setState({ attachmentsEmail: attachmentsEmail }) }


                            }
                        />


                        {/* <TextInput
                            placeholder="Email ID"
                            onChangeText={(text) => this.validate(text)}
                            value={this.state.email}
                        /> */}
                    </View>

                    {/* Submit Button View */}

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        {
                            (this.props.isLoader === true) ? (
                                // <Image source={require('../../images/loader.gif')}></Image>
                                <ActivityIndicator style={{ top: 20, marginBottom: 20 }} />
                            ) : <TouchableOpacity onPress={this.submit.bind(this)}>
                                    <Text style={styles.button}>Submit</Text>
                                </TouchableOpacity>
                        }

                    </View>
                    <View style={{ marginBottom: "10%" }}></View>


                </ScrollView>
            </LinearGradient>
        );
    }
}

let mapStateToProps = state => {
    // console.log(state, "REDSTATe")
    return {
        signupLoader: state.root.signupLoader,
        isLoader: state.root.isLoader,
        submit: state.root.jobSubmitError,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        jobSubmitAction: (jobDataa) => {
            dispatch(jobData(jobDataa)
            )
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(JobPost);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    input: {
        color: '#fff',
        fontSize: 14,
        borderColor: '#fff',
        borderBottomWidth: 0.5,
        height: 35,
        width: 145
    },
    jobText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10
    },
    description: {
        color: '#fff',
        fontSize: 14,
        borderColor: '#fff',
        borderWidth: 0.5,
        height: 120,
        width: 330
    },
    attachments: {
        color: 'black',
        fontSize: 14,
        borderColor: '#fff',
        borderWidth: 0.5,
        height: 35,
        width: 330,
        marginBottom: 20
    },
    button: {
        fontSize: 20,
        color: '#fff',
        borderColor: '#0054BC',
        borderRadius: 3,
        borderWidth: 1,
        height: 45,
        width: 320,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#0054BC',
        paddingTop: '2%'
    }
})
