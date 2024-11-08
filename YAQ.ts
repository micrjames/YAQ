import { dataObj } from "./utils/utils";
import { StringBuilder } from "./StringBuilder/StringBuilder";

export class YAQ<T> implements IterableIterator<dataObj<T>> {
   protected data: dataObj<T>;
   protected _size: number;
   private idx = 0;

   constructor() {
	  this.data = {};
	  this._size = 0;
   }

   enqueue(element: T) {
   }

   dequeue() {
   }

   front() {
   }

   get size(): number {
	  return this._size;
   }

   get is_empty(): boolean {
	  return this._size === 0;
   }

   next(): IteratorResult<dataObj<T>> {
	  return {
		 done: true,
		 value: null
	  };
   }

   [Symbol.iterator](): IterableIterator<dataObj<T>> {
	  return this;
   }

   toString(): string {
	  const sb = new StringBuilder();
	  let str: string;
	  sb.append('[');
	  for(let idx = 0; idx <= this._size; idx++) {
		 if(this.data[idx] !== undefined) {
			let data = this.data[idx];
			if(typeof data === "object")
			   str = JSON.stringify(data);
			else str = `${data}`;
			sb.append(str);
			if(idx < this._size-1)
			   sb.append(',');
		 }
	 }
	 sb.append(']');

	 return sb.build();
  }
}
