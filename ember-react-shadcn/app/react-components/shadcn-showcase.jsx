import * as React from 'react';

import { Button } from './ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from './ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { DatePicker } from './ui/date-picker';

function ShadcnShowcase() {
  const [date, setDate] = React.useState();
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Dialog</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Ember + React</DialogTitle>
              <DialogDescription>Este dialog é renderizado via componente React do ShadCN.</DialogDescription>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">
              Os componentes são alimentados por @universal-ember/react e funcionam com reatividade Ember padrão.
            </p>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setDialogOpen(false)}>Confirmar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Date Picker</h2>
        <DatePicker selected={date} onSelect={setDate} placeholder="Selecione uma data" />
        {date && <p className="text-sm text-muted-foreground">Data selecionada: {date.toLocaleDateString()}</p>}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Accordion</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>O que é ShadCN UI?</AccordionTrigger>
            <AccordionContent>
              Coleção de componentes estilizados com Tailwind pensados para React.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Como ele está sendo renderizado?</AccordionTrigger>
            <AccordionContent>
              Estamos utilizando @universal-ember/react para montar componentes React dentro de uma aplicação Ember Octane.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Os componentes respondem à interação?</AccordionTrigger>
            <AccordionContent>
              Sim! Eles mantêm estado interno e também podem comunicar estado de volta para Ember quando necessário.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}

export { ShadcnShowcase };
