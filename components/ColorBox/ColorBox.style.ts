import { Text, View } from 'react-native';
import styled from 'styled-components';

export const ColorBoxView = styled(View)`
    padding: 10px;
    borderRadius: 3px;
    justifyContent: center;
    alignItems: center;
    marginBottom: 10px;
    backgroundColor: ${props => props.color};
`;

export const ColorBoxText = styled(Text)`;
    font-weight: bold;
`