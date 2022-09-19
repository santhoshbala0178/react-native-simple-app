import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components";

export const ModalContainer = styled(View)`
    margin: 10px;
`;

export const PaletteName = styled(TextInput)`
    borderWidth: 1px;
    borderColor: black;
    padding: 5px;
    marginVertical: 10px;
    border-radius: 4px;
`;

export const SubmitButton = styled(TouchableOpacity)`
    background: grey;
    padding: 5px;
    align-items: center;
    border-radius: 4px;
`;

export const SubmitButtonText = styled(Text)`
    font-weight: bold;
    color: white;
`;

export const ColorContainer = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;  