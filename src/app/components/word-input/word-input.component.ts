import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'word-input',
    templateUrl: 'word-input.template.html'
})
export class WordInputComponent {

    inputPlaceholder: string = 'type some word';

    word = '';

    @Output() search = new EventEmitter<string>();

    searchHandler() {
        this.search.emit(this.word);
    }

}