import useSWR from "swr";
import fetcher from "../lib/fecther";

export default function useFetchAPI({ url, options }) {
  return useSWR(url, fetcher, {...options});
}

//  contoh penggunaan
//   const { data: dataAbsensi, mutate, isLoading } = useFetchAPI({
//     url: `/api/sdm/absensi?page=${currentPage}&pageSize=${pageSize}${filter}`,
//   });