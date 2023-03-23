import { FaPhp, FaReact } from 'react-icons/fa'
import { SiGraphql, SiJquery, SiRedux, SiRubyonrails } from 'react-icons/si'
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandStorybook,
  TbBrandTypescript,
} from 'react-icons/tb'
import { DiRuby } from 'react-icons/di'
import { TechnologyType } from '@/data/types/experiences'

export const react: TechnologyType = {
  name: 'React',
  iconComponent: FaReact,
}

export const redux: TechnologyType = {
  name: 'Redux',
  iconComponent: SiRedux,
}

export const typeScript: TechnologyType = {
  name: 'TypeScript',
  iconComponent: TbBrandTypescript,
}

export const css: TechnologyType = {
  name: 'CSS',
  iconComponent: TbBrandCss3,
}

export const storyBook: TechnologyType = {
  name: 'StoryBook',
  iconComponent: TbBrandStorybook,
}

export const graphQL: TechnologyType = {
  name: 'GraphQL',
  iconComponent: SiGraphql,
}

export const html: TechnologyType = {
  name: 'HTML',
  iconComponent: TbBrandHtml5,
}

export const javaScript: TechnologyType = {
  name: 'JavaScript',
  iconComponent: TbBrandJavascript,
}

export const jQuery: TechnologyType = {
  name: 'jQuery',
  iconComponent: SiJquery,
}

export const ruby: TechnologyType = {
  name: 'Ruby',
  iconComponent: DiRuby,
}

export const rubyOnRails: TechnologyType = {
  name: 'Ruby on Rails',
  iconComponent: SiRubyonrails,
}

export const php: TechnologyType = {
  name: 'PHP',
  iconComponent: FaPhp,
}
