import { useState } from 'react';
import image from '../../image/picture.png';
import rectangle from '../../image/Rectangle 1.png';
import ellipse from '../../image/Ellipse 1.png';
import { putUsers } from '../../service/fetch';

import {  Button, ListItem, Image,Text,LogoImage, EllipseImg, RectangleImg,FotoImg } from './Card.styled'


export const Card = ({users}) => {
  const [isFollowing, setIsFollowing] = useState(users.following);

  const { avatar, followers, tweets } = users;
  
    const toggleActiveFollow = async () => {
        if (!isFollowing) {
            users.followers += 1;
        } else {
            users.followers -= 1;
        }

        const followers = users.followers;
        const id = users.id;
        const updateFollowing = !isFollowing;

      await putUsers(id, updateFollowing, followers).then(
        setIsFollowing(!isFollowing)
        );

    }

    return(
    <div>
            <ListItem>
                <LogoImage />
                <Image src={image} alt="Logo" />
                <RectangleImg src={rectangle} alt="Logo" width="380px" height="13px"/>
                <EllipseImg src={ellipse} alt="Logo" width="80px" height="80px" />
                <FotoImg src={`${avatar}`} alt="Logo" width="62px" height="62px" />
                <Text>{`${tweets}`} TWEETS</Text>
                <Text>{new Intl.NumberFormat("en-IN").format(`${followers}`)} FOLLOWERS</Text>
                {!isFollowing ? (<Button type="submit" onClick={toggleActiveFollow} style={{ backgroundColor:'#EBD8FF' }}>FOLLOW</Button>) : (<Button type="submit" onClick={toggleActiveFollow}style={{ backgroundColor:'#5CD3A8' }}>FOLLOWING</Button>)}
            </ListItem>

    </div>

    )
}
