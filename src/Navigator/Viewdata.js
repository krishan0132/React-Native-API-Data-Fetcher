import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';

const Viewdata = () => {
  const [viewdata, setviewdata] = useState([]);

  const GetApidata = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const response = await fetch(url);
      const data = await response.json();
      setviewdata(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    GetApidata();
  }, []);

  return (
    <ScrollView>
      <Text style={{ fontSize: 30, color: 'green', alignSelf: 'center' }}>
        Api data
      </Text>
      {viewdata.length > 0 ? (
        viewdata.map((item) => (
          <View key={item.id}>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
            <Text>{item.usersid}</Text>
          </View>
        ))
      ) : (
        <Text>No data available</Text>
      )}
    </ScrollView>
  );
};

export default Viewdata;
