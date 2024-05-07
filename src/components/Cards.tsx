import { useState } from "react";
import { useSearchContext } from "../context/SearchContext";
import { useEmployees } from "../hooks/useEmployees";
import { SortColumn } from "../types";
import _ from "lodash";

export function Cards() {
  const { employees } = useEmployees();
  const { searchValue } = useSearchContext();
  const DEFAULT_SORT_COLUMN: SortColumn = { path: "name.first", order: "asc" };
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);

  let filteredEmployees = employees;

  if (searchValue) {
    const search = searchValue.toLowerCase();
    filteredEmployees = employees.filter((e) => {
      const firstName = e.name.first.toLowerCase().includes(search);
      const lastName = e.name.last.toLowerCase().includes(search);
      return firstName || lastName;
    });
  }

  const sortedEmployees = _.orderBy(
    filteredEmployees,
    sortColumn.path,
    sortColumn.order
  );

  function handleSortChange() {
    const newOrder = sortColumn.order === "asc" ? "desc" : "asc";
    setSortColumn({ ...sortColumn, order: newOrder });
  }
  function renderSortIcon() {
    if (sortColumn.order === "asc")
      return <i className="fa-solid fa-sort-down"></i>;
    return <i className="fa-solid fa-sort-up"></i>;
  }
  return (
    <div>
      <span className="p-5" onClick={handleSortChange}>
        {renderSortIcon()}
      </span>
      <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedEmployees.map((e) => (
          <div key={e.login.uuid} className=" card bg-base-100 shadow-xl ">
            <div className="flex items-center p-4">
              <img
                src={e.picture.medium}
                alt={`${e.name.first} ${e.name.last}`}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="card-body">
                <h2 className="card-title">
                  {e.name.first} {e.name.last}
                </h2>
                <p>{e.phone}</p>
                <p>{e.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
