import { makeRenderable } from '@universal-ember/react';
import { ShadcnHome as ReactShadcnHome } from '../react-components/shadcn-home';

const ShadcnHome = makeRenderable(ReactShadcnHome);

<template>
  <ShadcnHome />
</template>
