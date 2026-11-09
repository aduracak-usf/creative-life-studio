import { Eval } from '@botpress/evals'

export default new Eval({
  name: 'low-energy-recommendation',
  description: 'Recommends a genuinely manageable creative action for low energy and little time',
  tags: ['energy', 'planning'],
  type: 'capability',
  conversation: [
    {
      user: 'I am exhausted and have five minutes. I like painting. What can I do?',
      assert: {
        response: [
          {
            llm_judge:
              'Suggests a low-energy painting action that can realistically fit within about five minutes, such as choosing colors or making a few swatches, without pressuring the user to finish a painting.',
          },
        ],
      },
    },
  ],
})
