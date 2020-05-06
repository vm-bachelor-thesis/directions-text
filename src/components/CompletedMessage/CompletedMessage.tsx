import React from 'react';
import { View, Text } from '..';

export const CompletedMessage = () => (
  <View type="container" scrolling={true} safeMargin={true}>
    <Text type="header">Slut</Text>
    <View borderTopBottom={true} padding="all">
      <Text>Nu är undersökningen klar. Stort tack för din medverkan!</Text>
    </View>
  </View>
);
