import React from 'react';
import { Image } from 'react-native';
import colors from '../styles/colors';
import { moderateScale } from '../styles/responsiveSize';

const RoundImg = (props) => {
    const { img, size = 64, bgColor, style } = props;
    return (
        <Image
            style={{
                width: moderateScale(size),
                height: moderateScale(size),
                borderRadius: moderateScale(size / 2),
                backgroundColor: bgColor,
                ...(style || {})
            }}
            source={{ uri: img }}
        />
    );
};

export default RoundImg;
