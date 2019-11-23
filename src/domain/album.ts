export class Album {
    private _naam: string;
    private _artiest: string;
    private _jaar: number;

    constructor(naam: string, artiest: string, jaar: number) {
        this._naam = naam;
        this._artiest = artiest;
        this._jaar = jaar;
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
    public get artiest(): string {
        return this._artiest;
    }

    /**
     * Setter artiest
     * @param {string} value
     */
    public set artiest(value: string) {
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

}

