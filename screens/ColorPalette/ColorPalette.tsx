 import React from 'react';
import ColorBox from '../../components/ColorBox/ColorBox';
import Header from '../../components/Header/Header';
import { ColorListView } from './ColorPalette.style';
 
 const ColorPalette = ({route}) => {
   const {colors, paletteName} = route.params
   return (
    <ColorListView
      data={colors}
      renderItem={({item}) => <ColorBox colorName={item.colorName} hexCode={item.hexCode} />}
      keyExtractor={(item) => item.hexCode}
      ListHeaderComponent={<Header title={paletteName}/>}/>
   );
 };
 
 
 export default ColorPalette;
 