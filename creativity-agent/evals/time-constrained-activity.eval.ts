import { Eval } from '@botpress/evals'

export default new Eval({
  name: 'time-constrained-activity',
  description: "Keeps a creative activity within the user's available time",
  tags: ['time', 'planning'],
  type: 'capability',
  conversation: [
    {
      user: 'I have ten minutes to sew tonight. What is one small thing I can do?',
      assert: {
        response: [
          {
            llm_judge:
              'Recommends one sewing-related task that fits within ten minutes, such as practicing a few stitches on scrap or preparing supplies, and does not imply a larger project can be completed in that time.',
          },
        ],
      },
    },
  ],
})
