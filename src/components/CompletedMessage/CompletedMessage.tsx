import React from 'react';
import { View, Divider, Text } from '..';

export interface CompletedMessageProps {
  message?: Object | undefined;
}

export const CompletedMessage = ({
  message = undefined,
}: CompletedMessageProps) => (
  <View type="container">
    <Text type="header">Det var allt!</Text>
    <Text type="onGrayBackground" margin="horizontal">
      Nu är undersökningen klar. Stort tack för din medverkan!
    </Text>
    {message && (
      <>
        <Divider />
        <Text type="onGrayBackground">{JSON.stringify(message)}</Text>
      </>
    )}
  </View>
);
