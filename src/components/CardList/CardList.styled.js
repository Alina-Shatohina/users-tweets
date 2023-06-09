import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const BoxList = styled.div`
 padding-bottom: 50px;

`;


export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content:center;


`;

export const LinkButton = styled(NavLink)`
  text-decoration: none;
  display:inline-block;
  width: 150px;
  height: 50px;
  margin: 20px 0 0 20px;

`;

export const GoBackButton = styled.button`
display: block;
width: 150px;
height: 50px;
cursor: pointer;
border: none;
box-shadow: 0px 3.44px 3.44px rgba(0, 0, 0, 0.25);
border-radius: 10.31px;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
font-weight: 600;
font-size: 18px;
line-height: 1.22;
text-align: center;
vertical-align: center;
color: #EBD8FF;
background-color:#5736A3;
justify-content:center;
&:hover,
&:focus {
  scale: 1.1;
  color: #373737;
  background-color:#5CD3A8;
`;

export const Span = styled.span`
  margin-left: 20px;
`;

export const ButtonLoadMore = styled.button`
display: block;
margin: 0 auto;
width: 196px;
height: 50px;
cursor: pointer;
border: none;
box-shadow: 0px 3.44px 3.44px rgba(0, 0, 0, 0.25);
border-radius: 10.31px;
font-weight: 600;
font-size: 18px;
line-height: 1.22;
text-align: center;
vertical-align: top;
color: #EBD8FF;
background-color: #5736A3;
justify-content: center;
transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
:hover {
  transform: scale(1.2);
  `
