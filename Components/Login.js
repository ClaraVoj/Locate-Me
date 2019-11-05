import React from 'react';
import { StyleSheet, TextInput, View, Keyboard, Button } from 'react-native'

 
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { num: "" }
        this.submit = this.submit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {
        console.log(this.props.navigation)
    }

    async submit(){
        console.log(this.state.num);
    }

    validate = (text) => {
        // console.log(this.state)
        // console.log(this.props.navigation)
        let reg = /^0[6-7]{1}[0-9]{8}/;
        if (reg.test(text) === false){
            console.log('numero invalide')
        this.setState({num:text}) 
        return false;   
        }
        else {
            this.setState({num:text})
            console.log('numero valide')
            this.props.navigation.navigate("Maps")
        }
    }
        render(){
            return(

                <View style={styles.container}>
                    <TextInput
                    style={styles.input}
                        placeholders="Tape your number phone"
                        onChangeText={(num) => this.setState({num: num})}
                        keyboardType={'numeric'}
                        value={this.state.num}

                    />
                    
                    <Button
                    title="Go"
                    color="#fd79a8"
                    onPress={() => this.validate(this.state.num)}
                    />
                </View> 
            );
        }
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingTop: 40,
          backgroundColor: '#fff',
          alignItems: 'center',    
          justifyContent: 'center',

        },
        input: {
            height: 40,
            borderWidth: 5,
            width: '100%'
        }
      });

export default Login;