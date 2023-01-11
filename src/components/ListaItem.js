import React from "react";
import styled from "styled-components/native";

const Item = styled.TouchableHighlight`
  backgroundColor:#EEE;
  flexDirection:row;
  height:50px;
  alignItems:center;
  paddingLeft:20px;
  paddingRight:20px;
`; 

const ItemText = styled.Text`
  fontSize:15px;
  flex:1;
`;

const ItemCheck = styled.View`
  width:20px;
  height:20px;
  borderRadius:10px;
  border:5px solid #ccc;
  backgroundColor: ${props => props.done ? '#CCC' : 'transparent'}
`;

export default (props) => {
    return(
      <Item onPress={props.onPress} underlayColor="#DDD" activeOpacity={1}>
        <>
          <ItemText>{props.data.task}</ItemText>
          <ItemCheck done={props.data.done} />
        </>
      </Item>
    );
}