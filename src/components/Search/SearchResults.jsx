import React from 'react';

export default ({ items, showList, handleItemClick }) => {
  const open = !!items.length && showList;
  return (
    <div
      className={`search-results-wrapper ${
        open && 'search-results-wrapper-open'
      }`}
    >
      {items.map((t) => {
        return (
          <div key={t.id} onClick={() => handleItemClick(t)}>
            <img src={t.album.images[2].url} alt={t.name} />
            <span>{t.name}</span>
          </div>
        );
      })}
    </div>
  );
};
