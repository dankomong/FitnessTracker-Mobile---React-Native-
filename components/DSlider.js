import React, { Component } from 'react';
import { View, Text, Slider } from 'react-native';

export default function DSlider({ max, unit, step, value, onChange }) {
  return (
    <View>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
       />
       <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
       </View>
    </View>
  )
}
