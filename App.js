import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Row from './components/Row';

export default function App() {
  const data = [
    {id: "1",name: "milk"},
    {id: "2",name: "bread"}
  ]

  return (
    <SafeAreaView style={styles.container}>
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
  },
});
