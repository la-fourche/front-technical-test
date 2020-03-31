export interface Options {
}

export interface NamedTags {
}

export interface Finance {
    unit_price: number;
}

export interface Meta {
    finance: Finance;
}

export interface ProductDTO {
    title: string;
    updated_at: Date;
    _tags: string[];
    handle: string;
    vendor: string;
    product_type: string;
    template_suffix?: any;
    sku: string;
    barcode: string;
    option1: string;
    option2?: any;
    option3?: any;
    position: number;
    requires_shipping: boolean;
    taxable: boolean;
    inventory_policy: string;
    inventory_quantity: number;
    inventory_management: string;
    id: number;
    tags: string[];
    option_names: any[];
    variants_count: number;
    variants_min_price: number;
    variants_max_price: number;
    product_image: string;
    published_at: Date;
    body_html_safe: string;
    variant_title: string;
    inventory_management_shopify: number;
    options: Options;
    price: number;
    compare_at_price: number;
    price_ratio: number;
    price_range: string;
    grams: number;
    weight: string;
    image: string;
    named_tags: NamedTags;
    named_tags_names: any[];
    created_at: Date;
    collections: string[];
    collection_ids: any[];
    meta: Meta;
    objectID: string;
}


