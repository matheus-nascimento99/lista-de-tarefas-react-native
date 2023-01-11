import { useState } from "react";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { SwipeListView } from "react-native-swipe-list-view";
import styled from "styled-components/native";
import ListaItem from "./src/components/ListaItem";
import AddItemArea from "./src/components/AddItemArea";
import ListaItemSwipe from "./src/components/ListaItemSwipe";

const Page = styled.SafeAreaView`
  flex:1;
`;

const Scroll = styled.FlatList`
  flex:1;
`;

const App = () => {

  const [items, setItems] = useState([]);

  const addNewItem = (txt) => {
    
    let newItems = [...items];

    newItems.push({
      id:uuid(),
      task:txt,
      done:false
    });

    setItems(newItems)

  }

  const toggleDone = (index) => {
    newItems = [...items];
    newItems[index].done = !newItems[index].done
    setItems(newItems);
  }

  const deleteItem = (index) => {
    newItems = [...items];

    newItems = newItems.filter((it, i)=>i!=index)

    setItems(newItems);
  }

  return(
    <Page>
      <AddItemArea onAdd={addNewItem} />
      <SwipeListView 
        data={items} 
        renderItem={({item, index})=><ListaItem onPress={()=>toggleDone(index)} data={item}/>}
        renderHiddenItem={({item,index})=><ListaItemSwipe onDelete={()=>deleteItem(index)} />}
        leftOpenValue={50}
        disableLeftSwipe={true}
        keyExtractor={(item)=>item.id}
      />
    </Page>
  );
}

export default App;