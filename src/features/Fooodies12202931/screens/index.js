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
      <View style={styles.View_1556_274}>
        <View style={styles.View_1556_275}>
          <Text style={styles.Text_1556_275}>The Guides</Text>
        </View>
        <View style={styles.View_1556_276} />
        <View style={styles.View_1556_277}>
          <Text style={styles.Text_1556_277}>FOOODIES</Text>
        </View>
        <View style={styles.View_1556_278}>
          <Text style={styles.Text_1556_278}>Daily Dose</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baba/5664/302df7476d926243b2409704d02d9739"
          }}
          style={styles.ImageBackground_1556_279}
        />
        <View style={styles.View_1556_280}>
          <Text style={styles.Text_1556_280}>
            What is blonde roast and where to buy
          </Text>
        </View>
        <View style={styles.View_1556_281}>
          <Text style={styles.Text_1556_281}>Aug 11, 2020</Text>
        </View>
        <View style={styles.View_1556_282}>
          <Text style={styles.Text_1556_282}>Aug 12, 2020</Text>
        </View>
        <View style={styles.View_1556_283}>
          <Text style={styles.Text_1556_283}>
            The jury is in: here is the best fusion taqueria in Barcelona{" "}
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee90/d67a/d8462535dff4b758e898e08f530bfdd1"
          }}
          style={styles.ImageBackground_1556_284}
        />
        <View style={styles.View_1556_285}>
          <Text style={styles.Text_1556_285}>
            The most popular salad combos today
          </Text>
        </View>
        <View style={styles.View_1556_286}>
          <Text style={styles.Text_1556_286}>Aug 10, 2020</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3481/adff/36e2df24a9ae11398ceef6678f0ce3f1"
          }}
          style={styles.ImageBackground_1556_287}
        />
        <View style={styles.View_1556_288}>
          <Text style={styles.Text_1556_288}>Aug 10, 2020</Text>
        </View>
        <View style={styles.View_1556_289}>
          <Text style={styles.Text_1556_289}>
            The restaurants that turn bananas into a work of art
          </Text>
        </View>
        <View style={styles.View_1556_290}>
          <View style={styles.View_1556_291} />
          <View style={styles.View_1556_292}>
            <Text style={styles.Text_1556_292}>Barcelona</Text>
          </View>
        </View>
        <View style={styles.View_1556_293}>
          <View style={styles.View_1556_294} />
          <View style={styles.View_1556_295}>
            <Text style={styles.Text_1556_295}>London</Text>
          </View>
        </View>
        <View style={styles.View_1556_296}>
          <View style={styles.View_1556_297} />
          <View style={styles.View_1556_298}>
            <Text style={styles.Text_1556_298}>Berlin</Text>
          </View>
        </View>
        <View style={styles.View_1556_299}>
          <View style={styles.View_1556_300} />
          <View style={styles.View_1556_301}>
            <Text style={styles.Text_1556_301}>Shanghai</Text>
          </View>
        </View>
        <View style={styles.View_1556_302}>
          <View style={styles.View_1556_303} />
          <View style={styles.View_1556_304}>
            <Text style={styles.Text_1556_304}>Toronto</Text>
          </View>
        </View>
        <View style={styles.View_1556_305}>
          <View style={styles.View_1556_306} />
          <View style={styles.View_1556_307}>
            <Text style={styles.Text_1556_307}>New York</Text>
          </View>
        </View>
        <View style={styles.View_1556_308} />
        <View style={styles.View_1556_310} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75df/10ee/71b31683b2a7d1ade56483fd774f165c"
          }}
          style={styles.ImageBackground_1556_311}
        />
        <View style={styles.View_1617_2}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cd7/6c97/3aca7aa77863584c00f07b6c6b7b7721"
            }}
            style={styles.ImageBackground_1556_309}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1556_274: {
    width: 375,
    minWidth: 375,
    height: 1158,
    minHeight: 1158,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1556_275: {
    width: 179,
    minWidth: 179,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 144
  },
  Text_1556_275: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_276: {
    width: 90,
    minWidth: 90,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 87,
    backgroundColor: "rgba(0, 54, 255, 1)"
  },
  View_1556_277: {
    width: 90,
    minWidth: 90,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 91
  },
  Text_1556_277: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_278: {
    width: 170,
    minWidth: 170,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 358
  },
  Text_1556_278: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_279: {
    width: 158,
    minWidth: 158,
    height: 126,
    minHeight: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 655
  },
  View_1556_280: {
    width: 163,
    minWidth: 163,
    minHeight: 86,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 817
  },
  Text_1556_280: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_281: {
    width: 158,
    minWidth: 158,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 794
  },
  Text_1556_281: {
    color: "rgba(154, 154, 154, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_282: {
    width: 169,
    minWidth: 169,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 559
  },
  Text_1556_282: {
    color: "rgba(154, 154, 154, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_283: {
    width: 335,
    minWidth: 335,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 583
  },
  Text_1556_283: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_284: {
    width: 158,
    minWidth: 158,
    height: 126,
    minHeight: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 655,
    resizeMode: "cover"
  },
  View_1556_285: {
    width: 156,
    minWidth: 156,
    minHeight: 86,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 199,
    top: 817
  },
  Text_1556_285: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_286: {
    width: 151,
    minWidth: 151,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 199,
    top: 794
  },
  Text_1556_286: {
    color: "rgba(154, 154, 154, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_287: {
    width: 335,
    minWidth: 335,
    height: 135,
    minHeight: 135,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 900,
    resizeMode: "cover"
  },
  View_1556_288: {
    width: 169,
    minWidth: 169,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 1048
  },
  Text_1556_288: {
    color: "rgba(154, 154, 154, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_289: {
    width: 335,
    minWidth: 335,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 1072
  },
  Text_1556_289: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_290: {
    width: 104,
    minWidth: 104,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 199
  },
  View_1556_291: {
    width: 104,
    minWidth: 104,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 229, 0, 1)"
  },
  View_1556_292: {
    width: 104,
    minWidth: 104,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  Text_1556_292: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_293: {
    width: 105,
    minWidth: 105,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 135,
    top: 199
  },
  View_1556_294: {
    width: 105,
    minWidth: 105,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_295: {
    width: 105,
    minWidth: 105,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  Text_1556_295: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_296: {
    width: 104,
    minWidth: 104,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251,
    top: 199
  },
  View_1556_297: {
    width: 104,
    minWidth: 104,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_298: {
    width: 104,
    minWidth: 104,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  Text_1556_298: {
    color: "rgba(188, 168, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_299: {
    width: 104,
    minWidth: 104,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 260
  },
  View_1556_300: {
    width: 104,
    minWidth: 104,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_301: {
    width: 104,
    minWidth: 104,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  Text_1556_301: {
    color: "rgba(188, 168, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_302: {
    width: 105,
    minWidth: 105,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 135,
    top: 260
  },
  View_1556_303: {
    width: 105,
    minWidth: 105,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_304: {
    width: 105,
    minWidth: 105,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  Text_1556_304: {
    color: "rgba(188, 168, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_305: {
    width: 104,
    minWidth: 104,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251,
    top: 260
  },
  View_1556_306: {
    width: 104,
    minWidth: 104,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_307: {
    width: 104,
    minWidth: 104,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  Text_1556_307: {
    color: "rgba(188, 168, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_308: {
    width: 375,
    minWidth: 375,
    height: 238,
    minHeight: 238,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 398
  },
  View_1556_310: {
    width: 335,
    minWidth: 335,
    height: 135,
    minHeight: 135,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 411
  },
  ImageBackground_1556_311: {
    width: 214,
    minWidth: 214,
    height: 140,
    minHeight: 140,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 394
  },
  View_1617_2: {
    width: 60,
    minWidth: 60,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 22,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1556_309: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 18,
    resizeMode: "cover"
  },
  View_2: { height: 1158 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
