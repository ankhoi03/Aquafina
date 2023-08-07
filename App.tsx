import 'react-native-gesture-handler';
import React from 'react';
import { AppContextProvider, RootNavigation } from '@navigation';



const App: React.FC = () => {
  return (
    <AppContextProvider>
      <RootNavigation />
    </AppContextProvider>

  );
}


export default App;
