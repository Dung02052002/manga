import { memo } from "react";
import useFetchManga from "../hooks/useFetchManga";
import ServerCard from "../pages/Server/ServerCard";
import useFetch from "../hooks/useFetch";

const ServerList = memo(function ServerList({index}){

  const mangaList = useFetch(index);
  const firstItem = mangaList.slice(0, 10);
    return(
        <>
        <div className="grid md:grid-cols-5 2xl:grid-cols-10  gap-[20px] px-[60px] pb-[60px]">
        {firstItem.map((item, index) => (
          <ServerCard
            key={index}
            poster={item?.image_poster_link_goc}
            title={item?.title_manga} 
            rate={item?.rate} 
            update={item.time_release}
            chapter={item?.chapter_new}
            path_segment={item?.path_segment_manga}
          />
        ))}
      </div>
     </>
    )
})

export default ServerList;
