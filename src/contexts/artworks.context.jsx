import React, { createContext } from 'react';
import { makeArtworks } from '../data/makeData';

const defaultArtworks = makeArtworks(100);

export const ArtworksContext = createContext();

export function ArtworksProvider(props) {
  const [artworks] = [defaultArtworks];

  return (
    <ArtworksContext.Provider value={artworks}>
      {props.children}
    </ArtworksContext.Provider>
  );
}