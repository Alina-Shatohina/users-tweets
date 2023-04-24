import styled from 'styled-components';
import { ReactComponent as Logo } from '../../image/Logo.svg';


export const ListItem = styled.li`
position: relative;
width: 380px;
height: 460px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
border-radius: 20px;
transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
:hover {
  transform: scale(1.05);

}
`

export const LogoImage = styled(Logo)`
margin-top:20px;
margin-left:20px;
margin-bottom: 242px;
`
export const Image = styled.img`
position: absolute;
top:28px;
left:36px;
width: 308px;
height: 168px;
display:block;
`
export const RectangleImg = styled.img`
position: absolute;
top:214px;
left:0;
display:block;
`

export const EllipseImg = styled.img`
position: absolute;
z-index: 1;
top: 50%;
left: 50%;
display:block;
margin-left:-40px;
margin-top:-50px;
`

export const FotoImg = styled.img`
position: absolute;
top: 50%;
left: 50%;
display:block;
margin-left:-30px;
margin-top:-45px;
border-radius: 50%;
`

export const Text = styled.p`
margin: 0 0 16px 0;
font-weight: 500;
font-size: 20px;
line-height: 1.2;
text-align: center;
vertical-align: top;
color: #EBD8FF;
`

export const Button = styled.button`

margin: 10px 92px 0 92px;
padding: 0;
width:196px;
height: 50px;
cursor: pointer;
border: none;
box-shadow: 0px 3.44px 3.44px rgba(0, 0, 0, 0.25);
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
border-radius: 10.31px;
font-weight: 600;
font-size: 18px;
line-height: 1.22;
text-align: center;
vertical-align: top;
color: #373737;

`
