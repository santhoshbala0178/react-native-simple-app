export const getColorPalettes = async () => {

    const response = await fetch('https://color-palette-api.kadikraman.now.sh/palettes')
    return response.json();
}