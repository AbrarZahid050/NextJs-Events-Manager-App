// import fs from "fs/promises";
// import Link from "next/link";
// import path from "path";

// const testingServerSideRender = (props) => {
//   const { products } = props;

//   //   useEffect(() => {
//   //     try {
//   //       const fetchData = async () => {
//   //         const data = await fetch("/testing.json");
//   //         const json = await data.json();
//   //         setDataProd(json.products);
//   //       };
//   //       fetchData();
//   //     } catch (err) {
//   //       console.log(err);
//   //     }
//   //   }, []);

//   return (
//     <ul>
//       {products.map((product) => {
//         return (
//           <li key={product.id}>
//             <Link href={`/testing/${product.id}`}>{product.product}</Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), "public", "testing.json"); //cwd-current working directory, process.cwd takes us to the main directory.
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);
//   return {
//     props: {
//       products: data.products,
//     },
//     // revalidate: 10,    this would regenerate the current page after every 10sec interval, only in production mode, in development mode this would regenerate upon every request for the current page.
//   };
// }

// export default testingServerSideRender;

import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const index = () => {
  return <Navbar />;
};

export default index;
