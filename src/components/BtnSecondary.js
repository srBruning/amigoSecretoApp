import React from 'react';
import styled from 'styled-components/native';

export const BtnSecondary = styled.TouchableOpacity`
    height: 60px;
    background-color: #F8F8F8;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    border: 1px solid #F8F8F8;
    margin-top: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const CustomButtonText = styled.Text`
    font-size: 24px;
    color: #FF5A5A;
`;

 

export default ( {txtLabel}) => {
    return (
        <BtnSecondary>
            <CustomButtonText>{txtLabel}</CustomButtonText>
        </BtnSecondary>
    );
}