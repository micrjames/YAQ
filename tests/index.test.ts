import { YAQ } from "../YAQ";

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
		 let qValue: number;
		 let data: number;
		 beforeAll(() => {
			qValue = q.front();
			q.dequeue();
			qSize--;
		 	data = q.front();
		 });
		 test("Should remove the element at the front of the queue.", () => {
			console.log(`Dequeue'd value ${qValue} at 0th index gives queue: ${q.toString()}.`);
			expect(data).not.toBe(qValue);
		 });
		 test("Should be an empty queue.", () => {
			expect(data).toBeNull();
		 });
		 test("Should have a size of 0.", () => {
			const size = q.size;
			expect(size).toBe(qSize);
		 });	
	  });
   });
});
