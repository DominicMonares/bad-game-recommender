import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { updatePage } from '../../shared/actions/index.js';

const PageButtons = () => {
  const page = useSelector(state => state.page);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button
        title='<'
        onPress={() => {
          if (page === 1) {
            dispatch(updatePage(1))
          } else {
            dispatch(updatePage(page - 1));
          }
        }}
      />
      <Button
        title={page.toString()}
        onPress={() => dispatch(updatePage(page))}
      />
      <Button
        title={(page + 1).toString()}
        onPress={() => dispatch(updatePage(page + 1))}
      />
      <Button
        title={(page + 2).toString()}
        onPress={() => dispatch(updatePage(page + 2))}
      />
      <Button
        title={(page + 3).toString()}
        onPress={() => dispatch(updatePage(page + 3))}
      />
      <Button
        title={(page + 4).toString()}
        onPress={() => dispatch(updatePage(page + 4))}
      />
      <Button
        title='>'
        onPress={() => dispatch(updatePage(page + 1))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
})

export default PageButtons;
