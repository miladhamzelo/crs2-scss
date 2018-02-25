import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class AppResizeService {
	public appResized$: EventEmitter<boolean>;

	constructor() {
		this.appResized$ = new EventEmitter();
	}

	public appResized(): void {
		this.appResized$.emit(true);
	}
}
