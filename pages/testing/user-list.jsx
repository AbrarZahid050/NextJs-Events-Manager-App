import { useEffect, useState } from "react";
import Image from "next/Image";
import useSWR from "swr";

const userList = (props) => {
  //   const [data, setComment] = useState([]);

  //   useEffect(() => {
  //     const fetchApi = async () => {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/photos"
  //       );
  //       const data = await response.json();
  //       setComment(data);
  //     };
  //     fetchApi();
  //   }, []);

  const { data } = useSWR(
    "https://jsonplaceholder.typicode.com/photos",
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
  );

  return (
    <div>
      <ul>
        {data?.map((comment) => {
          return (
            <li key={comment.id}>
              <h3>{comment.id}</h3>
              <img src={comment.thumbnailUrl} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default userList;
