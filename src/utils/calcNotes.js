export const calcNotes = entry => {
  if (entry < 0) {
    throw 'InvalidArgumentException';
  }
  if (entry % 10 > 0) {
    throw 'NoteUnavailableException';
  }
  if (entry === 0) return [];
  
  const result = [];
  let currentRest = entry;
  const availableNotes = [100, 50, 20, 10];
  availableNotes.forEach(note => {
    while (currentRest > 0 && currentRest - note >= 0) {
      currentRest -= note;
      result.push(note);
    }
  });
  return result;
};

