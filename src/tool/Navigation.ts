
export default class Navigation {

    static buildUrlForProductList(position: number){
        return {
            href: "/products/" + position.toString(),
            as: "/products/" + position.toString()
        }
    }

    static buildUrlForProduct(id: string){
        return {
            href: "/product/" + id,
            as: "/product/" + id
        }
    }


}