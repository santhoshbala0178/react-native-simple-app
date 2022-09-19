import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components";

export const HomeScreenContainer = styled(View)`
    padding: 10px;
    backgroundColor: white;
    height: 100%;
    width: 100%;
`;

export const PaletteList = styled(FlatList)`
    margin: 20px;
`;

export const AddPalette = styled(TouchableOpacity)`
    background: gray;
    padding: 5px;
    border-radius: 4px;
`;

export const AddPaletteText = styled(Text)`
    font-size: 16px;
    font-weight: bold;
    color: white;
`;