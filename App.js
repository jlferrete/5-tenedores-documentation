import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";

import PreLoader from './app/components/PreLoader';

import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from "./app/components/forms/testForm";


export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      testFormValue: {
        user: "",
        password: ""
      },
      testFormError: "",
      loaded: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 2000);
  }

  onChange = testFormValue => {
    this.setState({
      testFormValue
    });
  }

  sendFormTest = () => {
    console.log(this.state);
    const validate = this.refs.formTest.getValue();

    if (validate) {
      console.log('Login Correcto');
      this.setState({
        testFormError: ""
      })
    } else {
      console.log('Login Incorrecto');
      this.setState({
        testFormError: "Rellena todos los campos"
      })
    }

    // console.log(this.state.testFormValue);
  }

  render() {

    const { testFormValue, testFormError, loaded } = this.state;

    if (!loaded) {
      return (<PreLoader />)
    } else {
      return (
        <View style={styles.container}>
          <Form
            ref="formTest"
            type={LoginStruct}
            options={LoginOptions}
            value={testFormValue}
            onChange={v => this.onChange(v)}
          />
          <Button
            title="Login"
            onPress={this.sendFormTest.bind(this)} />

          <Text style={styles.testFormErrorText}>{testFormError}</Text>

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,

  },
  testFormErrorText: {
    paddingTop: 30,
    color: '#f00',
    textAlign: 'center'
  }
});
