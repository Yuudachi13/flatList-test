import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Row from './components/Row';
import Add from './components/Add';
import { useCallback, useState } from 'react';
import uuid from 'react-native-uuid';


export default function App() {
  const [data, setData] = useState([])
 
  const add = useCallback((name) => {
    const newItem = {
      id: uuid.v4(),
      name: name
    }
    const tempData = [...data,newItem]
    setData(tempData)
  },[data])

  return (
    
    <SafeAreaView style={styles.container}>
     <Text style={styles.shopping}> Shopping List</Text>
      <Add add={add} />
      <FlatList
      data= {data}
      renderItem={({item}) => (
        <Row item={item} />
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
