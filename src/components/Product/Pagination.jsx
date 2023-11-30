import React, { useState } from "react";

const Pagination = ({ itemsCount, onPageChange, currentPage, pageSize }) => {
  const totalPage = Math.ceil(itemsCount / pageSize);

  const element = [];
  for (let i = 0; i < totalPage; i++) {
    element.push(i + 1);
  }

  if (totalPage === 1) return;
  return (
    <div className="join">
      {element.map((page) => (
        <input
          key={page}
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label={page}
          checked={currentPage === page ? "checked" : ""}
          onChange={() => {
            onPageChange(page);
          }}
        />
      ))}
    </div>
  );
};

export default Pagination;
