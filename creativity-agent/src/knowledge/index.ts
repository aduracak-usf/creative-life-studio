import { DataSource, Knowledge } from '@botpress/runtime'

const studioReferenceSource = DataSource.Directory.fromPath('src/knowledge', {
  id: 'studio-reference-materials',
  filter: (filePath) => filePath.endsWith('.md'),
})

export const CreativeStudioKnowledge = new Knowledge({
  name: 'creative-studio-reference',
  description:
    'References for sewing, painting, fabric and color design, DIY, project planning, Creative Life Studio features and limitations, FAQs, and internal evaluation scenarios.',
  sources: [studioReferenceSource],
})
