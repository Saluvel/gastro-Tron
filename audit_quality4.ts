import { PRELOADED_QUESTIONS } from './src/data/questionBank';

const ids = [
  'q-44',  'q-45',
  'q-65',  'q-110',
  'q-132', 'q-133',
  'q-191', 'q-209',
  'q-247'
];

for (const q of PRELOADED_QUESTIONS) {
  if (ids.includes(q.id)) {
    console.log(q.id, q.options);
  }
}
