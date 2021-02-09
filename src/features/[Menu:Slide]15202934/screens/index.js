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
      <View style={styles.View_1556_313}>
        <View style={styles.View_1556_314}>
          <Text style={styles.Text_1556_314}>FOOODIES</Text>
        </View>
        <View style={styles.View_1556_315}>
          <Text style={styles.Text_1556_315}>DAILY DIGEST</Text>
        </View>
        <View style={styles.View_1556_316}>
          <Text style={styles.Text_1556_316}>BARCELONA</Text>
        </View>
        <View style={styles.View_1556_317}>
          <Text style={styles.Text_1556_317}>LONDON</Text>
        </View>
        <View style={styles.View_1556_318}>
          <Text style={styles.Text_1556_318}>BERLIN</Text>
        </View>
        <View style={styles.View_1556_319}>
          <Text style={styles.Text_1556_319}>NEW YORK</Text>
        </View>
        <View style={styles.View_1556_320} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1556_313: {
    width: 188,
    minWidth: 188,
    height: 812,
    minHeight: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 54, 255, 1)",
    overflow: "hidden"
  },
  View_1556_314: {
    width: 188,
    minWidth: 188,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 62
  },
  Text_1556_314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_1556_315: {
    width: 188,
    minWidth: 188,
    minHeight: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 153
  },
  Text_1556_315: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_316: {
    width: 188,
    minWidth: 188,
    minHeight: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 221
  },
  Text_1556_316: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_317: {
    width: 188,
    minWidth: 188,
    minHeight: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 290
  },
  Text_1556_317: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_318: {
    width: 188,
    minWidth: 188,
    minHeight: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 357
  },
  Text_1556_318: {
    color: "rgba(128, 154, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_319: {
    width: 188,
    minWidth: 188,
    minHeight: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 425
  },
  Text_1556_319: {
    color: "rgba(128, 154, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_320: {
    width: 137,
    minWidth: 137,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 125,
    backgroundColor: "rgba(255, 255, 255, 1)"
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
