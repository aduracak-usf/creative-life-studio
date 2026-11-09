import { Eval } from '@botpress/evals'

export default new Eval({
  name: 'project-breakdown',
  description: 'Produces a structured plan with an actionable sequence',
  tags: ['project-planning', 'tools'],
  type: 'capability',
  conversation: [
    {
      user: 'Plan a beginner quilted coaster project for me.',
      assert: {
        response: [
          {
            llm_judge:
              'Returns a structured project plan with a title, category, description, skill level, realistic duration, energy requirement, materials, at least three ordered steps, and one small next action. Does not claim the plan was saved.',
          },
        ],
      },
    },
  ],
})
