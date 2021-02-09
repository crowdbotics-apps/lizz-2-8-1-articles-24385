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
      <View style={styles.View_1677_12}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3428/14d7/9fab7857b0a3728586903fbfa0e0bced"
          }}
          style={styles.ImageBackground_1677_13}
        />
        <View style={styles.View_1677_14}>
          <Text style={styles.Text_1677_14}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            tempus vulputate congue vestibulum neque. Lectus pellentesque
            convallis ornare a viverra elementum semper vestibulum enim. Cursus
            magna velit ultrices eget faucibus. At maecenas mauris a sit. Semper
            id non adipiscing purus at orci ac fringilla. Justo libero pharetra
            sed dictum duis fringilla sit eget.
          </Text>
        </View>
        <View style={styles.View_1677_15}>
          <Text style={styles.Text_1677_15}>About</Text>
        </View>
        <View style={styles.View_1677_16}>
          <Text style={styles.Text_1677_16}>Resto Name</Text>
        </View>
        <View style={styles.View_1677_17}>
          <View style={styles.View_1677_18} />
          <View style={styles.View_1677_19}>
            <Text style={styles.Text_1677_19}>DISTRICT</Text>
          </View>
        </View>
        <View style={styles.View_1677_20}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3cf/43ef/33d5017417f5f715a8fea57b269636c1"
            }}
            style={styles.ImageBackground_1677_21}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1677_12: {
    width: 375,
    minWidth: 375,
    height: 812,
    minHeight: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1677_13: {
    width: 375,
    minWidth: 375,
    height: 274,
    minHeight: 274,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 193,
    resizeMode: "cover"
  },
  View_1677_14: {
    width: 335,
    minWidth: 335,
    minHeight: 190,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 542
  },
  Text_1677_14: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1677_15: {
    width: 156,
    minWidth: 156,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 507
  },
  Text_1677_15: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1677_16: {
    width: 335,
    minWidth: 335,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 135
  },
  Text_1677_16: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1677_17: {
    width: 90,
    minWidth: 90,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 85
  },
  View_1677_18: {
    width: 90,
    minWidth: 90,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1677_19: {
    width: 90,
    minWidth: 90,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1677_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1677_20: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 31,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1677_21: {
    width: 14,
    minWidth: 14,
    height: 14,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 10,
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
