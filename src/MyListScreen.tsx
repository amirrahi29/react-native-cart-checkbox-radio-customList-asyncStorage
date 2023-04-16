import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

type Product = string;

const MyListScreen = () => {

  const [product, setProduct] = useState<Product[]>([]);
  const [title, setTitle] = useState('');

  const addProduct = () => {
    console.log(title);
    setProduct([...product, title]);
    setTitle('');
  }

  const deleteProduct = (title: string) => {
    const updatedProduct = product.filter((item) => item !== title);
    setProduct(updatedProduct);
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>

      <TextInput
        placeholder='Enter title'
        value={title}
        onChangeText={(e) => setTitle(e)}
        style={{
          color: 'white',
          backgroundColor: 'grey',
          marginTop: 50,
          borderRadius: 8,
          margin: 8
        }}
      />

      <TouchableOpacity
        onPress={() => addProduct()}
        style={{
          backgroundColor: 'green', padding: 8, margin: 8,
          borderRadius: 8,
          marginBottom: 50
        }}>
        <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white' }}>Add Product</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setProduct([])}>
        <Text style={{ fontSize: 20, color: 'red' }}>Clear All</Text>
      </TouchableOpacity>

      <FlatList
        style={{
          margin: 16,
        }}
        data={product}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <>
              <View
                style={{ flexDirection: 'row', margin: 8 }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', flex: 1 }}>{item}</Text>
                <TouchableOpacity onPress={() => deleteProduct(item)}>
                  <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>X</Text>
                </TouchableOpacity>
              </View>
            </>
          )
        }}
      />


    </View>
  )
}

export default MyListScreen