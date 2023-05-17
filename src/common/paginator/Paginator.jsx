import classNames from 'classnames';
import { useState, useEffect } from 'react';
import classes from './Paginator.module.css';

export const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, key, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCounter = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const [choisePage, setChoisePage] = useState(currentPage);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  useEffect(() => {
    setChoisePage(currentPage);
  }, [currentPage]);

  const goToPage = (page) => {
    onPageChanged(page);
    setChoisePage(page);
  };

  const goToPortion = () => {
    setPortionNumber(portionNumber + 1);
    goToPage(leftPortionPageNumber + portionSize);
  };

  return (
    <div className={classes.paginator}>
      {portionNumber > 1 && (
        <button onClick={goToPortion}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      )}
      {pages
        .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map((page) => (
          <span
            className={classNames(
              {
                [classes.selectedPage]: choisePage === page,
              },
              classes.pageNumber
            )}
            onClick={() => {goToPage(page)}}
            key={key}
          >
            {page}
          </span>
        ))}
      {portionCounter > portionNumber && (
        <button onClick={goToPortion}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      )}
    </div>
  );
};
