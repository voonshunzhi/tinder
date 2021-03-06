import {Navigation} from 'react-native-navigation';

export const setNewStack = () => {
    Navigation.setRoot({
        root:{
          bottomTabs:{
            children:[{
              stack:{
                children:[{
                  component:{
                    name:"tinder.Profile",
                    options:{
                      topBar:{
                        visible:true,
                        title:{
                          text:"Profile"
                        }
                      }
                    }
                  }
                }],
                options:{
                  bottomTab:{
                    text:"Profile"
                  }
                }
              },
            },
            {
              stack:{
                children:[{
                  component:{
                    name:"tinder.Home",
                    options:{
                      topBar:{
                        visible:true,
                        title:{
                          text:"Home"
                        }
                      }
                    }
                  }
                }],
                options:{
                  bottomTab:{
                    text:"Home"
                  }
                }
              }
            },
            {
              stack:{
                children:[{
                  component:{
                    name:"tinder.Matches",
                    options:{
                      topBar:{
                        visible:true,
                        title:{
                          text:"Matches"
                        }
                      }
                    }
                  }
                }],
                options:{
                  bottomTab:{
                    text:"Matches"
                  }
                }
              }
            }],
          }
        }
      })
}


export const setRootStack = () => {
  Navigation.setRoot({
    root:{
      stack:{
        children:[{
          component:{
            name:"tinder.Login",
            options:{
              topBar:{
                visible:false
              }
            }
          }
        }]
      }
    }
  })
}