import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import prodApis from "../api/home";

const useFetchManga = (index) => {
    const [data, setData] = useState([]);
    const mg = useSelector((state)=>state.server.mg);
    const getData = async () => {
        const response = await prodApis.server_manga(mg);
        setData(response.data[index].data);
    };
    useEffect(() => {
      getData();
  }, [mg]);
  return data;
}

export default useFetchManga