import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Check,
  Copy,
  CreditCard,
  Gauge,
  LayoutDashboard,
  Menu,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Wand2,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Switch } from './ui/switch';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

const navLinks = [
  { label: 'Docs', href: 'https://ui.shadcn.com/docs/installation' },
  { label: 'Components', href: 'https://ui.shadcn.com/docs/components' },
  { label: 'Blocks', href: 'https://ui.shadcn.com/blocks' },
  { label: 'Charts', href: 'https://ui.shadcn.com/examples/dashboard' },
  { label: 'Directory', href: 'https://ui.shadcn.com/docs/directory' },
  { label: 'Themes', href: 'https://ui.shadcn.com/themes' },
  { label: 'Colors', href: 'https://ui.shadcn.com/docs/colors' },
];

const exampleTabs = [
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'tasks', label: 'Tasks' },
  { value: 'playground', label: 'Playground' },
  { value: 'authentication', label: 'Authentication' },
];

const logos = [
  'Vercel',
  'Supabase',
  'Linear',
  'PlanetScale',
  'Raycast',
  'Aceternity',
];

const highlightCards = [
  {
    title: 'Accessible components',
    description:
      'Build with confidence using headless primitives wired for accessibility, keyboard navigation, and screen readers.',
    icon: ShieldCheck,
  },
  {
    title: 'Customizable by design',
    description:
      'Start with the New York theme, tweak tokens, and remix the layout. Everything lives in your codebase and ships with Tailwind.',
    icon: Palette,
  },
  {
    title: 'Works with your stack',
    description:
      'Use the CLI to scaffold components for any framework. Keep Ember on rails while pulling from the React ecosystem.',
    icon: LayoutDashboard,
  },
];

const workflowBullets = [
  {
    title: 'Copy and paste, then own it',
    description:
      'Generate the components you need and keep them local. Version them, refactor them, and shape them to your product.',
  },
  {
    title: 'Design tokens for every surface',
    description:
      'Fine tune typography, radii, and colors using Tailwind and CSS variables. Preview light and dark themes instantly.',
  },
  {
    title: 'Ship complex flows faster',
    description:
      'Drop in polished examples such as payments, analytics, auth, and dashboards. Connect real data without rebuilding UI.',
  },
];

const avatars = [
  {
    name: 'Cameron Nguyen',
    initials: 'CN',
    src: 'https://avatar.vercel.sh/cn',
  },
  { name: 'Lana Rivers', initials: 'LR', src: 'https://avatar.vercel.sh/lr' },
  { name: 'Elliot Reyes', initials: 'ER', src: 'https://avatar.vercel.sh/er' },
];

function AnnouncementBar() {
  return (
    <div className="border-b border-border/60 bg-background/70">
      <div className="container flex flex-wrap items-center justify-center gap-3 py-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          New
        </span>
        <span className="text-center text-sm text-muted-foreground">
          New Components: Field, Input Group, Item and more
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="group h-8 gap-1 px-3 text-sm text-foreground"
          asChild
        >
          <a href="https://ui.shadcn.com/docs/changelog">
            Explore updates
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>
      </div>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            shadcn/ui
          </span>
        </div>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="sm"
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground md:flex">
            <Star className="h-3.5 w-3.5 text-amber-400" />
            <span>98.6k</span>
          </div>
          <Button
            variant="outline"
            className="hidden items-center gap-2 rounded-lg border-border/60 bg-muted/40 px-3 text-sm text-muted-foreground hover:text-foreground md:flex"
          >
            <Search className="h-4 w-4" />
            <span className="hidden lg:inline">Search documentation...</span>
            <span className="lg:hidden">Search...</span>
            <span className="flex items-center gap-1 text-[10px] text-muted-foreground/80">
              <span className="rounded-md border border-border/70 bg-background/60 px-1 py-0.5 font-semibold">
                ⌘
              </span>
              <span className="rounded-md border border-border/70 bg-background/60 px-1 py-0.5 font-semibold">
                K
              </span>
            </span>
          </Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden text-muted-foreground hover:text-foreground md:inline-flex"
              >
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle layout</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden text-muted-foreground hover:text-foreground md:inline-flex"
              >
                <Sun className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle theme</TooltipContent>
          </Tooltip>
          <Button size="sm" className="gap-1.5">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_rgba(15,15,17,0.2)_45%,transparent_70%)]"
        aria-hidden
      />
      <div className="container relative grid gap-12 py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-24">
        <div className="flex flex-col gap-10">
          <div className="space-y-6">
            <Badge
              variant="secondary"
              className="w-max bg-secondary/30 text-xs uppercase tracking-[0.4em] text-muted-foreground"
            >
              Foundation
            </Badge>
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                The Foundation for your Design System
              </h1>
              <p className="max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
                A set of beautifully designed components that you can customize,
                extend, and build on. Start here then make it your own. Open
                Source. Open Code.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                View Components
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Accessible. Customizable. Open Source.</span>
            </div>
            <Separator orientation="vertical" className="hidden h-5 md:block" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>MIT Licensed</span>
            </div>
          </div>
        </div>
        <HeroPreview />
      </div>
    </section>
  );
}

