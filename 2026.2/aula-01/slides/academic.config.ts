/**
 * Informações acadêmicas compartilhadas pela capa e pelo rodapé.
 *
 * Edite somente este objeto ao reutilizar o template para outra apresentação.
 */
export interface AcademicPresentation {
  courseName: string
  subjectName: string
  subjectAcronym: string
  subjectCode: string
  professorName: string
  professorContact: string
  presentationTitle: string
}

export const academicConfig = {
  courseName: 'Bacharelado em Sistemas de Informação',
  subjectName: 'Interação Humano-Computador',
  subjectAcronym: 'IHC',
  subjectCode: 'INF03079',
  professorName: 'Filipe Fernandes, PhD',
  professorContact: 'https://filipefernandesphd.com',
  presentationTitle: 'Introdução à IHC',
} satisfies AcademicPresentation
