import React from 'react';

import styled from 'styled-components/native';
export const Container = styled.SafeAreaView`
    background-color: #FFFFFF;
    flex: 1;
    padding-left: 30px;
    padding-right: 30px;
`;

export const ImgLogo  = styled.Image`
	width: 130px;
	height: 95px;
	margin-top: 36px;
    margin-left: auto;
    margin-right: auto;
`;

export const H1Label = styled.Text`
    font-size: 36px;
    color: #FF5A5A;
    font-weight: bold;
`;

export const LinkLabel = styled.Text`
    font-size: 14px;
    color: #FF5A5A;
    font-weight: bold;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
  text-decoration: underline;
  text-decoration-color: #FF5A5A;
`;



export const BtnArea  = styled.View`
    margin-top: 50px;
`;
