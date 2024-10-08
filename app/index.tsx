import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className='text-white'>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
