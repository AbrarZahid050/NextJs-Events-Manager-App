import fs from "fs/promises";
import path from "path";
import { Fragment } from "react";

const detailedProduct = (props) => {
  const { loadedProduct } = props;
  return (
    <Fragment>
      <h1>{loadedProduct.product}</h1>
      <p>{loadedProduct.desc}</p>
    </Fragment>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), "public", "testing.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
};

export async function getStaticProps(context) {
  const { params } = context;
  const prodId = params.pid;

  const data = await getData();
  const product = data.products.find((product) => product.id === prodId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const id = data.products.map((product) => {
    return { params: { pid: `${product.id}` } }; //Dynamically adding the id's which needs to be preRendered.
  });

  return {
    paths: id,
    fallback: "blocking",
  };
}

export default detailedProduct;
