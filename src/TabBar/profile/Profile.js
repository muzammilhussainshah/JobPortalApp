import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { connect } from 'react-redux';
// import FAB from 'react-native-fab'
// import Entypo from "react-native-vector-icons/Entypo";


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            // <View>
            //     {/* <Text>hello</Text> */}
            <FAB
                
                style={styles.fab}
                icon="plus"
                onPress={() => alert('hello')}>
            </FAB>
            // </View>

            // <FAB
            //     buttonColor="red"
            //     iconTextColor="#FFFFFF"
            //     onClickAction={() => { alert('hello') }}
            //     visible={true}
            //     iconTextComponent={< Icon name="plus" />} >

            // </FAB>


        );
    }
}

export default connect(null, null)(Profile);

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        color: 'blue'
    },
})