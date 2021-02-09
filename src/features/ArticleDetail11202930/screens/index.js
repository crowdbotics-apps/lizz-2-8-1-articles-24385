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
      <View style={styles.View_1556_356}>
        <View style={styles.View_1556_357}>
          <Text style={styles.Text_1556_357}>
            Here is the best fusion taqueria in Barcelona
          </Text>
        </View>
        <View style={styles.View_1556_358}>
          <Text style={styles.Text_1556_358}>Aug 12, 2019 Jamie Oliver</Text>
        </View>
        <View style={styles.View_1556_359} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a16/965b/3d23a98a52ca45faba3fd68797cd2de6"
          }}
          style={styles.ImageBackground_1556_360}
        />
        <View style={styles.View_1556_361}>
          <Text style={styles.Text_1556_361}>TLRD: it’s Gringa Barcelona</Text>
        </View>
        <View style={styles.View_1556_362}>
          <Text style={styles.Text_1556_362}>
            Great Mexican food is abundant in Barcelona, but as a few million
            McMansion in the suburbs will attest, so is bad taste. And deciding
            where to eat, in a city with thousands upon thousands of options and
            some of its best restaurants hiding in mini-malls, can devolve into
            a special kind of hell. Who can you trust to steer you toward the
            perfect taqueria? Tripadvisor? Friends? Danny Trejo? Fortunately,
            dear food vagabond, like Virgil guided Dante through the Inferno, we
            shall light your path to the seven best taquerias in the Barcelona
            area (Long Beach included). Why seven? Because shoehorning a Divine
            Comedy reference into the intro of a food article is just what your
            Mexican food search requires. And what could possibly be funnier
            than 14th-century Italian narrative poetry?! Nothing. Now let’s get
            hungry.
          </Text>
        </View>
        <View style={styles.View_1556_363} />
        <View style={styles.View_1556_364} />
        <View style={styles.View_1556_365}>
          <Text style={styles.Text_1556_365}>See the guide</Text>
        </View>
        <View style={styles.View_1556_366}>
          <Text style={styles.Text_1556_366}>Here’s Gringa in our guide</Text>
        </View>
        <View style={styles.View_1556_367}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60dc/78b0/ba45f4e1d386355aa7729816786f4c79"
            }}
            style={styles.ImageBackground_1556_368}
          />
          <View style={styles.View_1556_369} />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1556_356: {
    width: 375,
    minWidth: 375,
    height: 1294,
    minHeight: 1294,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(244, 244, 244, 1)",
    overflow: "hidden"
  },
  View_1556_357: {
    width: 334,
    minWidth: 334,
    minHeight: 81,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 94
  },
  Text_1556_357: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_358: {
    width: 214,
    minWidth: 214,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 190
  },
  Text_1556_358: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_359: {
    width: 375,
    minWidth: 375,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 243
  },
  ImageBackground_1556_360: {
    width: 185,
    minWidth: 185,
    height: 219,
    minHeight: 219,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 221
  },
  View_1556_361: {
    width: 334,
    minWidth: 334,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 499
  },
  Text_1556_361: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_362: {
    width: 334,
    minWidth: 334,
    minHeight: 570,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 538
  },
  Text_1556_362: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_363: {
    width: 335,
    minWidth: 335,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 1108,
    backgroundColor: "rgba(214, 214, 214, 1)"
  },
  View_1556_364: {
    width: 139,
    minWidth: 139,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 1177,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_365: {
    width: 139,
    minWidth: 139,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 1179
  },
  Text_1556_365: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_366: {
    width: 214,
    minWidth: 214,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 1132
  },
  Text_1556_366: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_367: {
    width: 74,
    minWidth: 74,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2,
    top: 15
  },
  ImageBackground_1556_368: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 25,
    resizeMode: "cover"
  },
  View_1556_369: {
    width: 74,
    minWidth: 74,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2: { height: 1294 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
