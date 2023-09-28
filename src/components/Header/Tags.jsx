import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import '../../css/tags.css';

const Tags = (props) => {
  const data = [
    { Tag: 'HTML', id: 1 },
    { Tag: 'CSS', id: 2 },
    { Tag: 'JavaScript', id: 3 },
    { Tag: 'ReactJS', id: 4 },
    { Tag: 'PHP', id: 5 },
    { Tag: 'Angular', id: 6 },
    { Tag: 'MongoDB', id: 7 },
  ];

  const [options, setOptions] = useState(data);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSelect = (selectedList) => {
    setSelectedTags(selectedList);
    console.log(selectedList);
  };
  
  const handleRemove = (selectedList) => {
    setSelectedTags(selectedList);
    console.log(selectedList);
  };

  return (
    <>
        <div className='tags'>
            <Multiselect
              options={options}
              displayValue='Tag'
              onSelect={handleSelect}
              onRemove={handleRemove}
              placeholder='Search'
              className='multiselect-container'
            />
        </div>
    </>
  );
}


export default Tags;