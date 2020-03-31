import * as React from "react";
import Head from 'next/head'

import "./styles.css";


interface Props {
    title: string;
}

export default class CustomLayout extends React.PureComponent<Props> {


    render() {

        const {title} = this.props;

        return (
            <>
                <Head>
                    <title>{title}</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>

                    {this.props.children}

            </>
        );
    }
}