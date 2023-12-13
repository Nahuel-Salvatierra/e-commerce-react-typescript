import { useEffect, useState } from "react";
import { getCategoryName } from "../api/category.api";

export function useCategory() {
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

// export function useRenderCategory() {
//   const [categoryRender, setCategoryRender] = useState([]) 

//   useEffect(() => {
//     const fetchRenderCategory = async () => {
//       try {
//         const response = await getRenderCategory();
//         setCategoryRender(response);
//       }catch(error) {
//         console.error(error);
//       }
//     }
//     fetchRenderCategory()
//   },[]);

//   return [categoryRender];
// }