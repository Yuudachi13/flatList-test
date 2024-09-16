import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Row from './components/Row';
import Add from './components/Add';
import { useCallback, useState } from 'react';
import uuid from 'react-native-uuid';


export default function App() {
  const [data, setData] = useState([])
  const [selectedId, setSelectedId] = useState(null)
 
  const add = useCallback((name) => {
    const newItem = {
      id: uuid.v4(),
      name: name
    }
    const tempData = [...data,newItem]
    setData(tempData)
  },[data])

  const select = useCallback((id) => {
    setSelectedId(id);
  }, []);

  return (
    
    <SafeAreaView style={styles.container}>
     <Text style={styles.shopping}> Shopping List</Text>
      <Add add={add} setData={setData} />
      <FlatList
      data= {data}
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