function HeroPreview() {
  const [activeExample, setActiveExample] = useState(exampleTabs[0].value);
  const [theme, setTheme] = useState('dark');

  const themeLabel = useMemo(
    () => (theme === 'dark' ? 'Dark' : 'Light'),
    [theme],
  );
  const activeLabel = useMemo(() => {
    return (
      exampleTabs.find((tab) => tab.value === activeExample)?.label ??
      exampleTabs[0].label
    );
  }, [activeExample]);

  return (
    <Card className="relative overflow-hidden border-border/70 bg-card/80 shadow-xl shadow-primary/10 backdrop-blur">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),transparent_60%)]"
        aria-hidden
      />
      <CardContent className="relative z-10 space-y-6 p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge
              variant="secondary"
              className="bg-secondary/30 text-secondary-foreground"
            >
              Examples
            </Badge>
            <div className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
              <span>Theme:</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 rounded-full px-3 text-xs font-medium text-foreground"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {themeLabel}
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Copy className="h-3.5 w-3.5" />
              Copy Code
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
            >
              <Wand2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div className="rounded-xl border border-border/60 bg-muted/20 p-2">
            <Tabs
              value={activeExample}
              onValueChange={setActiveExample}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-1 gap-2 bg-transparent">
                {exampleTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="justify-start rounded-lg px-4 py-2 text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          <div className="space-y-4">
            <PaymentExample exampleLabel={activeLabel} />
            <SecondaryExamples />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PaymentExample({ exampleLabel }) {
  return (
    <Card className="border-border/60 bg-background/90 shadow-lg">
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span>Example</span>
          <Separator orientation="vertical" className="h-4" />
          <span>{exampleLabel}</span>
        </div>
        <CardTitle className="text-lg">Payment Method</CardTitle>
        <CardDescription>
          All transactions are secure and encrypted
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="card-name">Name on Card</Label>
          <Input id="card-name" placeholder="Ada Lovelace" />
        </div>
        <div className="grid gap-3 lg:grid-cols-[1.5fr_minmax(0,1fr)]">
          <div className="grid gap-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input id="card-number" placeholder="•••• •••• •••• ••••" />
            <p className="text-xs text-muted-foreground">
              Enter your 16-digit number.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="card-month">Month</Label>
              <Input id="card-month" placeholder="MM" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="card-year">Year</Label>
              <Input id="card-year" placeholder="YYYY" />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="card-cvv">CVV</Label>
              <Input id="card-cvv" placeholder="123" />
            </div>
          </div>
        </div>
        <Separator className="border-dashed border-border/60" />
        <div className="grid gap-3">
          <div className="space-y-2">
            <Label htmlFor="billing-address">Billing Address</Label>
            <Input id="billing-address" placeholder="1234 Innovation Way" />
            <p className="text-xs text-muted-foreground">
              The billing address associated with your payment method
            </p>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/20 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-foreground">
                Same as shipping address
              </p>
              <p className="text-xs text-muted-foreground">
                Keep shipping and billing in sync
              </p>
            </div>
            <Switch defaultChecked aria-label="Enable same address" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="comments">Comments</Label>
            <Textarea id="comments" placeholder="Add delivery notes" rows={3} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm" className="gap-1">
          <CreditCard className="h-3.5 w-3.5" />
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}

function SecondaryExamples() {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <Card className="border-border/60 bg-background/80">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Team Members</CardTitle>
          <CardDescription>
            Invite your team to collaborate on this project.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            {avatars.map((person) => (
              <Avatar
                key={person.name}
                className="h-10 w-10 border border-border/60"
              >
                <AvatarImage src={person.src} alt={person.name} />
                <AvatarFallback>{person.initials}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <Button size="sm" variant="outline" className="w-max gap-1">
            Invite Members
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </CardContent>
      </Card>
      <Card className="border-border/60 bg-background/80">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">System Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <StatusPill label="Syncing" />
          <StatusPill label="Updating" />
          <StatusPill label="Loading" />
        </CardContent>
      </Card>
      <Card className="border-border/60 bg-background/80">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Usage</CardTitle>
          <CardDescription>
            Set your budget range ($200 - $800).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Auto</span>
              <span>52% used</span>
            </div>
            <div className="relative mt-2 h-2 w-full overflow-hidden rounded-full bg-muted/30">
              <div className="absolute inset-y-0 left-0 w-[52%] rounded-full bg-primary" />
            </div>
          </div>
          <Button size="sm" variant="outline" className="w-max gap-1">
            <Gauge className="h-3.5 w-3.5" />
            View analytics
          </Button>
        </CardContent>
      </Card>
      <Card className="border-border/60 bg-background/80">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Security</CardTitle>
          <CardDescription>Verify via email or phone number.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <div className="rounded-lg border border-border/60 bg-muted/20 p-4">
            <div className="flex items-center justify-between">
              <span>Two-factor authentication</span>
              <Switch defaultChecked aria-label="Enable 2FA" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Your profile has been verified.
            </p>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="prompt"
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              Prompt
            </Label>
            <Textarea id="prompt" placeholder="Add context" rows={2} />
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Copilot ready
            </div>
          </div>
          <Button size="sm" className="w-max gap-1">
            <ShieldCheck className="h-3.5 w-3.5" />
            Enable
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function StatusPill({ label }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/20 px-4 py-2">
      <span>{label}</span>
      <Check className="h-4 w-4 text-primary" />
    </div>
  );
}

function LogosStrip() {
  return (
    <section className="border-b border-border/60 bg-muted/10">
      <div className="container flex flex-wrap items-center justify-center gap-10 py-10 text-sm font-medium uppercase tracking-[0.4em] text-muted-foreground">
        {logos.map((logo) => (
          <span key={logo} className="opacity-70">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}

function HighlightSection() {
  return (
    <section className="container space-y-12 py-24" id="features">
      <div className="mx-auto max-w-3xl text-center space-y-4">
        <Badge
          variant="outline"
          className="mx-auto w-max bg-background/60 text-xs uppercase tracking-[0.4em] text-muted-foreground"
        >
          What&apos;s included
        </Badge>
        <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
          Beautifully designed, accessible components ready for production
        </h2>
        <p className="text-lg text-muted-foreground">
          Every component lives in your project. Customize, extend, and ship
          with the tooling you already use.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {highlightCards.map(({ title, description, icon: Icon }) => (
          <Card key={title} className="h-full border-border/60 bg-card/80">
            <CardHeader className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl text-foreground">{title}</CardTitle>
              <CardDescription className="text-base leading-relaxed text-muted-foreground">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section
      className="border-y border-border/60 bg-background/70"
      id="workflow"
    >
      <div className="container grid gap-10 py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-5">
          <Badge
            variant="secondary"
            className="w-max bg-secondary/30 text-secondary-foreground"
          >
            Build with intent
          </Badge>
          <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
            Copy. Paste. Tweak. Ship.
          </h2>
          <p className="text-lg text-muted-foreground">
            Start with sensible defaults that match the shadcn/ui design
            language. Refine interactions in Ember while leaning on React
            components from the ecosystem.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              Production ready flows
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Accessibility first
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {workflowBullets.map(({ title, description }) => (
            <Card key={title} className="border-border/60 bg-card/80">
              <CardHeader className="space-y-3">
                <CardTitle className="text-lg text-foreground">
                  {title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalloutSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_rgba(59,130,246,0)_70%)]"
        aria-hidden
      />
      <div className="container relative">
        <Card className="mx-auto max-w-4xl border-border/60 bg-card/80 text-center shadow-xl">
          <CardHeader className="space-y-4">
            <Badge
              variant="secondary"
              className="mx-auto w-max bg-secondary/30 text-secondary-foreground"
            >
              Open Source
            </Badge>
            <CardTitle className="text-3xl font-semibold text-foreground sm:text-4xl">
              Start here then make it your own
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Generate components with the CLI, render them inside Ember with
              @universal-ember/react, and publish confidently.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col items-center justify-center gap-3 pb-10">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" className="gap-2">
                Install via CLI
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                Browse Examples
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Works with Ember, React, Next.js, Astro, and more
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background py-10 text-sm text-muted-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <span>
          Built by{' '}
          <a
            className="text-foreground hover:underline"
            href="https://shadcn.com"
          >
            shadcn
          </a>{' '}
          at{' '}
          <a
            className="text-foreground hover:underline"
            href="https://vercel.com"
          >
            Vercel
          </a>
          . The source code is available on{' '}
          <a
            className="text-foreground hover:underline"
            href="https://github.com/shadcn-ui/ui"
          >
            GitHub
          </a>
          .
        </span>
        <div className="flex items-center gap-3">
          <a
            className="hover:text-foreground"
            href="https://ui.shadcn.com/docs/installation"
          >
            Docs
          </a>
          <a
            className="hover:text-foreground"
            href="https://github.com/universal-ember/react"
          >
            universal-ember/react
          </a>
        </div>
      </div>
    </footer>
  );
}

export function ShadcnHome() {
  return (
    <TooltipProvider delayDuration={150}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <AnnouncementBar />
        <SiteHeader />
        <main className="flex-1">
          <HeroSection />
          <LogosStrip />
          <HighlightSection />
          <WorkflowSection />
          <CalloutSection />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}
