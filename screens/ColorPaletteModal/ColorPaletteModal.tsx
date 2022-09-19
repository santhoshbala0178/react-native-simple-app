import React, { useCallback, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { FlatList, Switch } from 'react-native-gesture-handler';
import { COLORS } from '../../utils/constants';
import { ModalContainer, PaletteName, SubmitButton, SubmitButtonText , ColorContainer} from './ColorPaletteModal.style';
 
 const ColorPaletteModal = ({navigation}) => { 
   const [paletteName, setPaletteName] = useState('');
   const [selectedColors, setSelectedColors] = useState([])

   const handleSubmit = useCallback(() => {
    if (!paletteName) {
        Alert.alert("Please enter palette Name");
    } else if (selectedColors.length < 3) {
        Alert.alert("Please select atleast 3 colors");
    }
    else {
        const newColorPalette = {
            paletteName,
            colors: selectedColors
        };
        navigation.navigate('Home', {newColorPalette})
    }
   }, [paletteName, selectedColors]);

   const handleValueChange = ((value, color) => {
    if (value) {
        setSelectedColors([...selectedColors, color])
    } else {
        setSelectedColors(selectedColors.filter((selectedColor) => selectedColor.colorName !== color.colorName))
    }
   });

   return (
    <ModalContainer> 
        <View>
            <Text>Name of your Palette</Text>
            <PaletteName placeholder='Enter the name of the palette' value={paletteName} onChangeText={setPaletteName}/>
        </View>
        <SubmitButton onPress={handleSubmit}>
            <SubmitButtonText>Submit</SubmitButtonText>
        </SubmitButton>
        <FlatList data={COLORS} keyExtractor={(item) => item.colorName} renderItem={({item}) =>  <ColorContainer>
            <Text>{item.colorName}</Text>
            <Switch value={!!selectedColors.find(color => color.colorName === item.colorName)} 
            onValueChange={(selected) => handleValueChange(selected, item)}/>
        </ColorContainer>} />
    </ModalContainer>
   );
 };
 
 
 export default ColorPaletteModal;
 