import React from 'react';
import {
    StyleSheet,
    View, Image, Text,
    ScrollView,
    Platform, PermissionsAndroid, TouchableOpacity
} from 'react-native';

import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import Entypo from "react-native-vector-icons/Entypo";




class JobDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: [],
            // startDate: '',
            // closeDate: '',
        };



        // var close = this.state.job.closingDate
        // // var date = new Date(null);
        // // date.setSeconds(close); // specify value for SECONDS here
        // // var resultClose = date.toISOString().substr(0, 10);
        // console.log(close, "closingDate");


        // var start = this.state.job.startDate.seconds
        // var dates = new Date(null);
        // dates.setSeconds(start); // specify value for SECONDS here
        // var resultStart = dates.toISOString().substr(0, 10);
        // console.log(resultStart, "startDate");
    }

    componentWillMount() {
        var close = this.props.job.closingDate.seconds
        var date = new Date(null);
        date.setSeconds(close); // specify value for SECONDS here
        var resultClose = date.toISOString().substr(0, 10);
        console.log(resultClose, "closingDate");

        var cloneJob = this.props.job
        var closeDate = cloneJob.closingDate.seconds = resultClose




        var start = this.props.job.startDate.seconds
        var dates = new Date(null);
        dates.setSeconds(start); // specify value for SECONDS here
        var resultStart = dates.toISOString().substr(0, 10);
        console.log(resultStart, "resultStart");

        var cloneJob = this.props.job
        var startDate = cloneJob.startDate.seconds = resultStart


        this.setState({
            job: this.props.job,
            closeDate: closeDate,
            startDate: startDate
            
        })
    }

    render() {
        console.log(this.state.closeDate, 'final');
        console.log(this.state.startDate, 'final');


        // var close = this.state.job.closingDate.seconds
        // var date = new Date(null);
        // date.setSeconds(close); // specify value for SECONDS here
        // var resultClose = date.toISOString().substr(0, 10);
        // console.log(resultClose, "closingDate");


        // console.log(resultClose, "closingDate");

        // console.log(this.state.startDate, "startDate");
        // console.log(this.state.closeDate, "closingDate");


        return (

            // MainView
            <LinearGradient
                colors={['#0054BC', '#00D5EF']}
                locations={[0, 1]}
                end={{ x: 0.0, y: 1.0 }} start={{ x: 0.5, y: 0.25 }}
                style={styles.container}
            >

                <View style={{ flex: 8, }}>

                    {/* Header */}
                    <View style={{
                        flex: 0.18,
                        flexDirection: "row",
                        // backgroundColor: 'red',
                    }}>

                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
                            <TouchableOpacity onPress={() => { Actions.pop(); }}>
                                <Entypo color="#fff" name="back" size={25} />
                            </TouchableOpacity>

                        </View>

                        <View style={{ flex: 3, justifyContent: "center", }}>
                            <Text style={{
                                fontSize: 22,
                                color: '#fff',
                                marginLeft: "18%"
                            }}>Job Details</Text>
                        </View>

                    </View>

                    {/* Image */}
                    <View style={{
                        flex: 0.70,
                        backgroundColor: '#fff',
                    }}>

                        <View>
                            <Image style={{ width: '100%', height: '100%' }}
                                source={{ uri: this.state.job.images }}
                            />
                        </View> 
                    </View>




                    <ScrollView style={{ flex: 4, }}>
                        <View style={{
                            flex: 0.5,
                            alignItems: "center",
                            marginBottom: '2%',
                            borderBottomWidth: 0.5,
                            borderColor: '#87ceeb',
                            marginTop: '2%',
                        }}>
                            <Text style={{
                                fontSize: 30,
                                color: "#87ceeb",
                                fontWeight: 'bold',

                            }}>
                                {this.state.job.companyName}
                            </Text>

                        </View>

                        <View style={{ flex: 3.5, height: "100%", padding: '6%' }}>

                            <View style={styles.details}>
                                <View style={{ flex: 1, }}>
                                    <View style={{}}>
                                        <Text style={styles.class}>ReferenceNo</Text>
                                    </View>
                                    <View style={{ color: '708090' }}>
                                        <Text>{this.state.job.referenceNo} </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, }}>
                                    <View style={{}}>
                                        <Text style={styles.class}>Date Submit</Text>
                                    </View>
                                    <View style={{}}>
                                        <Text> {this.state.job.cruntDate} </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.details}>
                                <View style={{ flex: 1, }}>
                                    <View style={{}}>
                                        <Text style={styles.class}>JobStatus</Text>
                                    </View>
                                    <View style={{ color: '708090' }}>
                                        <Text>{this.state.job.jobStatusSelect} </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, }}>
                                    <View style={{}}>
                                        <Text style={styles.class}>Job Title</Text>
                                    </View>
                                    <View style={{}}>
                                        <Text>{this.state.job.jobTitle}</Text>
                                    </View>
                                </View>
                            </View>


                            <View style={styles.details}>
                                <View style={{ flex: 1, }}>
                                    <View style={{}}>
                                        <Text style={styles.class}>Salary</Text>
                                    </View>
                                    <View style={{ color: '708090' }}>
                                        <Text>{this.state.job.salary} </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, }}>
                                    <View style={{}}>
                                        <Text style={styles.class}>Location</Text>
                                    </View>
                                    <View style={{}}>
                                        <Text>{this.state.job.location}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.details}>
                                <View style={{ flex: 1, }}>
                                    <View style={{}}>
                                        <Text style={styles.class}>Experience</Text>
                                    </View>
                                    <View style={{ color: '708090', }}>
                                        <Text>{this.state.job.experience} </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, }}>
                                    <View style={{}}>
                                        <Text style={styles.class}>Key Fector</Text>
                                    </View>
                                    <View style={{ color: '708090', }}>
                                        <Text>{this.state.job.keyFactor} </Text>
                                    </View>
                                </View>
                            </View>



                            <View style={styles.details}>
                                <View style={{ flex: 1, }}>
                                    <View style={{}}>
                                        <Text style={styles.class}>Job Description</Text>
                                    </View>
                                    <View style={{ color: '708090', }}>
                                        <Text>{this.state.job.description} </Text>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.details}>
                                <View style={{ flex: 1, }}>
                                    <View style={{}}>
                                        <Text style={styles.class}>Start Date</Text>
                                    </View>
                                    <View style={{ color: '708090', }}>
                                        <Text>{this.state.startDate} </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, }}>
                                    <View style={{}}>
                                        <Text style={styles.class}>Closing Date</Text>
                                    </View>
                                    <View style={{ color: '708090', }}>
                                        <Text>{this.state.closeDate} </Text>
                                    </View>
                                </View>

                            </View>

                        </View>

                    </ScrollView>


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
export default connect(null, mapDispatchToProps)(JobDetails);

const styles = StyleSheet.create({
    // logo: {
    //     marginTop: 30,
    //     width: 150,
    //     height: 153,
    // },
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#000'
    },
    class: {
        fontSize: 18,
        color: '#87ceeb',
        fontWeight: 'bold'
    },
    details: {
        flex: 2,
        flexDirection: "row",
        // alignItems:'center'
        // borderBottomWidth: 0.5, 
        // borderBottomColor:'#87ceeb',
        // marginStart: '8%',
        marginBottom: 5,
        marginTop: 5,
        // padding: 5,
        // width: '90%'

    }
})
