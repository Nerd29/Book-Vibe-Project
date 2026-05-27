// import React from 'react';   

import { useContext } from "react";
import { listedBookContext } from "../../BookContext/BookContext";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ReadList from "../../components/ReadList/ReadList";
import Wishlist from "../../components/Wishlist/Wishlist";

const BooksPage = () => {
    const {storedBooks,wishedBooks}=useContext(listedBookContext)
    console.log(storedBooks,wishedBooks)
    return (
        <div className="container mx-auto font-semibold">
          <Tabs>
    <TabList>
      <Tab>Read Books list</Tab>
      <Tab>WishBook List</Tab>
    </TabList>

    <TabPanel>
      <ReadList></ReadList>
    </TabPanel>
    <TabPanel>
    <Wishlist></Wishlist>
     
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default BooksPage;