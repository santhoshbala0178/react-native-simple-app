import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";


export const Button = styled(TouchableOpacity)`
padding: 10px;
`;

export const ButtonText = styled(Text)`
fontSize: 16px;
fontWeight: bold;
`;