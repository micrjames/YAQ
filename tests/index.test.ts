import { YAQ } from "../YAQ";

describe("An array-like Queue of data", () => {
   console.log("A Queue of numbers:");
   describe("When Created", () => {
	  let q: YAQ<number>;
	  beforeAll(() => {
		 q = new YAQ();
		 console.log(`${q.toString()}`);
	  });
	  test.todo("Should exist.");
	  test.todo("Should be empty.");
	  test.todo("Should not give an item.");
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
		 let enQidx: number;
		 let errIdx: number;
		 beforeAll(() => {
			enQValue = 1;
			enQidx = 0;
			errIdx = -1;
			q.enqueue(enQValue);
			qSize++;
		 });
		 test.todo("Should not be empty.");
		 test.todo("Should retrieve the element that was 'enqueue'd");
		 test.todo("Should be of a size of one element.");
	  });
   });
});
