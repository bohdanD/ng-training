import { Component, Input } from '@angular/core';
import { GifAPIService } from 'src/app/services/gif-api.service';

@Component({
    selector: 'gif',
    templateUrl: 'gif.template.html'
})
export class GifComponent {
    private _word: string;
    public isLoading = false;

    private _loading = 'https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';
    
    @Input() set word(value) {
        if (value) {
            this.gifApi.getGifUrl(value).subscribe(this.subscribeCallback.bind(this));
            //this.isLoading = true;
            // this.url = this._loading;
        }
        this._word = value;
    }
    get word() { return this._word };

    public urls : Array<string>;

    constructor(private gifApi: GifAPIService) {
        this.urls = [];
    }

    private subscribeCallback(resp) {
        try {
            this.urls = resp.data.map(d => d.images.original.url);
        } catch {
            this.urls[0] = this.gifApi.sadGif;
        } finally {
          //this.isLoading = false;
        }
    }

    onLoad() {
      this.isLoading = false;
    }
}