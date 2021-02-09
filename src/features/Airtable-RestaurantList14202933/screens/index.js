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
      <View style={styles.View_1677_1}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8688/ca54/533b8a5cd51619167cb99aef26a59675"
          }}
          style={styles.ImageBackground_1677_2}
        />
        <View style={styles.View_1677_3}>
          <Text style={styles.Text_1677_3}>Name</Text>
        </View>
        <View style={styles.View_1677_4}>
          <Text style={styles.Text_1677_4}>Short description</Text>
        </View>
        <View style={styles.View_1677_5}>
          <Text style={styles.Text_1677_5}>Cost</Text>
        </View>
      </View>
      <View style={styles.View_1677_6}>
        <View style={styles.View_1677_8}>
          <Text style={styles.Text_1677_8}>Local Food (via Airtable)</Text>
        </View>
        <View style={styles.View_1677_9} />
        <View style={styles.View_1677_10}>
          <Text style={styles.Text_1677_10}>LONDON</Text>
        </View>
        <View style={styles.View_1677_22}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cd7/6c97/3aca7aa77863584c00f07b6c6b7b7721"
            }}
            style={styles.ImageBackground_1677_23}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1677_1: {
    width: 183,
    minWidth: 183,
    height: 237,
    minHeight: 237,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 182,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1677_2: {
    width: 154,
    minWidth: 154,
    height: 143,
    minHeight: 143,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 0,
    resizeMode: "cover"
  },
  View_1677_3: {
    width: 168,
    minWidth: 168,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 153
  },
  Text_1677_3: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1677_4: {
    width: 168,
    minWidth: 168,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 177
  },
  Text_1677_4: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1677_5: {
    width: 168,
    minWidth: 168,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 200
  },
  Text_1677_5: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1677_6: {
    width: 375,
    minWidth: 375,
    height: 182,
    minHeight: 182,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1677_8: {
    width: 343,
    minWidth: 343,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 128
  },
  Text_1677_8: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1677_9: {
    width: 90,
    minWidth: 90,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 82,
    backgroundColor: "rgba(255, 229, 0, 1)"
  },
  View_1677_10: {
    width: 90,
    minWidth: 90,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 84
  },
  Text_1677_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1677_22: {
    width: 55,
    minWidth: 55,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 22,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1677_23: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 18,
    resizeMode: "cover"
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
