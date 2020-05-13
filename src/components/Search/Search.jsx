import React from 'react';

export default ({ searchQuery, onChange, resultsStyle, handleSearch }) => {
  return (
    <>
      <input
        style={{
          borderBottomLeftRadius: !!resultsStyle ? '0px' : '4px',
          borderBottomRightRadius: !!resultsStyle ? '0px' : '4px',
          borderLeft: !!resultsStyle
            ? '1px solid #e7e7e7'
            : '1px solid #f1f2f5',
          borderRight: !!resultsStyle
            ? '1px solid #e7e7e7'
            : '1px solid #f1f2f5',
          borderTop: !!resultsStyle ? '1px solid #e7e7e7' : '1px solid #f1f2f5',
          borderBottom: !!resultsStyle
            ? '1px solid transparent'
            : '1px solid #f1f2f5',
        }}
        type="text"
        name="spotifySearch"
        value={searchQuery}
        onChange={onChange}
        onKeyDown={handleSearch}
        placeholder="Search Spotify..."
        required
        className="spotify-search-input"
      />
    </>
  );
};
