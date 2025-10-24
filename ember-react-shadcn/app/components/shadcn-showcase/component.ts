import Component from '@glimmer/component';
import type { ComponentLike } from '@glint/template';
import { makeRenderable } from '@universal-ember/react';
import { ShadcnShowcase as ReactShowcase } from '../../react-components/shadcn-showcase.jsx';

const RenderableShowcase = makeRenderable(ReactShowcase);

export default class ShadcnShowcaseComponent extends Component {
  Showcase: ComponentLike = RenderableShowcase;
}
