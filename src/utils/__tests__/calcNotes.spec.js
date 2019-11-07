import { calcNotes } from "../calcNotes";

describe("Cash machine test", () => {
  it("should return correct result with correct data", () => {
    const result = calcNotes(140);
    expect(result).toEqual([100, 20, 20]);
  });
  it("should throw an InvalidArgumentException if entry is less than 0", () => {
    function fn() {
      return calcNotes(-120);
    }
    expect(fn).toThrow('InvalidArgumentException');
  });
  it("should throw an NoteUnavailableException if entry couldn't be got", () => {
    function fn() {
      return calcNotes(125);
    }
    expect(fn).toThrow('NoteUnavailableException');
  });
  it("should return an empty array if ", () => {
    const result = calcNotes(0);
    expect(result).toEqual([]);
  });
});
