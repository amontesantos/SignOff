import React from 'react';
import { View, Text } from 'react-native';

import globalStyles from '../assets/styles/globalStyles';

export default IosContent = (props) => {
    return (
        <View>
            <Text style={globalStyles.h1}>To set an away message:</Text>
            <Text style={globalStyles.p}>Some more text</Text>
        </View>
    );
}