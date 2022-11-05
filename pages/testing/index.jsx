import fs from "fs/promises";
import path from "path";

const testingServerSideRender = (props) => {
  const { products } = props;

  //   useEffect(() => {
  //     try {
  //       const fetchData = async () => {
  //         const data = await fetch("/testing.json");
  //         const json = await data.json();
  //         setDataProd(json.products);
  //       };
  //       fetchData();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, []);

  return (
    <ul>
      {products.map((product) => {
        return <li key={product.id}>{product.product}</li>;
      })}
    </ul>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "testing.json"); //cwd-current working directory, process.cwd takes us to the main directory.
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
  };
}

export default testingServerSideRender;
