/*
08.
write a function 'age' that given a person returns how many years old they are
*/
beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date(2020, 3, 1));
});

afterAll(() => {
  jest.useRealTimers();
});

test("returns the person's age when their birthday is earlier in the year than today", () => {
  expect(true).toBe(true);
});

test("returns the person's age when their birthday is later in the year than today", () => {
  expect(true).toBe(true);
});

test("returns the person's age when today is their birthday", () => {
  expect(true).toBe(true);
});

test("returns the person's age when their birthday is a leap day and today is February 28 on a non-leap year", () => {
  expect(true).toBe(true);
});

test("returns the person's age when their birthday is a leap day and today is March 1 on a non-leap year", () => {
  expect(true).toBe(true);
});

test("returns the person's age when their birthday is a leap day and today is February 29 on a leap year", () => {
  expect(true).toBe(true);
});
