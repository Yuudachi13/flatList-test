import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Row from './components/Row';
import Add from './components/Add';
import Search from './components/Search';
import { useCallback, useEffect, useMemo, useState } from 'react';
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = '@items_key'


export default function App() {
  const [data, setData] = useState([])
  const [criteria, setCriteria] = useState('')
  const items = useMemo(() =>
  criteria.length > 0 ? data.filter((item)=>item.name.startsWith(criteria)) : data,[data,criteria])
  const [selectedId, setSelectedId] = useState(null)
 
  useEffect(()=> {
   // AsyncStorage.clear()
    getData()
  }, [])
  
  useEffect(()=> {
    storeData(data)
  }, [data])

  const getData = async() => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY)
      const json = JSON.parse(value)
      if (json === null){
        json = []
      }
      setData(json)
    } catch (ex) {
      console.log(ex)
    }
  }

  const storeData = async(value) => {
    try {
      const json = JSON.stringify(value)
      await AsyncStorage.setItem(STORAGE_KEY,json)
    } catch (ex){
      console.log(ex)
    }
  }

  const add = (name) => {
    // Tarkista onko tyhjä tai välilyönti
    if (name.trim() === '') {
      return; // Lopeta jos on tyhjä
    }
    const newItem = {
      id: uuid.v4(),
      name: name,
    };
    setData((prevData) => [...prevData, newItem]);
  };

  // Function to handle selecting an item
  const select = (id) => {
    setSelectedId(id);
  };

  return (
    
    <SafeAreaView style={styles.container}>
     <Text style={styles.shopping}> Shopping List</Text>
    <Add add={add} setData={setData} />
    <Search criteria={criteria} setCriteria={setCriteria} />
      
      <FlatList
      data= {items}
      keyExtractor={(item)=> item.id}
      extraData={selectedId}
      renderItem={({item}) => (
        <Row item={item}
             selectedId={selectedId}
             select={select}
             data={data}
             setData={setData}
         />
      )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40, // tilaa status barin alapuolelle

  },
  shopping: {
    fontSize: 30,   
  }
});
