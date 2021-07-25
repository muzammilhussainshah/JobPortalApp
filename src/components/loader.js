import React, { Component } from 'react';
import { View, Text, style, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Spinner, } from 'native-base';
// import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';






class Loading extends Component {

    render() {
        return (
            <View style= {styles.Bubbles}>
                <ActivityIndicator size={100} color="#fff" style={{ paddingBottom: 5 }} />
                {/* <ActivityIndicator></ActivityIndicator> */}
                {/* <Bars size={20} color="red" /> */}
                {/* <Pulse size={10} color="#FFCB05" /> */}
                {/* <DoubleBounce size={10} color="#1CAFF6" /> */}
            </View>
        );
    }
}

export default Loading;




const styles = StyleSheet.create({

    Bubbles: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:25
    },

});