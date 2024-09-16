import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PropsWithChildren} from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; // Rename imported Icon

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const CustomIcon = ({name}: IconsProps) => {
  switch (name) {
    case 'circle':
      return <FontAwesomeIcon name="circle-thin" size={38} color="#F7CD2E" />; // Use renamed FontAwesomeIcon
      break;
    case 'cross':
      return <FontAwesomeIcon name="times" size={38} color="38CC77" />; // Use renamed FontAwesomeIcon
      break;

    default:
      return <FontAwesomeIcon name="pencil" size={38} color="0D0D0D" />;
  }
};

export default CustomIcon;

const styles = StyleSheet.create({});
