import React from 'react';
import ClickOutside from '../ClickOutside';

export default ({ items, showList, handleItemClick, handleClickOutside }) => {
  const open = !!items.length && showList;
  return (
    <ClickOutside handleClickOutside={handleClickOutside}>
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
    </ClickOutside>
  );
};
