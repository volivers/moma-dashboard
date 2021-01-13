import React from 'react';
import Table from 'react-bootstrap/Table';

const ArtworksTable = ({ artworks }) => {

  const values = [];

  for (var i = 0; i < artworks.length; i++) {
    for (var key in artworks[i]) {
      if (artworks[i].hasOwnProperty(key)) {
        values.push(artworks[i][key]);
        console.log(values)
      }
    }
  }

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#REF</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Collection</th>
          <th>Type</th>
          <th>Medium</th>
          <th>Dimensions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {values.map(value => {
            return(
              <td key={values}>{value}</td>
            );
          })}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default ArtworksTable;