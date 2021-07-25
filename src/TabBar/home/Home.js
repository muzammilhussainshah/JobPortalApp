import React from 'react';
import {

    StyleSheet,
    View, Image, Text,
    ScrollView,
    Platform, PermissionsAndroid, TouchableOpacity
} from 'react-native';
import { Router, Scene, Actions, Tabs } from "react-native-router-flux";
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'firebase';
import { FAB } from 'react-native-paper';
import { getJobData } from '../../Store/Actions/action'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            job: [
                {
                    company: "Software House",
                    jobTitle: "Developer",
                    location: "Bahadurbad",
                    referenceNo: '1234',
                    jobStatus: 'Job Status',
                    Salary: '20,000',
                    experience: '1 Year',
                    keyFector: 'Key Factor',
                    jobDescription: 'I think just ever mind not a confirm this problem but every bady soo happy on Friday I think just ever mind not a confirm this problem but every bady soo happy on Friday',
                    closingDate: '10-Nov-2019',
                    dateSubmit: '10-Sep-2019',
                    image: 'http://www.adequateinfosoft.com/blog/wp-content/uploads/2019/04/Software-Development-Company.jpg'
                },
                {
                    company: "Honda",
                    jobTitle: "Machanic",
                    location: "Gulshan-e-Iqbal",
                    referenceNo: '1234',
                    jobStatus: 'Job Status',
                    Salary: '20,000', experience: '1 Year',
                    keyFector: 'Key Factor',
                    jobDescription: 'I think just ever mind not a confirm this problem but every bady soo happy on Friday I think just ever mind not a confirm this problem but every bady soo happy on Friday',
                    closingDate: '10-Nov-2019',
                    dateSubmit: '10-Sep-2019',
                    image: 'https://www.2-spyware.com/news/wp-content/uploads/news/honda-experiences-information-leakage_en.jpg'
                },
                {
                    company: "Uber",
                    jobTitle: "Rider",
                    location: "Nazimabad",
                    referenceNo: '1234',
                    jobStatus: 'Job Status',
                    Salary: '20,000',
                    experience: '1 Year',
                    keyFector: 'Key Factor',
                    jobDescription: 'I think just ever mind not a confirm this problem but every bady soo happy on Friday I think just ever mind not a confirm this problem but every bady soo happy on Friday',
                    closingDate: '10-Nov-2019',
                    dateSubmit: '10-Sep-2019',
                    image: 'https://static-labs.ebanx.com/6/2019/08/shutterstock_1394395766-800x400.jpg'
                },
                {
                    company: "Careem",
                    jobTitle: "Rider",
                    location: "Orangi Town",
                    referenceNo: '1234',
                    jobStatus: 'Job Status',
                    Salary: '20,000',
                    experience: '1 Year',
                    keyFector: 'Key Factor',
                    jobDescription: 'I think just ever mind not a confirm this problem but every bady soo happy on Friday I think just ever mind not a confirm this problem but every bady soo happy on Friday',
                    closingDate: '10-Nov-2019',
                    dateSubmit: '10-Sep-2019',
                    image: 'https://image.cnbcfm.com/api/v1/image/105514023-1539837982232gettyimages-1045907562.jpeg?v=1539838048&w=740&h=416'
                },
                {
                    company: "Careem",
                    jobTitle: "Rider",
                    location: "Orangi Town",
                    referenceNo: '1234',
                    jobStatus: 'Job Status',
                    Salary: '20,000',
                    experience: '1 Year',
                    keyFector: 'Key Factor',
                    jobDescription: 'I think just ever mind not a confirm this problem but every bady soo happy on Friday I think just ever mind not a confirm this problem but every bady soo happy on Friday',
                    closingDate: '10-Nov-2019',
                    dateSubmit: '10-Sep-2019',
                    image: 'https://image.cnbcfm.com/api/v1/image/105514023-1539837982232gettyimages-1045907562.jpeg?v=1539838048&w=740&h=416'
                },
                {
                    company: "Careem",
                    jobTitle: "Rider",
                    location: "Orangi Town",
                    referenceNo: '1234',
                    jobStatus: 'Job Status',
                    Salary: '20,000',
                    experience: '1 Year',
                    keyFector: 'Key Factor',
                    jobDescription: 'I think just ever mind not a confirm this problem but every bady soo happy on Friday I think just ever mind not a confirm this problem but every bady soo happy on Friday',
                    closingDate: '10-Nov-2019',
                    dateSubmit: '10-Sep-2019',
                    image: 'https://image.cnbcfm.com/api/v1/image/105514023-1539837982232gettyimages-1045907562.jpeg?v=1539838048&w=740&h=416'
                },
            ],
        };
    }

    onLogout = () => {
        firebase.auth().signOut()
        // alert('LogOut');
    }

    componentWillMount() {
        this.props.getJobDatas();
        console.log('update');

        // this.setState({
        //     allJobArry: this.props.jobArr
        // })
        // console.log(this.state.allJobArry, 'dispatch')

    }



    // componentWillMount(){

    // }

    //  var allJob = ;


    render() {
        console.log(this.props.jobArr.images, 'dis');

        return (

            <LinearGradient
                colors={['#0054BC', '#00D5EF']}
                locations={[0, 1]}
                end={{ x: 0.0, y: 1.0 }} start={{ x: 0.5, y: 0.25 }}
                style={styles.container}
            >


                <View style={{
                    flex: 0.1,
                    justifyContent: "space-between",
                    marginVertical: '2%',
                    flexDirection: 'row',
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#fff'
                }}>

                    <View style={{ flex: 2, marginLeft: '3%' }}>
                        <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}> Profile </Text>
                    </View>

                    <View style={{ flex: 0.5 }}>
                        <TouchableOpacity onPress={this.onLogout}><Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}> Logout </Text></TouchableOpacity>
                    </View>

                </View>



                <ScrollView style={{ flex: 8, width: "95%", }}>

                    {
                        this.props.jobArr.map((job, index) => {
                            return (
                                <View style={{
                                    justifyContent: "center",
                                    flexDirection: "row",
                                    borderColor: "#fff",
                                    borderWidth: 0.5,
                                    // backgroundColor: "#fff",
                                    height: 120,
                                    borderRadius: 2,
                                    marginBottom: 3,
                                    // padding: 1
                                }}>

                                    <View style={{
                                        flex: 1.2,
                                        borderRadius: 7,
                                        margin: 1
                                    }}>

                                        <View>
                                            <Image style={{ width: '100%', height: '100%' }}
                                                source={{ uri: job.jobData.images }}
                                            />
                                        </View>
                                    </View>


                                    <View key={index} style={{
                                        flex: 2,
                                        // backgroundColor: "#6495ed",
                                        padding: "3%"
                                    }}>
                                        <TouchableOpacity style={{ marginTop: 8 }} onPress={() => {
                                            Actions.JobDetails({ job: job.jobData })
                                        }}>

                                            <Text style={styles.classCompany} key={index}>{job.jobData.companyName}</Text>
                                            <Text style={styles.class} key={index}>Job Title  : {job.jobData.jobTitle}</Text>
                                            <Text style={styles.class} key={index}>Location  : {job.jobData.location}</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            )

                        })
                    }
                </ScrollView>

                <FAB
                    style={styles.fab}
                    icon="plus"
                    iconTextColor="#fff"
                    onPress={() => { Actions.JobAdd() }}>
                </FAB>


            </LinearGradient>

        );
    }
}

// console.log(this.props.jobArr, 'jobArry')

let mapStateToProps = state => {
    // console.log(state, "REDSTATe")
    return {
        // signupLoader: state.root.signupLoader,
        // isLoader: state.root.isLoader,
        // submit: state.root.jobSubmitError,
        jobArr: state.root.getJobData,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getJobDatas: () => {
            dispatch(getJobData())
        },
        // clearAllState: () => {
        //     dispatch({ type: ActionType.LOGOUT })
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


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
    },
    class: {
        color: '#fff',
        fontSize: 15,
        // marginLeft: 5,
        // alignItems:"center",
        // justifyContent:"center"
    },
    classCompany: {
        color: "#87ceeb",
        fontWeight: 'bold',
        fontSize: 22,
        // marginLeft: 10
    },
    fab: {
        position: 'absolute',
        backgroundColor: '#87cefa',
        margin: 18,
        right: 0,
        bottom: 0,
    },
})
