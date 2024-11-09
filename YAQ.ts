import { dataObj } from "./utils/utils";
import { StringBuilder } from "./StringBuilder/StringBuilder";
import { Range } from "./Range/range";


export class YAQ<T> implements IterableIterator<dataObj<T>> {
   protected data: dataObj<T>;
   protected _size: number;
   private idx = 0;

   constructor() {
	  this.data = {};
	  this._size = 0;
   }

   enqueue(element: T) {
	  this.data[this._size] = element;
	  this._size++;
   }

   dequeue() {
	   if(this.is_empty) return;
	   const idxs = [...new Range(this._size)];
	   idxs.forEach(idx => {
		  this.data[idx] = this.data[idx+1];
	   });
	   this._size--;
	   delete this.data[this._size];
   }

   front(): T | null {
	  if(this.is_empty) return null;
	  return this.data[0];
   }

   get size(): number {
	  return this._size;
   }

   get is_empty(): boolean {
	  return this._size === 0;
   }

   next(): IteratorResult<dataObj<T>> {
	  if(this.idx < this._size)
		 return {
			done: false,
			value: this.data[this.idx++] as any
		 }
	  else
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
