import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_1556_322}>
        <View style={styles.View_1556_323}>
          <Text style={styles.Text_1556_323}>Powered by Bravo</Text>
        </View>
        <View style={styles.View_1556_324}>
          <Text style={styles.Text_1556_324}>🥑FOOODIES🌮</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1556_322: {
    width: 264.70587158203125,
    minWidth: 264.70587158203125,
    height: 396.99102783203125,
    minHeight: 396.99102783203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55,
    top: 388,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1556_323: {
    width: 264.70587158203125,
    top: 329.1103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_1556_323: {
    color: "rgba(214, 214, 214, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_324: {
    width: 251,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7
  },
  Text_1556_324: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "none"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
