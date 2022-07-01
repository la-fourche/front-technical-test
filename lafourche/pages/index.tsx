import type { NextPage } from 'next';
import { Card } from '../src/component/Card';
import { PageDirection } from '../src/component/PageDirection';
import { useProducts } from '../src/hooks/useProducts';

const Home: NextPage = () => {
    const { products, handlePage, isLoading } = useProducts();

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div
                    className='bg-no-repeat relative h-screen p-2'
                    style={{ backgroundImage: 'url(./market.jpg)', backgroundAttachment: 'fixed' }}
                >
                    <div className='bg-white absolute top-1/2 inset-0 p-2'>
                        <div className='grid grid-cols-5 place-items-center  gap-4'>
                            {products?.map(product => {
                                return (
                                    <Card
                                        key={product.id}
                                        image={product.product_image}
                                        name={product.title}
                                        price={product.price}
                                        handle={product.handle}
                                    />
                                );
                            })}
                        </div>

                        <PageDirection action={handlePage} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
