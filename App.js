import React from "react";
import {
  SafeAreaView,
  Text,
  Platform,
  View,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Input, Item, Header, Left, Right, Body, Title } from "native-base";

const currencyPerRupee = {
  DOLLAR: 0.2,
  RUPEE: 0.3,
  YEN: 0.5
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: 0.0
    };
  }

  buttonPressed = currency => {
    if (this.state.inputValue === "") {
      Alert.alert("Enter some value ");
    }

    let result = this.state.inputValue * currencyPerRupee[currency];
    this.setState({ resultValue: result });
  };

  doConversion = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Header>
            <Left />
            <Body>
              <Title>CConverter</Title>
            </Body>
            <Right />
          </Header>
          <View style={styles.viewStyle}>
            <View style={styles.resultContainer}>
              <Text style={styles.textStyle}>{this.state.resultValue}</Text>
            </View>
            <View style={styles.inputContainer}>
              <Item regular>
                <Input
                  placeholderTextColor="#8B78E6"
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Enter USD..."
                  onChangeText={input => {
                    this.doConversion(input);
                  }}
                />
              </Item>
            </View>
            <View style={styles.converterButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.buttonPressed("DOLLAR");
                }}
                style={styles.converterButton}
              >
                <Text style={styles.buttonText}>USD</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.buttonPressed("RUPEE");
                }}
                style={styles.converterButton}
              >
                <Text style={styles.buttonText}>RUPEE</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.buttonPressed("YEN");
                }}
                style={styles.converterButton}
              >
                <Text style={styles.buttonText}>YEN</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.buttonPressed("DOLLAR");
                }}
                style={styles.converterButton}
              >
                <Text style={styles.buttonText}>BITCON</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.buttonPressed("RUPEE");
                }}
                style={styles.converterButton}
              >
                <Text style={styles.buttonText}>AUS</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.buttonPressed("YEN");
                }}
                style={styles.converterButton}
              >
                <Text style={styles.buttonText}>CAN</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.buttonPressed("DOLLAR");
                }}
                style={styles.converterButton}
              >
                <Text style={styles.buttonText}>TRX</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.buttonPressed("RUPEE");
                }}
                style={styles.converterButton}
              >
                <Text style={styles.buttonText}>TRN</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.buttonPressed("YEN");
                }}
                style={styles.converterButton}
              >
                <Text style={styles.buttonText}>LTE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white"
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
  },
  converterButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "white",
    borderWidth: 2
  },
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2B2B52",
    width: "33.33%",
    height: 120,
    borderColor: "white",
    borderWidth: 2
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    fontWeight: "bold"
  }
};
