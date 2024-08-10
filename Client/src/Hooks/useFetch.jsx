import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {

// States
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const fetchData = async () => {
    try {
      setloading(true);
      await axios.get(url,{withCredentials:true}).then((res) => {
        setdata(res.data.tasks);
        setloading(false);
      });
    } catch (error) {
      seterror( error.response ? error.response.data.message : error.message)
      setloading(false)
    }
  };

// UseEffect to fetch data from api
  useEffect(() => {
  fetchData();
    // Return function
    const interval = setInterval(() => {
      fetchData(); // Fetch data periodically
    }, 30000); // 60000ms = 1 minute

    return () => clearInterval(interval);
  }, [url]);

  // Return the data error and loading
  return {data,loading,error}
};

export default useFetch;
