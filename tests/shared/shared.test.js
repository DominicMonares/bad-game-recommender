import React, { useEffect, useRef, useState } from 'react';
import fetchGameData from '../../src/shared/services/gameData';

import { games } from './SampleData';

describe('Shared', () => {

  it('should fetch game data', async () => {
    const response = await fetchGameData(1);

    expect(response.length === 5);
    expect(response).toStrictEqual(games);
  });

});
