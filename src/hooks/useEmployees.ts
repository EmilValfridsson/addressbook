import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { User } from "../types";

export function useEmployees() {
  const [employees, setEmployees] = useState<User[] | []>([]);
  useEffect(() => {
    async function fetch() {
      const response: AxiosResponse<{ results: User[] }> = await axios.get(
        "https://randomuser.me/api/?results=50"
      );

      const employees = response.data.results;
      setEmployees(employees);
    }
    fetch();
  }, []);
  return { employees };
}
