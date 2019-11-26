import { Artiest } from './artiest';
import { Album } from './album';

export class Song {
    private _id: number;
    private _naam: string;
    private _jaar: number;
    private _artiest: Artiest;
    private _album: Album;


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
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

    /**
     * Getter artiest
     * @return {Artiest}
     */
	public get artiest(): Artiest {
		return this._artiest;
	}

    /**
     * Setter artiest
     * @param {Artiest} value
     */
	public set artiest(value: Artiest) {
		this._artiest = value;
	}

    /**
     * Getter album
     * @return {Album}
     */
	public get album(): Album {
		return this._album;
	}

    /**
     * Setter album
     * @param {Album} value
     */
	public set album(value: Album) {
		this._album = value;
	}

    
}
