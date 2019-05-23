import React,{Component} from 'react';
import {View,Text,StyleSheet,SafeAreaView,AsyncStorage} from 'react-native';
import {Button} from 'native-base';
import {facebookLogout} from '../../store/actions/actionCreators';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Navigation} from 'react-native-navigation';
import {setRootStack} from '../../Navigation/NewStack/NewStack';
import {LoginManager} from 'react-native-fbsdk';

class Home extends Component{

    logout = () => {
        LoginManager.logOut();
        setRootStack();
    }

    render(){
        return (
            <SafeAreaView>
                <View>
                    <Text>This is Home.js</Text>
                </View>
                <View>
                    <Button dark rounded onPress={this.logout}>
                        <Text>
                            Logout from Facebook
                        </Text>
                    </Button>
                </View>
            </SafeAreaView>
        )
    }
}


const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({facebookLogout},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);