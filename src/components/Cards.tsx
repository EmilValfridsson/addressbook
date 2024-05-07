import { useSearchContext } from "../context/SearchContext";
import { useEmployees } from "../hooks/useEmployees";

export function Cards() {
  const { employees } = useEmployees();
  const { searchValue } = useSearchContext();
  let filteredEmployees = employees;

  if (searchValue) {
    filteredEmployees = employees.filter((e) =>
      e.name.first.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  return (
    <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredEmployees.map((e) => (
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
  );
}
