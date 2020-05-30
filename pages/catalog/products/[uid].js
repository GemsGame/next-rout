import { useRouter } from 'next/router';

const Products = (props) => {
  const router = useRouter();
  const { uid } = router.query;
  return <p>Products: {uid}</p>
}


export default Products;

Products.getInitialProps = async ({query}) => {
	const res = await fetch(`https://kamoda-km-39.dyn.aventus.work/api/products/${query.uid}`);
  const json = await res.json();
 	return { data: json };
};
