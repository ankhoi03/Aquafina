import 'react-native-gesture-handler';
import React from 'react';
import {  RootNavigation } from '@navigation';
import { Provider } from 'react-redux';
import { RootStore } from '@data/store/RootStore';




const App: React.FC = () => {
  return (
    <Provider store={RootStore}> 
        <RootNavigation />
    </Provider>

  );
}


export default App;
