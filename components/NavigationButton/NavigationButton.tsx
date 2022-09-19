import React from 'react';
import { Button, ButtonText } from './NavigationButton.style';

export const NavigationButton = ({navigation, paletteName, colors}) => {
    return ( <Button   onPress={() => navigation.push('ColorPalette', {paletteName, colors})}>
    <ButtonText>{paletteName}</ButtonText>
  </Button>)
}