import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl } from 'react-native-gesture-handler';
import Header from '../../components/Header/Header';
import { NavigationButton } from '../../components/NavigationButton/NavigationButton';
import { getColorPalettes } from '../../utils/api';
import { HomeScreenContainer, PaletteList, AddPalette, AddPaletteText } from './Home.style';


const Home = ({navigation, route}) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const newColorPalette = route?.params?.newColorPalette

  const handleDataFetch = useCallback(async () => {
    const data = await getColorPalettes();
    setColorPalettes(data);
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleDataFetch();
    setIsRefreshing(false);
  }, []);

  useEffect(() => {
    handleDataFetch();
  }, [])

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes([newColorPalette, ...colorPalettes])
    }
  },[newColorPalette])

  return (
    <HomeScreenContainer>
       <AddPalette onPress={() => navigation.navigate('ColorPaletteModal')}>
        <AddPaletteText>Add new Palette</AddPaletteText>
      </AddPalette>
      <PaletteList data={colorPalettes}
      renderItem={({item}) => <NavigationButton navigation={navigation} paletteName={item.paletteName} colors={item.colors}/>}
      keyExtractor={(item) => item.paletteName}
      ListHeaderComponent={<Header title="Color Palettes"/>}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh}/>} />
    </HomeScreenContainer>
  );
};


export default Home;
