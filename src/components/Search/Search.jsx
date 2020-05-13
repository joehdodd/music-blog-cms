import React from 'react';

export default ({ searchQuery, onChange, resultsStyle }) => {
  const getRadius = (resultsStyle) => !!resultsStyle;
  return (
    <>
      <input
        style={{
          borderBottomLeftRadius: getRadius(resultsStyle) ? '0px' : '4px',
          borderBottomRightRadius: getRadius(resultsStyle) ? '0px' : '4px',
          borderLeft: getRadius(resultsStyle)
            ? '1px solid #e7e7e7'
            : '1px solid #f1f2f5',
          borderRight: getRadius(resultsStyle)
            ? '1px solid #e7e7e7'
            : '1px solid #f1f2f5',
          borderTop: getRadius(resultsStyle)
            ? '1px solid #e7e7e7'
            : '1px solid #f1f2f5',
          borderBottom: getRadius(resultsStyle) ? 'none' : '1px solid #f1f2f5',
        }}
        type="text"
        name="spotifySearch"
        value={searchQuery}
        onChange={onChange}
        placeholder="Search Spotify..."
        required
        className="search-input"
      />
    </>
  );
};
