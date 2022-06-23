import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const endpoint = `${process.env.REACT_APP_API_BASE}/album`;

const useAlbum = () => {
  const [album, setAlbum] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const request = fetch(`${endpoint}/${id}`);
    request
      .then((apiResponse) => {
        if (!apiResponse.ok) {
          console.error(apiResponse.statusText);
          return;
        }
        return apiResponse.json();
      })
      .then((apiResult) => {
        setAlbum(apiResult);
      });
  }, [id]);

  return album;
};

export default useAlbum;
