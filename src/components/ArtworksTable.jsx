import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Tooltip from '@material-ui/core/Tooltip';

const ArtworksTable = ({ artworks }) => {


  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        rowHeight={25}
        headerHeight={40}
        pageSize={50}
        pagination
        columns={[
          { field: 'id', headerName: 'ID', hide: true },
          { field: 'title', headerName: 'Title', description: 'Title', width: 130 },
          { field: 'artist', headerName: 'Artist', description: 'Artist', width: 130 },
          { field: 'collection', headerName: 'Collection', description: 'Collection', width: 130 },
          { field: 'medium', headerName: 'Medium', description: 'Medium', width: 110 },
          { field: 'dimensions', headerName: 'Dimensions', description: 'Dimensions', width: 130 },
          { field: 'status', headerName: 'Status', description: 'Status', width: 110 }
        ]}
        rows={artworks}
      />
    </div>
  );
}

export default ArtworksTable;
