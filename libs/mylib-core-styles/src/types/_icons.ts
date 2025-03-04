import iconJsonList from '../../icons/icons-list--font.json';
import iconSVGJsonList from '../../icons/icons-map--svg.json';

export const iconNamesArray = iconJsonList.icons.map((icon: {name: string}) => {
  return icon.name;
});

export const iconNamesSvgArray = iconSVGJsonList.icons.map((iconName: string) => {
  return iconName;
});