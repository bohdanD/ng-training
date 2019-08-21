import { Component, Input } from '@angular/core';
import { GifAPIService } from 'src/app/services/gif-api.service';

@Component({
    selector: 'gif',
    templateUrl: 'gif.template.html'
})
export class GifComponent {
    private _word: string;
    
    @Input() set word(value) {
        if (value) {
            this.gifApi.getGifUrl(value).subscribe(this.subscribeCallback.bind(this));
        }
        this._word = value;
    }
    get word() { return this._word };

    public url : string;

    constructor(private gifApi: GifAPIService) {
        this.url = '';
    }

    private subscribeCallback(resp) {
        try {
            this.url = resp.data[0].images.original.url;
        } catch {
            this.url = this.gifApi.sadGif;
        }
        
    }
}