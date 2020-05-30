import { useRouter } from 'next/router';

const Products = (props) => {
  const router = useRouter();
  console.log(router);
  const { name } = router.query;
  return <p>Products: {name}</p>
}


export default Products;


Products.getInitialProps = async () => {
	const res = await fetch(`https://kamoda-km-39.dyn.aventus.work/api/products/djemper-b-u52`);
  const json = await res.json();
 	return { data: json };
};
