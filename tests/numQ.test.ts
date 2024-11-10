import { YAQ } from "../YAQ";
import { dataObj } from "../utils/utils";

describe("An array-like Queue of data", () => {
   console.log("A Queue of numbers:");
   describe("When Created", () => {
	  let q: YAQ<number>;
	  beforeAll(() => {
		 q = new YAQ();
		 console.log(`${q.toString()}`);
	  });
	  test("Should exist.", () => {
		 expect(q).toBeDefined();
	  });
	  test("Should be empty.", () => {
		 const isEmpty = q.is_empty;
		 expect(isEmpty).toBeTruthy();
	  });
	  test("Should not give an item.", () => {
		 const data = q.front();
		 expect(data).toBeNull();
	  });
   });
   describe("Basic operations", () => {
	  let q: YAQ<number>;
	  let qSize: number;
	  beforeAll(() => {
		 q = new YAQ();
		 qSize = 0;
		 console.log("Basic Operations:");
	  });
	  describe("enqueue", () => {
		 let enQValue: number;
		 beforeAll(() => {
			enQValue = 1;
			q.enqueue(enQValue);
			qSize++;
		 });
		 test("Should not be empty.", () => {
			const isEmpty = q.is_empty;
			expect(isEmpty).not.toBeTruthy();
		 });
		 test("Should retrieve the element that was 'enqueue'd", () => {
			const data = q.front();
			console.log(`Initial enqueue: ${q.toString()}.`);
			expect(data).toBe(enQValue);
		 });
		 test("Should be of a size of one element.", () => {
			const size = q.size;
			expect(size).toBe(qSize);
		 });
	  });
	  describe("dequeue", () => {
		 let dequeuedValue: number;
		 let data: number;
		 beforeAll(() => {
		 	data = q.front();
			dequeuedValue = q.dequeue();
			qSize--;
		 });
		 test("Should remove the element at the front of the queue.", () => {
			console.log(`Dequeue'd value ${dequeuedValue} at 0th index gives queue: ${q.toString()}.`);
			expect(data).toBe(dequeuedValue);
		 });
		 test("Should be an empty queue.", () => {
		 	data = q.front();
			expect(data).toBeNull();
		 });
		 test("Should have a size of 0.", () => {
			const size = q.size;
			expect(size).toBe(qSize);
		 });	
	  });
   });
   describe("That is iterable", () => {
	  describe("Gives each value of the Queue.", () => {
		 let q: YAQ<number>;
		 let enQValues: number[];
		 beforeAll(() => {
			q = new YAQ();
			enQValues = [1, 2, 3, 4, 5];
			enQValues.forEach(enQValue => {
			   q.enqueue(enQValue);
			});
		 });
		 test("Should be 0.", () => {
			const nextEl = q.next();
			const nextElDone = nextEl.done;
			const nextElValue = nextEl.value;
			expect(nextElDone).toBeFalsy();
			expect(nextElValue).toBe(enQValues[0]);
		 });
		 test("Should be 1.", () => {
			const nextEl = q.next();
			const nextElDone = nextEl.done;
			const nextElValue = nextEl.value;
			expect(nextElDone).toBeFalsy();
			expect(nextElValue).toBe(enQValues[1]);
		 });
		 test("Should be 2.", () => {
			const nextEl = q.next();
			const nextElDone = nextEl.done;
			const nextElValue = nextEl.value;
			expect(nextElDone).toBeFalsy();
			expect(nextElValue).toBe(enQValues[2]);
		 });
		 test("Should be 3.", () => {
			const nextEl = q.next();
			const nextElDone = nextEl.done;
			const nextElValue = nextEl.value;
			expect(nextElDone).toBeFalsy();
			expect(nextElValue).toBe(enQValues[3]);
		 });
		 test("Should be 4.", () => {
			const nextEl = q.next();
			const nextElDone = nextEl.done;
			const nextElValue = nextEl.value;
			expect(nextElDone).toBeFalsy();
			expect(nextElValue).toBe(enQValues[4]);
		 });
		 test("Should be 'null'", () => {
			const nextEl = q.next();
			const nextElDone = nextEl.done;
			const nextElValue = nextEl.value;
			expect(nextElDone).toBeTruthy();
			expect(nextElValue).toBeNull();
		 });
	  });
	  describe("Gives the values as an array.", () => {
		 let q: YAQ<number>;
		 let enQValues: number[];
		 let qArr: dataObj<number>[];
		 beforeAll(() => {
			q = new YAQ();
			enQValues = [1, 2, 3, 4, 5];
			enQValues.forEach(enQValue => {
			   q.enqueue(enQValue);
			});

			qArr = [...q];
		 });
		 test("Should not be empty.", () => {
			expect(qArr).not.toBeFalsy();
		 });
		 test("Should contain 5 elements.", () => {
			const qArrSize = enQValues.length;
			expect(qArr).toHaveLength(qArrSize);
		 });
		 test("Should equal '[1, 2, 3, 4, 5]'.", () => {
			expect(qArr).toEqual(enQValues);
		 });
		 test("Should iterate the elements.", () => {
			qArr.forEach((el, idx) => {
			   expect(el).toBe(idx + 1);
			});
			let idx = 0;
			for(const el of qArr) {
			   ++idx;
			   expect(el).toBe(idx);
			}
		 });
	  });
   });
});
