import React from 'react'
import { FaPlus } from "react-icons/fa";
import { Accordion } from '@mantine/core';
import classes from './accordion.module.css';

const Accordioon = () => {
    const data = [{value: "HOME", description:""}, {value: "Menu", description:"Sub Menu"}]
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>
        <span className='font-bold warna'>{item.value}</span>
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      defaultValue="HOME"
      classNames={{ chevron: classes.chevron }}
      chevron={<FaPlus/>}
    >
      {items}
    </Accordion>
  );
}

export default Accordioon