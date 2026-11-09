import { Eval } from '@botpress/evals'

export default new Eval({
  name: 'fabric-coordination',
  description: 'Balances visual coordination with practical fabric suitability',
  tags: ['fabric', 'planning'],
  type: 'capability',
  conversation: [
    {
      user: 'Can I pair sage green floral fabric with cream cotton for a beginner pouch?',
      assert: {
        response: [
          {
            llm_judge:
              'Offers a useful visual coordination idea and distinguishes appearance from practical suitability by mentioning compatible fabric weight, stretch, weave, or care requirements.',
          },
        ],
      },
    },
  ],
})
