import 'react-native-gesture-handler';
import React from 'react';
import { AppContextProvider, RootNavigation } from './src/presentation';



const App: React.FC = () => {
  return (
    <AppContextProvider>
      <RootNavigation />
    </AppContextProvider>

  );
}


export default App;
