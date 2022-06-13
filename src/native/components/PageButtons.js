import React from 'react';
import { Button, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { updatePage } from '../shared/actions/index.js';

const PageButtons = () => {
  const page = useSelector(state => state.page);
  const dispatch = useDispatch();

  if (page < 5) {
    return (
      <View>
        <Button
          title={1}
        />
        <Button
          title={2}
        />
        <Button
          title={3}
        />
        <Button
          title={4}
        />
        <Button
          title={5}
        />
      </View>
    )
  } else {
    return (
      <View>
        <Button
          title={page}
        />
        <Button
          title={page + 1}
        />
        <Button
          title={page + 2}
        />
        <Button
          title={page + 3}
        />
        <Button
          title={page + 4}
        />
      </View>
    )
  }
}

export default PageButtons;
