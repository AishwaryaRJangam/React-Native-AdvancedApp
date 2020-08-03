import React, { Component } from 'react';
import { View, Text , StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from '../components/common';
import LoginForm from '../components/LoginForm';

export default class Storage extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyD647GFFqUV3wmZRtqEe46DlFy0NgCd_Z8",
            authDomain: "authentication-58b10.firebaseapp.com",
            databaseURL: "https://authentication-58b10.firebaseio.com",
            projectId: "authentication-58b10",
            storageBucket: "authentication-58b10.appspot.com",
            messagingSenderId: "682203171789",
            appId: "1:682203171789:web:846e5249a8162ba5a81284",
            measurementId: "G-L7RL8JPCH2"
        
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }

        });
    }

    renderContent() {
    switch (this.state.loggedIn) {
        case true:
            return (
            <Button style={styles.header} onPress={() => firebase.auth().signOut()}> 
            Log Out 
            </Button>
            );
        case false:
            return (
                <View>
            <LoginForm />
            </View>
            );
        default:
            return <Spinner size="large" />;
    }
    }

    render() {
        return (
            <View>
                {/* <Header headertext="Authentication" style={styles.header} /> */}
                <Text style={styles.heading}>Login Form</Text>

                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    header: {
        // marginTop: 30   
    },
    heading: {
        padding: 16,
        marginTop: 30,
        fontSize: 20,
        color: 'white',
        backgroundColor: 'green',
    }
  };