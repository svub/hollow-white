export function paragraphFilename(chapterId: string, sectionId: string, paragraphIndex: number, paragraphHash: string) {
  return `${chapterId}-${sectionId}-paragraph-${paragraphIndex}-${paragraphHash}.mp3`
}


export function titleFilename(chapterId: string, sectionId: string) {
  return `${chapterId}-${sectionId}-title.mp3`
}

export function decisionFilename(chapterId: string, sectionId: string) {
  return `${chapterId}-${sectionId}-decision.mp3`
}