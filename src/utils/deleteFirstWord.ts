function deleteFirstWord(words: string) {
  if (words == null || words.length === 0) {
    return '';
  }

  return words.slice(1);
}

export default deleteFirstWord;
