import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

interface Product {
  id: number,
  title: string,
  image: string,
}

const CustomCart = () => {

  const [product, setProducts] = useState<Product[]>([]);
  const [cart, setCarts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("https://fakestoreapi.com/products");
    const data = await result.json();
    if (data) {
      // setProducts(data);

      let pro = [];
      for(let i = 0; i<data.length; i++){
        pro.push({
          "id":data[i].id,
          "title":data[i].title,
          "image":data[i].image,
        })
      }
      setProducts(pro);

    }
  }

  const addCart = (item: Product) => {
    let data = cart.find(itemm => itemm.id === item.id);
    if (data) {
      let updatedData = cart.filter((e) => e.id !== item.id);
      setCarts(updatedData);
    } else {
      setCarts([...cart, item]);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <FlatList
        data={product}
        renderItem={({ item }) => {
          let isAvailableInCart = cart.find(itemm => itemm.id === item.id);
          return (
            <>
              <TouchableOpacity
                onPress={() => addCart(item)}
                style={{
                  margin: 8,
                  borderRadius: 8,
                  backgroundColor: isAvailableInCart ? 'red' : 'green', padding: 8
                }}>
                <View style={{flexDirection:'row'}}>
                  <Image source={{uri: item.image}} style={{height:50,width:50, borderRadius:100}} />
                <Text style={{ color: 'white', fontSize: 16,margin:8 }}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            </>
          )
        }}
      />

      <View style={{
        backgroundColor: 'blue',
        position: 'absolute',
        bottom: 16,
        right: 16,
        height: 50, width: 180, borderRadius: 100,
        justifyContent: 'center', alignItems: 'center'
      }}>
        <Text style={{ color: 'white', fontSize: 20 }}>({cart.length}) Items in cart</Text>
      </View>

    </View>
  )
}

export default CustomCart