import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AsyncStorageScreen = () => {

  const [data, setData] = useState<string | null>('');

  const addData = async () => {
    await AsyncStorage.setItem("DATA", "Amir Rahi");
  }

  const getData = async () => {
    let result = await AsyncStorage.getItem("DATA");
    setData(result);
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

      <Text style={{ color: 'black', fontSize: 30, fontWeight:'bold', alignSelf:'flex-start' }}>AsyncStorage</Text>

      <View style={{width:'100%', height:1, backgroundColor:'black'}}></View>

      <Text style={{ color: 'black', fontSize: 24,marginTop:32 }}>{data}</Text>

      <View style={{ width: '100%', margin: 16 }}>

        <TouchableOpacity
          onPress={() => addData()}
          style={{ backgroundColor: 'green', padding: 12, margin: 8, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Add data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => getData()}
          style={{ backgroundColor: 'green', padding: 12, margin: 8, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Get data</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default AsyncStorageScreen