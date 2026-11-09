import { Action, z } from '@botpress/runtime'

const projectPlanSchema = z.object({
  title: z.string().describe('Short, descriptive project title'),
  category: z.enum(['Painting', 'Sewing', 'Fabric', 'DIY']).describe('Primary creative category'),
  description: z.string().describe('What the project is and why it fits'),
  skillLevel: z.enum(['Beginner', 'Intermediate', 'Advanced']).describe('Required skill level'),
  estimatedDurationMinutes: z.number().describe('Realistic total active minutes'),
  energyRequirement: z.enum(['Low', 'Medium', 'High']).describe('Energy level best suited to this project'),
  materials: z.array(z.string()).describe('Materials needed'),
  steps: z.array(z.string()).describe('Three to five ordered, actionable steps'),
  nextAction: z.string().describe('One small action to take next'),
})

export default new Action({
  name: 'createProjectPlan',
  title: 'Create a structured creative project plan',
  description:
    'Validate and return a realistic creative project plan. This does not save the plan to the website or schedule it.',
  input: projectPlanSchema,
  output: projectPlanSchema,
  handler: async ({ input }) => input,
})
