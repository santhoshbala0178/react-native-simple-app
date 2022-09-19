/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
import { ColorBoxText, ColorBoxView } from './ColorBox.style';
 
 type ColorBoxProps = {
    colorName: String,
    hexCode: String
 }

 const ColorBox = ({colorName, hexCode}: ColorBoxProps) => {
   return (<ColorBoxView color={hexCode}> 
     <ColorBoxText>{colorName}</ColorBoxText>
   </ColorBoxView>)
 }
 
 export default ColorBox;
 