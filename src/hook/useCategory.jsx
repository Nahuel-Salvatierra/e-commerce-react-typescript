import { useEffect, useState } from "react";
import { getCategoryName } from "../api/category.api";

export function useCategory (){
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategoryName();
        setCategory(response);
      } catch (error) {
      }
    };
    fetchCategory();
  },[]);

  return [category];
}