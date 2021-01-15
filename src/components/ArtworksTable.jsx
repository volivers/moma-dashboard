import React, { useState, useEffect } from 'react';
import { LinkOperator, XGrid } from '@material-ui/x-grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const ArtworksTable = ({ artworks }) => {
  // const [filter, setFilter] = useState("van");
  

  // const handleChange = (event) => {
  //   // setFilter(e.target.value);
  //   console.log(event.target.value)
  // }

  const filterModel = {
    items: [
      { columnField: 'artist',
        operatorValue: 'contains',
        value: 'van',
        // onChange: handleChange(event: console.log(event.target.value)) => void
      },
      { columnField: 'collection', operatorValue: 'contains', value: 'Modern' },
    ],
    linkOperator: LinkOperator.Or,
  };

  const [views, setViews] = useState(filterModel.items);

  return (
    <div style={{ height: 300, width: '100%' }}>
      <div className="btn-wrapper">
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save view
        </Button>
      </div>
      <XGrid
        showToolbar
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
        filterModel={filterModel}
      />
    </div>
  );
}

export default ArtworksTable;
