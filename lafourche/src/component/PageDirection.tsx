import { Page } from '../hooks/useProducts';

type PageDirectionProps = {
    action: (direction: Page) => void;
};

export const PageDirection = ({ action }: PageDirectionProps) => {
    return (
        <div className='flex space-x-4 justify-center py-4'>
            <button className='bg-[#FFE78D] w-6 text-center h-6 rounded-full' onClick={() => action(Page.PREV)}>
                {'<'}
            </button>
            <button className='bg-[#FFE78D] w-6 text-center h-6 rounded-full' onClick={() => action(Page.NEXT)}>
                {'>'}
            </button>
        </div>
    );
};
