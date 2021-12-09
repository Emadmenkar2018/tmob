import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";



const TmobList = (props) => {

  return (
    <FlatList
      testID={props?.testID}
      // style={[props.style]}
      style={{backgroundColor:'#fff' }}
      contentContainerStyle={{backgroundColor:'#fff'}}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={props.data}
      ListFooterComponent={props.ListFooterComponent}
      renderItem={(item, key) => props.renderItem(item, key)}
      keyExtractor={(item, index) => index.toString()}
      refreshControl={props.refreshControl}
      onEndReached={props.onEndReached}
      onEndReachedThreshold={props.onEndReachedThreshold}
    />


  );
}

export default TmobList

TmobList.propTypes = {
  /**
    *Style of the FlatList
    */
   style: PropTypes.object,

  /**
   *Data List
   */
   data: PropTypes.array,

  /**
   *testID 
   */
   testID: PropTypes.string,

   /**
   *Function to render the flatlist item 
   */
   renderItem: PropTypes.func.isRequired,
 
};
