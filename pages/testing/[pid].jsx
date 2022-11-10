import fs from "fs/promises";
import path from "path";
import { Fragment } from "react";

const detailedProduct = (props) => {
  const { loadedProduct } = props;
  return (
    <Fragment>
      <h1>{loadedProduct.desc}</h1>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const prodId = params.pid;
  console.log(prodId);

  const filePath = path.join(process.cwd(), "public", "testing.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === prodId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "u1" } },
      { params: { pid: "u2" } },
      { params: { pid: "u3" } },
    ],
    fallback: false,
  };
}

export default detailedProduct;
