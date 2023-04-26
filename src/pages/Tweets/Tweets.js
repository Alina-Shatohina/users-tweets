import React, { useState } from 'react'
import Select from 'react-select';
import CardList from '../../components/CardList/CardList';
import { Dropdown,FilterText } from './Tweets.styled';


const options = [
  { value: 'all', label: 'All' },
  { value: 'follow', label: 'Follow' },
  { value: 'following', label: 'Following' },
];

export default function Tweets() {
  const [value, setValue] = useState('All');

  console.log(value);



  return (
    <div>
      <Dropdown>
          <FilterText>Filter</FilterText>
          <Select
            defaultValue={value}
            onChange={setValue}
            options={options}



            theme={theme => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary25: '#EBD8FF',
              primary75: 'black',

            },
          })}
          />
      </Dropdown>

      <CardList filter={value} />
    </div>
  );
}


