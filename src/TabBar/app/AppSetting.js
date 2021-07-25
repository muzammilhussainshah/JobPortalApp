import React from 'react';
import {

    
    StyleSheet,
    View, Image, Text,
    ScrollView,
    Platform, PermissionsAndroid, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';


// import LinearGradient from 'react-native-linear-gradient';
// import { Actions} from 'react-native-router-flux';
// import JobPost from './profile/jobPost';


class Appsetting extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     job: [
        //         { company: "Software House", jobTitle: "Developer", location: "Bahadurbad", referenceNo: '1234', jobStatus: 'Job Status', Salary: '20,000', experience: '1 Year', keyFector: 'Key Factor', jobDescription: 'I think just ever mind not a confirm this problem but every bady soo hsettingy on Friday', closingDate: '10-Nov-2019', dateSubmit: '10-Sep-2019' },
        //         { company: "Honda", jobTitle: "Machanic", location: "Gulshan-e-Iqbal", referenceNo: '1234', jobStatus: 'Job Status', Salary: '20,000', experience: '1 Year', keyFector: 'Key Factor', jobDescription: 'I think just ever mind not a confirm this problem but every bady soo happy on Friday', closingDate: '10-Nov-2019', dateSubmit: '10-Sep-2019' },
        //         { company: "Uber", jobTitle: "Rider", location: "Nazimabad", referenceNo: '1234', jobStatus: 'Job Status', Salary: '20,000', experience: '1 Year', keyFector: 'Key Factor', jobDescription: 'I think just ever mind not a confirm this problem but every bady soo happy on Friday', closingDate: '10-Nov-2019', dateSubmit: '10-Sep-2019' },
        //         { company: "Careem", jobTitle: "Rider", location: "Orangi Town", referenceNo: '1234', jobStatus: 'Job Status', Salary: '20,000', experience: '1 Year', keyFector: 'Key Factor', jobDescription: 'I think just ever mind not a confirm this problem but every bady soo happy on Friday', closingDate: '10-Nov-2019', dateSubmit: '10-Sep-2019' },
        //         { company: "Careem", jobTitle: "Rider", location: "Orangi Town", referenceNo: '1234', jobStatus: 'Job Status', Salary: '20,000', experience: '1 Year', keyFector: 'Key Factor', jobDescription: 'I think just ever mind not a confirm this problem but every bady soo happy on Friday', closingDate: '10-Nov-2019', dateSubmit: '10-Sep-2019' },
        //         { company: "Careem", jobTitle: "Rider", location: "Orangi Town", referenceNo: '1234', jobStatus: 'Job Status', Salary: '20,000', experience: '1 Year', keyFector: 'Key Factor', jobDescription: 'I think just ever mind not a confirm this problem but every bady soo happy on Friday', closingDate: '10-Nov-2019', dateSubmit: '10-Sep-2019' }
        //     ]
        // };
    }

    // onLogout = () => {
    //     // firebase.auth().signOut()
    //     alert('LogOut');
    // }

    

    render() {
        return (

            <View>

                <Text>Appjjjjjjjjjjjjjjjjjjjjjjj</Text>


            </View>

            // <LinearGradient
            //     colors={['#0054BC', '#00D5EF']}
            //     locations={[0, 1]}
            //     end={{ x: 0.0, y: 1.0 }} start={{ x: 0.5, y: 0.25 }}
            //     style={styles.container}
            // >
            //     <View style={{ flex: 0.1, justifyContent: "space-between", marginVertical: '2%', flexDirection: 'row' }}>
            //         <View style={{ flex: 2, marginLeft: '3%' }}>
            //             <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}> Profile </Text>
            //         </View>
            //         <View style={{ flex: 0.5 }}>
            //             <TouchableOpacity onPress={this.onLogout}><Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}> Logout </Text></TouchableOpacity>
            //         </View>
            //     </View>

            //     <ScrollView style={{ flex: 8, width: "95%", }}>

            //         {
            //             this.state.job.map((user, index) => {
            //                 return (
            //                     <View key={index} style={{
            //                         // flex: 3,
            //                         // alignItems: "center",
            //                         justifyContent: "center",
            //                         borderColor: "blue",
            //                         borderWidth: 0.5,
            //                         // backgroundColor:"yellow",
            //                         height: 120,
            //                         borderRadius: 5,
            //                         marginBottom: 3
            //                     }}>
            //                         <TouchableOpacity style={{ marginTop: 8 }} onPress={() => {
            //                             Actions.JobDetails();
            //                         }}>

            //                             <Text style={styles.class} key={index}>Company : {user.company}</Text>
            //                             <Text style={styles.class} key={index}>Job Title  : {user.jobTitle}</Text>
            //                             <Text style={styles.class} key={index}>Location  : {user.location}</Text>
            //                         </TouchableOpacity>

            //                     </View>
            //                 )

            //             })
            //         }
            //     </ScrollView>


            // </LinearGradient>
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


export default connect(null, mapDispatchToProps)(Appsetting);



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
        fontSize: 18,
        marginLeft: 20
    }
})
