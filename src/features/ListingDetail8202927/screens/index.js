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
      <View style={styles.View_1556_328}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3428/14d7/9fab7857b0a3728586903fbfa0e0bced"
          }}
          style={styles.ImageBackground_1556_329}
        />
        <View style={styles.View_1556_330}>
          <Text style={styles.Text_1556_330}>
            Carrer de la Lleialtat, 16 08001 Barcelona
          </Text>
        </View>
        <View style={styles.View_1556_331}>
          <Text style={styles.Text_1556_331}>
            The Fried Chicken Bun Tacos Criollo Gringa pancakes
          </Text>
        </View>
        <View style={styles.View_1556_332}>
          <Text style={styles.Text_1556_332}>
            Gringa started life out as a Food truck, one of the first in
            Barcelona, a blue Citroen called Eureka Street Food. Run by
            Priscilla, a native Californian, and Gascon. After five years, they
            acquired a new partner, Juan and found their location in the Raval.
            A barrio in flux with many faces: principally a migrant
            neighborhood, with investment funds buying up entire buildings and
            leaving them empty – useful for ‘drug flats’. Things are changing,
            Barcelona is booming and El Raval and its attractive rents are
            becoming a real contender.
          </Text>
        </View>
        <View style={styles.View_1556_333}>
          <Text style={styles.Text_1556_333}>12€ 9€ 8€</Text>
        </View>
        <View style={styles.View_1556_334}>
          <Text style={styles.Text_1556_334}>Order</Text>
        </View>
        <View style={styles.View_1556_335}>
          <Text style={styles.Text_1556_335}>About</Text>
        </View>
        <View style={styles.View_1556_336}>
          <Text style={styles.Text_1556_336}>
            Mon-Fri: 19:00 - 0:00h Sat-Sun: 12:00 - 16:00h
          </Text>
        </View>
        <View style={styles.View_1556_337}>
          <Text style={styles.Text_1556_337}>La Gringa</Text>
        </View>
        <View style={styles.View_1556_338}>
          <View style={styles.View_1556_339} />
          <View style={styles.View_1556_340}>
            <Text style={styles.Text_1556_340}>RAVAL</Text>
          </View>
        </View>
        <View style={styles.View_1556_341}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3cf/43ef/33d5017417f5f715a8fea57b269636c1"
            }}
            style={styles.ImageBackground_1556_342}
          />
          <View style={styles.View_1556_343} />
        </View>
        <View style={styles.View_1556_344}>
          <View style={styles.View_1556_345} />
          <View style={styles.View_1556_346}>
            <Text style={styles.Text_1556_346}>Call</Text>
          </View>
        </View>
        <View style={styles.View_1556_350}>
          <View style={styles.View_1556_351} />
          <View style={styles.View_1556_352}>
            <Text style={styles.Text_1556_352}>Share</Text>
          </View>
        </View>
        <View style={styles.View_1556_347}>
          <View style={styles.View_1556_348} />
          <View style={styles.View_1556_349}>
            <Text style={styles.Text_1556_349}>Email</Text>
          </View>
        </View>
        <View style={styles.View_1556_353}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1425/095b/69de1a1e6f6bb4827b534bd1adb206ae"
            }}
            style={styles.ImageBackground_1556_354}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d764/29f4/7038c212680109e5d5a1dee5a46aedde"
            }}
            style={styles.ImageBackground_1556_355}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1556_328: {
    width: 375,
    minWidth: 375,
    height: 1279,
    minHeight: 1279,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(244, 244, 244, 1)",
    overflow: "hidden"
  },
  ImageBackground_1556_329: {
    width: 375,
    minWidth: 375,
    height: 274,
    minHeight: 274,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 436,
    resizeMode: "cover"
  },
  View_1556_330: {
    width: 324,
    minWidth: 324,
    minHeight: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 208
  },
  Text_1556_330: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_331: {
    width: 205,
    minWidth: 205,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 781
  },
  Text_1556_331: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_332: {
    width: 335,
    minWidth: 335,
    minHeight: 441,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 931
  },
  Text_1556_332: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_333: {
    width: 110,
    minWidth: 110,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 781
  },
  Text_1556_333: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_334: {
    width: 139,
    minWidth: 139,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 747
  },
  Text_1556_334: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_335: {
    width: 156,
    minWidth: 156,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 896
  },
  Text_1556_335: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_336: {
    width: 330,
    minWidth: 330,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 282
  },
  Text_1556_336: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_337: {
    width: 179,
    minWidth: 179,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 135
  },
  Text_1556_337: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_338: {
    width: 90,
    minWidth: 90,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 87
  },
  View_1556_339: {
    width: 90,
    minWidth: 90,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_340: {
    width: 90,
    minWidth: 90,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4
  },
  Text_1556_340: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_341: {
    width: 74,
    minWidth: 74,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 15
  },
  ImageBackground_1556_342: {
    width: 14,
    minWidth: 14,
    height: 14,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 26,
    resizeMode: "cover"
  },
  View_1556_343: {
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
  View_1556_344: {
    width: 104,
    minWidth: 104,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 370
  },
  View_1556_345: {
    width: 104,
    minWidth: 104,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 54, 255, 1)"
  },
  View_1556_346: {
    width: 104,
    minWidth: 104,
    minHeight: 39.20000076293945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.7998046875
  },
  Text_1556_346: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_350: {
    width: 104,
    minWidth: 104,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 250,
    top: 370
  },
  View_1556_351: {
    width: 104,
    minWidth: 104,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 54, 255, 1)"
  },
  View_1556_352: {
    width: 104,
    minWidth: 104,
    minHeight: 39.20000076293945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.7998046875
  },
  Text_1556_352: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_347: {
    width: 104,
    minWidth: 104,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 135,
    top: 370
  },
  View_1556_348: {
    width: 104,
    minWidth: 104,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 54, 255, 1)"
  },
  View_1556_349: {
    width: 104,
    minWidth: 104,
    minHeight: 39.20000076293945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.7998046875
  },
  Text_1556_349: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_353: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 645
  },
  ImageBackground_1556_354: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1556_355: {
    width: 21.80644989013672,
    height: 26,
    top: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14
  },
  View_2: { height: 1279 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
