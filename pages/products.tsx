import * as React from 'react'


type Props = {
    blabla: number
}

interface Query {
    page: number;
}

export default class Products extends React.Component<Props> {

    static async getInitialProps({query, res}: { query: Query, res: any }) {

        return {
            blabla: query.page
        }
    }

    render() {

        return (
           <div>
               <h1>Hello {this.props.blabla}</h1>
           </div>
        )
    }

}

