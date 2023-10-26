
//testing
import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import Styles from './Style'
import { responsiveFontSize,responsiveHeight, responsiveWidth, useResponsiveFontSize } from './RESPONSIVEdimensions '

const DATA = [
  {
    title: 'ALL',
    icon: require('./src/image/search.png'),
  },
  {
    title: 'Chair',
    icon: require('./src/image/chair.png'),
  },
  {
    title: 'Table',
    icon: require('./src/image/table.png'),
  },
  {
    title: 'Sofa',
    icon: require('./src/image/sofa.png'),
  },
  {
    title: 'Lamp',
    icon: require('./src/image/floor-lamp.png'),
  }
]


const App = () => {
  return (
    <View style={Styles.Cointainer}>
      <View style={Styles.header}>
        <View style={Styles.headerLeftView}>

          <Text style={{fontSize:responsiveFontSize(3.7),padding:responsiveWidth(2)}}>
            Find Best Furnitures
          </Text>
        
        </View>

        <View style={Styles.headerRightView}>

          <View style={[Styles.headerItemIcon,{ width:'35%',}]}>
          <Image style={[Styles.itemIcon,{ height:responsiveHeight(8), width:responsiveWidth(8.5),resizeMode:'contain',marginLeft:responsiveWidth(9)}]}
          source={require('./src/Image/search.png')}/>
             
          </View>

          <View style={[Styles.headerItemIcon,{ width:'35%',}]}>
          <Image style={[Styles.itemIcon,{height:responsiveHeight(8), width:responsiveWidth(8.5),marginLeft:responsiveWidth(5),resizeMode:'contain'}]}source={require('./src/Image/shopping-cart.png')}/>
             
          </View>
        </View>
      </View>
      </View>
  )
}

export default App

