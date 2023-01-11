import React from "react";
import styled from "styled-components";
import { useState } from "react";

const AddItemArea = styled.View`
    backgroundColor:#CCC;
    padding:10px;
`;

const AddItemInput = styled.TextInput`
    backgroundColor:#FFF;
    fontSize:15px;
    height:50px;
    borderRadius:5px;
    padding:10px;
`;

export default (props) => {
    const [item, setItem] = useState('')

    const handleSubmit = () => {

        if(item.trim() != ''){
            props.onAdd(item.trim());
        }else{
            alert('Preencha o campo antes de enviá-lo.');
        }
        setItem('')
        
    }

    return (
        <AddItemArea>
            <AddItemInput 
                placeholder="Digite um novo item..." 
                value={item} 
                onChangeText={e=>setItem(e)} 
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
            />
        </AddItemArea>
    );
}