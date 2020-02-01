import Link from 'next/link';
import React from 'react';

interface PostLinkProps {
    id: string
}

const PostLink = (props: PostLinkProps) => (
    <li>
        <Link href={'/p/[id]'} as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

export default PostLink;
