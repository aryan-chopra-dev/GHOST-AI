"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"
import { 
  Palette, 
  Terminal, 
  Info, 
  Layers, 
  Sliders, 
  FileText, 
  Code,
  Layout,
  Settings,
  CheckCircle2,
  AlertCircle
} from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("buttons")
  const [demoInput, setDemoInput] = useState<string>("")
  const [demoTextarea, setDemoTextarea] = useState<string>("")
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  // Color Token Mapping for display
  const colorTokens = [
    { name: "Page background", cssVar: "--bg-base", tailwindClass: "bg-base", description: "Base canvas background color", hex: "#09090b" },
    { name: "Surface background", cssVar: "--bg-surface", tailwindClass: "bg-surface", description: "Card and component surfaces background", hex: "#18181b" },
    { name: "Primary text", cssVar: "--text-primary", tailwindClass: "text-copy-primary", description: "Body text and high contrast text", hex: "#fafafa" },
    { name: "Muted text", cssVar: "--text-muted", tailwindClass: "text-copy-muted", description: "Labels, placeholders, and descriptions", hex: "#a1a1aa" },
    { name: "Primary accent", cssVar: "--accent-primary", tailwindClass: "text-brand / bg-brand", description: "Interactive components and states", hex: "#6366f1" },
    { name: "Border default", cssVar: "--border-default", tailwindClass: "border-surface-border", description: "Separators and borders", hex: "#27272a" },
    { name: "Error state", cssVar: "--state-error", tailwindClass: "text-state-error", description: "Destructive actions and inputs errors", hex: "#ef4444" },
    { name: "Success state", cssVar: "--state-success", tailwindClass: "text-state-success", description: "Successful completion states", hex: "#22c55e" },
  ]

  return (
    <div className="min-h-screen bg-base text-copy-primary font-sans flex flex-col selection:bg-brand/30 selection:text-brand-foreground">
      {/* Top Navigation */}
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      {/* Project Sidebar */}
      <ProjectSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNewProject={() => alert("New project configuration triggered.")}
      />

      {/* Backdrop overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Workspace Dashboard */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: System Specifications and Design Tokens */}
        <section className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold tracking-tight flex items-center gap-2">
              <Palette className="size-5 text-brand" />
              Design System Tokens
            </h2>
            <p className="text-sm text-copy-muted">
              These tokens are declared as CSS custom properties in <code className="bg-surface px-1.5 py-0.5 rounded border border-surface-border text-xs">globals.css</code> and mapped to custom Tailwind CSS utilities.
            </p>
          </div>

          {/* Variable Map Card */}
          <Card className="border border-surface-border bg-surface/30">
            <CardHeader className="border-b border-surface-border bg-surface/10 pb-4">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <Code className="size-4 text-brand" />
                Tailwind CSS Utility Mapping
              </CardTitle>
              <CardDescription className="text-xs">
                Tokens strictly align with our workspace code standards.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4 flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                {colorTokens.map((token, i) => (
                  <div key={i} className="flex flex-col gap-1.5 pb-3 border-b border-surface-border/50 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-copy-primary">{token.name}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] bg-base px-2 py-0.5 rounded-full border border-surface-border font-mono text-copy-muted">{token.cssVar}</span>
                        <span className="text-[10px] bg-brand/10 text-brand px-2 py-0.5 rounded-full border border-brand/20 font-mono font-medium">{token.tailwindClass}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-copy-muted">
                      <span>{token.description}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full border border-surface-border bg-[var(--bg-base)]" style={{ backgroundColor: `var(${token.cssVar})` }}></span>
                        <span className="font-mono text-[10px] uppercase text-copy-muted">{token.hex}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Border Radius Specification Card */}
          <Card className="border border-surface-border bg-surface/30">
            <CardHeader className="border-b border-surface-border bg-surface/10 pb-4">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <Layout className="size-4 text-brand" />
                Border Radius Scale
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 flex flex-col gap-3 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-surface-border/50">
                <span className="text-copy-primary font-medium">Inline / Small UI</span>
                <span className="font-mono bg-base px-2 py-0.5 border border-surface-border rounded text-copy-muted">rounded-xl (0.75rem)</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-surface-border/50">
                <span className="text-copy-primary font-medium">Cards / Panels</span>
                <span className="font-mono bg-base px-2 py-0.5 border border-surface-border rounded text-copy-muted">rounded-2xl (1.00rem)</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-copy-primary font-medium">Modals / Overlays</span>
                <span className="font-mono bg-base px-2 py-0.5 border border-surface-border rounded text-copy-muted">rounded-3xl (1.50rem)</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Right Side: Component Interactive Showcase */}
        <section className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold tracking-tight flex items-center gap-2">
              <Sliders className="size-5 text-brand" />
              Interactive Component Playground
            </h2>
            <p className="text-sm text-copy-muted">
              Explore the installed Shadcn UI foundation components. All elements adapt automatically to the design tokens.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-surface/50 border border-surface-border p-1 rounded-xl">
              <TabsTrigger value="buttons" className="rounded-lg text-xs py-2 data-[state=active]:bg-brand data-[state=active]:text-white">
                Buttons & Inputs
              </TabsTrigger>
              <TabsTrigger value="containers" className="rounded-lg text-xs py-2 data-[state=active]:bg-brand data-[state=active]:text-white">
                Card & ScrollArea
              </TabsTrigger>
              <TabsTrigger value="overlays" className="rounded-lg text-xs py-2 data-[state=active]:bg-brand data-[state=active]:text-white">
                Dialogs & Overlays
              </TabsTrigger>
            </TabsList>

            {/* TAB 1: BUTTONS & INPUTS */}
            <TabsContent value="buttons" className="mt-6 flex flex-col gap-6">
              
              {/* Buttons Showcase Card */}
              <Card className="border border-surface-border bg-surface/30">
                <CardHeader>
                  <CardTitle className="text-sm font-semibold">Button Variants</CardTitle>
                  <CardDescription className="text-xs">
                    Button component with various design configurations and states.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  <Button variant="default">Default Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="destructive">Destructive Button</Button>
                  <Button variant="link">Link Style</Button>
                </CardContent>
                <CardFooter className="flex-col items-start gap-3 bg-surface/20">
                  <div className="text-xs font-semibold text-copy-muted">Button Sizes:</div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="outline" size="xs">Extra Small (xs)</Button>
                    <Button variant="outline" size="sm">Small (sm)</Button>
                    <Button variant="outline" size="default">Default size</Button>
                    <Button variant="outline" size="lg">Large (lg)</Button>
                    <Button variant="default" size="icon-sm" aria-label="Settings">
                      <Settings className="size-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Form Input Showcase Card */}
              <Card className="border border-surface-border bg-surface/30">
                <CardHeader>
                  <CardTitle className="text-sm font-semibold font-heading">Inputs and Forms</CardTitle>
                  <CardDescription className="text-xs">
                    Input fields and textareas using standard UI tokens.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-copy-muted">Interactive Input Field</label>
                      <Input
                        type="text"
                        placeholder="Type something here..."
                        value={demoInput}
                        onChange={(e) => setDemoInput(e.target.value)}
                        className="bg-base border-surface-border text-copy-primary focus:border-brand focus:ring-1 focus:ring-brand/30"
                      />
                      {demoInput && (
                        <p className="text-[10px] text-brand italic">
                          Live value: &quot;{demoInput}&quot;
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-copy-muted">Disabled Input Field</label>
                      <Input
                        type="text"
                        placeholder="Disabled placeholder..."
                        disabled
                        className="bg-base border-surface-border/50 opacity-60 text-copy-muted"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-copy-muted">Detailed Textarea Description</label>
                    <Textarea
                      placeholder="Describe the architecture prompt here..."
                      rows={3}
                      value={demoTextarea}
                      onChange={(e) => setDemoTextarea(e.target.value)}
                      className="bg-base border-surface-border text-copy-primary focus:border-brand focus:ring-1 focus:ring-brand/30"
                    />
                    <p className="text-[10px] text-copy-muted flex items-center gap-1">
                      <Info className="size-3 text-brand" />
                      Provide a prompt to let AI build system nodes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB 2: CONTAINER & SCROLLAREA */}
            <TabsContent value="containers" className="mt-6 flex flex-col gap-6">
              
              {/* Complex Card Composition */}
              <Card className="border border-surface-border bg-surface/30">
                <CardHeader className="border-b border-surface-border bg-surface/10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-semibold flex items-center gap-2">
                      <Terminal className="size-4 text-brand" />
                      Client Component Integration
                    </CardTitle>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                      Production Ready
                    </span>
                  </div>
                  <CardDescription className="text-xs">
                    This component respects the border-radius specification scale.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 flex flex-col gap-3">
                  <p className="text-sm text-copy-muted">
                    We maintain uniform design constraints for containers. Cards and panels use the <code className="bg-base font-mono px-1 rounded text-brand">rounded-2xl</code> border radius utility, creating layered, clean surface divisions in the dark technical workspace layout.
                  </p>
                  
                  <div className="p-3 bg-base border border-surface-border rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="text-copy-primary font-semibold block">Design Rule Invariant</span>
                      <span className="text-copy-muted">Project-specific styling layout changes must be implemented in app-level components instead of modifying foundation components directly.</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-surface/20 flex items-center justify-between">
                  <span className="text-xs text-copy-muted">Last built session: 2026-07-12</span>
                  <Button variant="outline" size="sm">Explore Docs</Button>
                </CardFooter>
              </Card>

              {/* ScrollArea Specification List */}
              <Card className="border border-surface-border bg-surface/30">
                <CardHeader>
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <FileText className="size-4 text-brand" />
                    Design System Component List (ScrollArea)
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Uses the ScrollArea component to wrap lists of arbitrary length.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[180px] w-full rounded-xl border border-surface-border bg-base p-4">
                    <div className="flex flex-col gap-2.5">
                      <h4 className="text-xs font-semibold text-brand tracking-wider uppercase">Implemented Components</h4>
                      <div className="grid gap-2 text-xs">
                        <div className="p-2 bg-surface/30 rounded border border-surface-border/50 flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-500" />
                          <span><strong>Button</strong> - Standard buttons with primary, outline, secondary variants.</span>
                        </div>
                        <div className="p-2 bg-surface/30 rounded border border-surface-border/50 flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-500" />
                          <span><strong>Card</strong> - Nested surface component for logical dashboard sections.</span>
                        </div>
                        <div className="p-2 bg-surface/30 rounded border border-surface-border/50 flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-500" />
                          <span><strong>Input</strong> - Single-line form item. Supports interactive focus states.</span>
                        </div>
                        <div className="p-2 bg-surface/30 rounded border border-surface-border/50 flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-500" />
                          <span><strong>Textarea</strong> - Text block inputs. Ideal for describing complex schemas.</span>
                        </div>
                        <div className="p-2 bg-surface/30 rounded border border-surface-border/50 flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-500" />
                          <span><strong>Tabs</strong> - Handles layout sections toggles in place.</span>
                        </div>
                        <div className="p-2 bg-surface/30 rounded border border-surface-border/50 flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-500" />
                          <span><strong>ScrollArea</strong> - Graceful scrolls container preventing layout blow-ups.</span>
                        </div>
                        <div className="p-2 bg-surface/30 rounded border border-surface-border/50 flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-emerald-500" />
                          <span><strong>Dialog</strong> - Overlays modals containing high priority metadata forms.</span>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB 3: OVERLAYS */}
            <TabsContent value="overlays" className="mt-6">
              
              {/* Dialog Showcase Card */}
              <Card className="border border-surface-border bg-surface/30">
                <CardHeader>
                  <CardTitle className="text-sm font-semibold">Modal Dialog Overlay</CardTitle>
                  <CardDescription className="text-xs">
                    Test the dialog trigger modal backdrop overlay configuration.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-10 gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                    <Layers className="size-6 animate-pulse" />
                  </div>
                  <div className="text-center max-w-sm flex flex-col gap-1">
                    <span className="text-sm font-medium text-copy-primary">System Dialog Controller</span>
                    <span className="text-xs text-copy-muted">Press the button below to launch a modal showing system metadata specs. Verify background click-away and close handlers.</span>
                  </div>
                  
                  <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger render={<Button variant="default">Launch Specification Modal</Button>} />
                    <DialogContent className="bg-surface border border-surface-border text-copy-primary sm:max-w-md rounded-3xl">
                      <DialogHeader>
                        <DialogTitle className="text-base font-semibold flex items-center gap-2 font-heading">
                          <Settings className="size-4 text-brand" />
                          Workspace Specifications
                        </DialogTitle>
                        <DialogDescription className="text-xs text-copy-muted">
                          Technical metadata configuration and layout boundaries.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="my-4 flex flex-col gap-3 text-xs bg-base p-4 rounded-xl border border-surface-border">
                        <div className="flex items-center justify-between pb-2 border-b border-surface-border/50">
                          <span className="text-copy-muted font-medium">Framework Layer</span>
                          <span className="text-copy-primary font-mono font-medium">Next.js 16 + React 19</span>
                        </div>
                        <div className="flex items-center justify-between pb-2 border-b border-surface-border/50">
                          <span className="text-copy-muted font-medium">Styling Model</span>
                          <span className="text-copy-primary font-mono font-medium">Tailwind CSS v4</span>
                        </div>
                        <div className="flex items-center justify-between pb-2 border-b border-surface-border/50">
                          <span className="text-copy-muted font-medium">Database Layer</span>
                          <span className="text-copy-primary font-mono font-medium">Prisma + PostgreSQL</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-copy-muted font-medium">Real-time room</span>
                          <span className="text-copy-primary font-mono font-medium">Liveblocks + React Flow</span>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => setDialogOpen(false)}>Close Spec</Button>
                        <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => setDialogOpen(false)}>
                          Confirm Settings
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

      </main>

      {/* Footer bar */}
      <footer className="mt-auto border-t border-surface-border bg-surface/30 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-copy-muted">
        <div className="flex items-center gap-2">
          <AlertCircle className="size-4 text-brand" />
          <span>Strict dark-theme design enforcement. Verified against Next.js 16 & React 19 specifications.</span>
        </div>
        <div>
          <span>© 2026 Ghost AI Workspace. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
