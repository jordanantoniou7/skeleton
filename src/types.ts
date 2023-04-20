
export interface RESTAURANT {
    tables: TABLE[]
}

export interface TABLE {
    id: number,
    occupied: boolean,
    customer?: CUSTOMER
}

export interface CUSTOMER {
    name: string,
    phoneNumber: string
}
