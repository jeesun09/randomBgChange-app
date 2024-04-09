import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


function App(): React.JSX.Element {

  const [randomBackground, setRandomBackground] = useState('#000000');

  function changeBackgroundColor() {
    let color='#';
    const hexRange = '0123456789ABCDEF';
    for(let i=0; i<6; i++){
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    console.log(color);
    setRandomBackground(color);
  }
  

  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={changeBackgroundColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Tap me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  actionBtn: {
    borderRadius: 20,
    backgroundColor: '#bc5698',
    paddingHorizontal: 40,
    paddingVertical: 20,

  },
  actionBtnTxt: {
    fontSize: 20,
    color: '#ffffff',
  }

});

export default App;
