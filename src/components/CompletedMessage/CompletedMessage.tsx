import React from 'react';
import { View, Text } from '..';

export const CompletedMessage = () => (
  <View type="container">
    <Text type="header">Det var allt!</Text>
    <Text type="onGrayBackground" margin="horizontal">
      Nu är undersökningen klar. Stort tack för din medverkan!
    </Text>
  </View>
);
