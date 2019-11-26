import { Artiest } from './artiest';
import { Song } from './song';

export class Hit {
    private _id:number;
    private _artiest: Artiest;
    private _song: Song;


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
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
     * Getter song
     * @return {Song}
     */
	public get song(): Song {
		return this._song;
	}

    /**
     * Setter song
     * @param {Song} value
     */
	public set song(value: Song) {
		this._song = value;
	}

}
