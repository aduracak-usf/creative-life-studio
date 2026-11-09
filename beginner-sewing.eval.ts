import { Eval } from '@botpress/evals'

export default new Eval({
  name: 'beginner-sewing-guidance',
  description: 'Gives accurate, safe beginner sewing advice',
  tags: ['sewing', 'beginner', 'safety'],
  type: 'capability',
  conversation: [
    {
      user: 'I have never sewn before. How can I practice a straight stitch safely?',
      assert: {
        response: [
          {
            llm_judge:
              'Gives beginner-friendly steps to practice on fabric scraps and includes a relevant safety precaution, such as keeping fingers away from the machine needle and turning the machine off before adjustments.',
          },
        ],
      },
    },
  ],
})
