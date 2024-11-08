import { YAQ } from "../YAQ";
import { dataObj } from "../utils/utils";
import { Point } from "../utils/Point";

describe("An array-like Queue of data", () => {
   console.log("A Queue of Points:");
   describe("When Created", () => {
	  let q: YAQ<Point>;
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
	  let q: YAQ<Point>;
	  let qSize: number;
	  beforeAll(() => {
		 q = new YAQ();
		 qSize = 0;
		 console.log("Basic Operations:");
	  });
	  describe("enqueue", () => {
		 let enQValue: Point;
		 beforeAll(() => {
			enQValue = new Point(0, 0);
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
		 let qValue: Point;
		 let data: Point;
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
   describe("That is iterable", () => {
	  describe("Gives each value of the Queue.", () => {
		 let q: YAQ<Point>;
		 let enQValues: Point[];
		 beforeAll(() => {
			q = new YAQ();
			enQValues = [
			   new Point(0, 0),
			   new Point(1, 0),
			   new Point(0, 1),
			   new Point(-1, 0),
			   new Point(0, -1),
			];
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
		 let q: YAQ<Point>;
		 let enQValues: Point[];
		 let qArr: dataObj<Point>[];
		 beforeAll(() => {
			q = new YAQ();
			enQValues = [
			   new Point(0, 0),
			   new Point(1, 0),
			   new Point(0, 1),
			   new Point(-1, 0),
			   new Point(0, -1),
			];
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
		 test("Should equal '[new Point(0, 0),new Point(1, 0),new Point(0, 1),new Point(-1, 0),new Point(0, -1)]'.", () => {
			expect(qArr).toEqual(enQValues);
		 });
		 test("Should iterate the elements.", () => {
			qArr.forEach((el, idx) => {
			   expect(el).toBe(enQValues[idx]);
			});
			for(const [idx, el] of qArr.entries()) {
			   expect(el).toBe(enQValues[idx]);
			}
		 });
	  });
   });
});
