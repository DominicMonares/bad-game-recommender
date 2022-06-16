import React, { useEffect, useRef, useState } from 'react';
import fetchGameData from '../../src/shared/services/gameData';

describe('Shared', () => {

  it('should fetch game data', async () => {
    console.log('TEST ', await fetchGameData(1));
  });

});
