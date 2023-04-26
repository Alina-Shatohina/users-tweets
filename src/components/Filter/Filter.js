// import React, { useState } from 'react';
// import Select from 'react-select';
// import { Dropdown,FilterText } from './Filter.styled';

// const options = [
//   { value: 'All', label: 'All' },
//   { value: 'Follow', label: 'Follow' },
//   { value: 'Following', label: 'Following' },
// ];

// export default function Filter() {
//   const [selectedOption, setSelectedOption] = useState(null);



//   return (
//     <Dropdown>
//       <FilterText>Filter</FilterText>
//       <Select
//         defaultValue={selectedOption}
//         onChange={setSelectedOption}
//         options={options}



//          theme={theme => ({
//         ...theme,
//         borderRadius: 5,
//         colors: {
//           ...theme.colors,
//           primary25: '#EBD8FF',
//           primary75: 'black',

//         },
//       })}
//       />
//     </Dropdown>
//   );
// }
