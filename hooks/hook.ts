import {useInfiniteQuery} from "@tanstack/react-query";
import {uniqBy} from "lodash";
import axios from "axios";

export default function useInfiniteSearchNFT() {
  const queryResults = useInfiniteQuery(['search', 'infinite'], {
    async queryFn({ queryKey, pageParam = 0 }) {
      const [_, __, collection, sortBy] = queryKey

      console.log("@@ pageParam", pageParam)
      
      
      const { data } = await axios({
        method: 'get',
        url: 'https://dev-api.bugdisk.xyz/nft/search',
        params: {
          count: 100,
          pageNo: pageParam,
          order: 'POPULARITY',
        }
      })

      
      return {
        data: data.data,
        nextPage: data.data.nextPageNo,
        isLast: data.data.list.length < 1 || data.data.nextPageNo === 0,
      }
    },
    getNextPageParam: ({ isLast, nextPage }) => {
      console.log("@@ isLast", isLast)
      return isLast ? undefined : nextPage
    },
    staleTime: 60_000,
    keepPreviousData: true,
    enabled: true,
    retry: 0,
    refetchOnWindowFocus: false,
  })
  
  
  const pages = queryResults.data?.pages ?? []
  const allList = pages.map(page => page.data.list).flat()
  const pageData = uniqBy(allList, item => item.tokenId)

  const onReachEnd = () => {
    if (queryResults.hasNextPage && !queryResults.isFetching) {
      queryResults.fetchNextPage()
    }
  }
  
  
  return { ...queryResults, data: pageData, onReachEnd }
}