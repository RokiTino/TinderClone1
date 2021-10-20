
import React from 'react';
import { StyleSheet, View,SafeAreaView } from 'react-native';
import Cards from './source/components';

const jeff = {
  name:'Tino',
  image:'',
  bio:'Jas sum Tino'
};

const App=() => {
  return (
    <SafeAreaView >
        <View style={styles.PageContainer}>
          <Cards user={jeff}/>
          <Cards name="Elena"/>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  PageContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:10,
    marginVertical:10,
  },
});

export default App;
