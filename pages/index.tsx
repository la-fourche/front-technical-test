import * as React from 'react'


type Props = {

}

interface Query {
}

export default class Index extends React.Component<Props> {

    static async getInitialProps({query, res}: { query: Query, res: any }) {

        return {

        }
    }

    render() {

        return (
           <div>
               <h1>Hello</h1>
           </div>
        )
    }


}

