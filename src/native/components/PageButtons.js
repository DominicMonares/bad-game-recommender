import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const PageButtons = (props) => {
  const page = props.page;

  return (
    <View style={styles.container}>
      <Button
        title='<'

      />
      <Button
        title={page.toString()}

      />
      <Button
        title={(page + 1).toString()}

      />
      <Button
        title={(page + 2).toString()}

      />
      <Button
        title={(page + 3).toString()}

      />
      <Button
        title={(page + 4).toString()}

      />
      <Button
        title='>'

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
