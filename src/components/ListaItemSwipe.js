import React from "react";
import styled from "styled-components";

const ListaItemSwipe = styled.TouchableHighlight`
    width:100%;
    height:50px;
    backgroundColor:#FF0000;
    justifyContent:center;
`;

const ListaItemIcon = styled.View`
    width:20px;
    height:20px;
    backgroundColor:#FFF;
    marginLeft:15px;
`;

export default (props) => {
    return(
        <ListaItemSwipe onPress={props.onDelete} underlayColor="#FF3333">
            <ListaItemIcon />
        </ListaItemSwipe>
    );
}