import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GifAPIService {
    private key = 'TKh5tHWvMv9hMpUeBBGg9JH5256fr7gr';
    private limit = 5;
    public sadGif = 'https://media0.giphy.com/media/1BXa2alBjrCXC/200_s.gif';

    constructor(private http: HttpClient) { }

    getGifUrl(word) {
        const url = `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=${this.key}&limit=${this.limit}`;

        return this.http.get(url);
    }
}