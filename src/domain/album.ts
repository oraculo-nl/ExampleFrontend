import { Artiest } from './artiest';

export class Album {


    private _id: number;
    private _naam: string;
    private _artiest: Artiest;
    private _jaar: number;

    constructor(id: number, naam: string, jaar: number, artiest: Artiest) {
        this._id = id;
        this._naam = naam;
        this._artiest = artiest;
        this._jaar = jaar;
    }

    /**
  * Getter id
  * @return {number}
  */
    public get id(): number {
        return this._id;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Getter naam
     * @return {string}
     */
    public get naam(): string {
        return this._naam;
    }

    /**
     * Setter naam
     * @param {string} value
     */
    public set naam(value: string) {
        this._naam = value;
    }

    /**
     * Getter artiest
     * @return {string}
     */
    public get artiest(): Artiest {
        return this._artiest;
    }

    /**
     * Setter artiest
     * @param {string} value
     */
    public set artiest(value: Artiest) {
        this._artiest = value;
    }

    /**
     * Getter jaar
     * @return {number}
     */
    public get jaar(): number {
        return this._jaar;
    }

    /**
     * Setter jaar
     * @param {number} value
     */
    public set jaar(value: number) {
        this._jaar = value;
    }

    public toJSON()
    {
        return {
            id: this.id,
            naam: this.naam,
            artiest: this.artiest,
            jaar: this.jaar
        };
    }

}

