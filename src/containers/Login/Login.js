import React,{Component} from 'react'
import { SafeAreaView,StyleSheet, View,Text,Image,Animated } from 'react-native';
import { Button } from 'native-base';
import { setNewStack } from '../../Navigation/NewStack/NewStack';
import * as firebase from 'firebase';
import {facebookLogin} from '../../store/actions/actionCreators';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import TinderLogo from '../../assets/Tinder-Logo.png';
import {LoginManager,AccessToken} from 'react-native-fbsdk';
import {firebaseConfig} from './misc';
  
firebase.initializeApp(firebaseConfig);

class Login extends Component {

    state = {
        errorMessage: null,
        loading:false,
        disabledButton:false,
        animation: new Animated.Value(0)
    }

  componentWillMount = () => {
      Animated.timing(this.state.animation,{
          toValue:1,
          duration:2000
      }).start();
  }

  loginWithFacebook = () => {
    this.setState({
        loading:true,
        disabledButton:true
    })
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
        result => {
          if(result.isCancelled){
            this.setState({
                loading:false,
                disabledButton:false
            })
          }else{
            AccessToken.getCurrentAccessToken().then(token => {
                const credential = firebase.auth.FacebookAuthProvider.credential(token.accessToken);
                firebase.auth().signInWithCredential(credential).then(data => {
                    this.props.facebookLogin(data);
                    setNewStack();
                })
            })
            console.log("Logged In!")
          }
        },
        error => {
            console.log(error)
            alert("There is an error with your login!Try again");
            this.setState({
                loading:false,
                disabledButton:false
            })
        }
      );
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={{opacity:this.state.animation,justifyContent:"center",alignItems:"center"}}>
                <View style={styles.containerOfAll}>
                    <View styles={styles.titleContainer}>
                        <Text style={styles.title}>
                            Tinder
                        </Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={TinderLogo} style={styles.image}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button disabled={this.state.disabledButton} rounded dark onPress={this.loginWithFacebook}>
                            <Text style={styles.buttonText}>
                                {this.state.loading ? "Loading ..." : "Continue with Facebook"}
                            </Text>
                        </Button>
                    </View>
                </View>
            </Animated.View>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        height:"100%"
    },
    title:{
        fontFamily:"Roboto-Medium",
        fontSize:60
    },
    titleContainer:{
        marginBottom:20
    },
    imageContainer:{
        marginTop:20,
        marginBottom:20
    },
    image:{
        width:300,
        height:300
    },
    buttonContainer:{
        marginTop:20
    },
    containerOfAll:{
        marginTop:100,
        alignItems:"center"
    },
    buttonText:{
        fontFamily:"Roboto-Light",
        color:"#fff",
        padding:10,
        paddingLeft:40,
        paddingRight:40
    }
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({facebookLogin},dispatch);
}

export default connect(null,mapDispatchToProps)(Login);