import React from "react";
import { SafeAreaView, Text, Platform, View } from "react-native";
import { Input, Item, Icon } from "native-base";

const currencyPerRupee = {
  LKR: 0.2,
  INR: 0.3
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: 0.0
    };
  }

  doConversion = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewStyle}>
          <View style={styles.resultContainer}>
            <Text style={styles.textStyle}>{this.state.resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Item regular>
              <Input
                placeholderTextColor="#8B78E6"
                style={styles.input}
                placeholder="Enter USD..."
                onChangeText={input => {
                  this.doConversion(input);
                }}
              />
            </Item>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#EA7773"
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
  },
  viewStyle: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 20 : 0
  },
  resultContainer: {
    marginTop: 20,
    height: 70,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    borderWidth: 5,
    backgroundColor: "#8B78E6",
    alignItems: "center"
  },
  input: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    color: "white",
    margin: 5
  },
  inputContainer: {
    marginTop: 5,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BB2CD9"
  }
};
