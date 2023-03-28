export function addToLocalStorage(notes: any): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('notes', JSON.stringify(notes));
  }
}

export function getFromLocalStorage(): string | undefined {
  if (typeof window !== 'undefined') {
    const reference = localStorage.getItem('notes');
    if (reference !== null) {
      return reference ? JSON.parse(reference) : undefined;
    }
  }
}