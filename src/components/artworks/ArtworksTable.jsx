import React, { useState, useEffect } from 'react';
import { makeArtworks } from '../../utils/makeData';
import { DataGrid } from '@material-ui/data-grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from '../../styles/ArtworksTableStyles';


const ArtworksTable = () => {
  const classes = useStyles();
  const initArtworks = makeArtworks(100);

  const [artworks, setArtworks] = useState([]);
  useEffect(() => {
    setArtworks(initArtworks);
  },[])

  return (
    <div className={classes.wrapperArtworks}>
      <div className={classes.wrapperTitle}>
        <h2><FavoriteIcon /> ArtWorks</h2>
      </div>
      <DataGrid
        className={classes.root}
        showToolbar
        rowHeight={25}
        headerHeight={40}
        pageSize={50}
        pagination
        columns={[
          { field: 'id', headerName: '#REF', description: '#REF', hide: true },
          { field: 'title', headerName: 'Title', description: 'Title', width: 110 },
          { field: 'artist', headerName: 'Artist', description: 'Artist', width: 140 },
          { field: 'collection', headerName: 'Collection', description: 'Collection', width: 120 },
          { field: 'medium', headerName: 'Medium', description: 'Medium', width: 110 },
          { field: 'dimensions', headerName: 'Dimensions', description: 'Dimensions', width: 130 },
          { field: 'task_id', headerName: 'Task #REF', description: 'Task ID', width: 100 },
        ]}
        rows={artworks}
      />
    </div>
  );
}

export default ArtworksTable;
