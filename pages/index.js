import Link from 'next/link';

const IndexPage = () => (
  <>
    <p>Hello, I'm the index page</p>
    <Link href="/catalog/products?=1">
    <a>Product</a>
    </Link>
  </>
)

export default IndexPage;
