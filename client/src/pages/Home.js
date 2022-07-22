import { useState, useEffect } from "react";
import { axios } from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [coaster, setCoaster] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getCoaster = async () => {
      let response = await axios.get(
        `https://data.mongodb-api.com/app/data-spxce/endpoint/data/v1`
      );
      console.log(response);
      setCoaster(response.data.results);
    };
    getCoaster();
  }, []);

  return <div></div>;
};

export default Home;
