import React,{ Component } from 'react';
import {View,Text,SafeAreaView,StyleSheet,Image} from 'react-native';
import {connect} from 'react-redux';

class Profile extends Component{
    render(){
        const user = this.props.User.accessToken;
        return(
            <SafeAreaView>
                {/* <View>
                    <Text style={{fontFamily:"Roboto-Thin"}}>Username: {user.displayName}</Text>
                </View>
                <View>
                    <Text style={{fontFamily:"Roboto-Thin"}}>Email: {user.email}</Text>
                </View> */}
                <Text>Hello.js</Text>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        User:state.User
    }
}

export default connect(mapStateToProps,null)(Profile);