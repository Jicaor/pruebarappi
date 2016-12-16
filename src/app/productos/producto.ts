export class Producto {

    id: number;
    name: string;
    price: number;
    available: boolean;
    best_seller: boolean;
    categories: number[];
    img: string;
    description: string;

    constructor(id: number, name: string, price: number, available: boolean, best_seller: boolean, categories: number[], img: string, description: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.available = available;
        this.best_seller = best_seller;
        this.categories = categories;
        this.img = img;
        this.description = description;
    }

}
