import { Question } from '@interfaces/questions'

//array of questions
export const Questions: Question[] = [
  {
    id: 1,
    description: '¿Como te sientes hoy?',
    title: 'Nombre',
    answer: '',
    isAnswered: true,
    type: 'options',
    options: ['Feliz', 'Triste', 'Enojado'],
  },

  {
    id: 2,
    description: '¿Que fue lo mas divertido que te paso hoy?',
    title: 'Nombre',
    answer: '',
    isAnswered: true,
    type: 'input',
    options: ['kike', 'jose', 'juan'],
  },

  {
    id: 3,
    description: '¿Cuentame tus planes para mañana?',
    title: 'Nombre',
    answer: '',
    isAnswered: true,
    type: 'input',
    options: ['kike', 'jose', 'juan'],
  },

  {
    id: 4,
    description: '¿Que tanto disfrutaste tu dia?',
    title: 'Nombre',
    answer: '',
    isAnswered: true,
    type: 'slider',
    options: ['kike'],
  },
  {
    id: 5,
    description: 'Dime como te sientes',
    title: 'Nombre',
    answer: '',
    isAnswered: true,
    type: 'checkbox',
    options: ['f'],
  },
]
