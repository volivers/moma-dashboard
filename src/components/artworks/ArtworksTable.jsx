import React, { useContext } from 'react';
import { ArtworksContext } from '../../contexts/artworks.context';
import { DataGrid } from '@material-ui/data-grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from '../../styles/ArtworksTableStyles';


const ArtworksTable = () => {
  const classes = useStyles();
  const artworks = useContext(ArtworksContext);

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
        pageSize={25}
        pagination
        columns={[
          { field: 'id', headerName: '#REF', description: '#REF', hide: true },
          { field: 'title', headerName: 'Title', description: 'Title', width: 150 },
          { field: 'artist', headerName: 'Artist', description: 'Artist', width: 150 },
          { field: 'collection', headerName: 'Collection', description: 'Collection', width: 120 },
          { field: 'medium', headerName: 'Medium', description: 'Medium', width: 120 },
          { field: 'dimensions', headerName: 'Dimensions', description: 'Dimensions', width: 130 }
        ]}
        rows={artworks}
      />
    </div>
  );
}

export default ArtworksTable;
