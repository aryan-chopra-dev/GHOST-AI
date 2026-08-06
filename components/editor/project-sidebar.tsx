"use client"

import React from "react"
import { X, Plus, FolderKanban, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
  onNewProject?: () => void
}

export function ProjectSidebar({ isOpen, onClose, onNewProject }: ProjectSidebarProps) {
  return (
    <aside
      id="project-sidebar"
      aria-hidden={!isOpen}
      inert={!isOpen ? true : undefined}
      className={`fixed top-14 left-0 bottom-0 w-80 bg-surface border-r border-surface-border z-30 transition-transform duration-300 ease-in-out flex flex-col justify-between select-none ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-surface-border">
        <h3 className="font-heading font-semibold text-sm text-copy-primary">Projects</h3>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          className="text-copy-muted hover:text-copy-primary hover:bg-surface-border/50 transition-colors"
          aria-label="Close project panel"
        >
          <X className="size-4" />
        </Button>
      </div>

      {/* Tabs Container */}
      <Tabs defaultValue="my-projects" className="flex-1 flex flex-col min-h-0">
        <div className="px-4 pt-4 pb-2">
          <TabsList className="grid w-full grid-cols-2 bg-base border border-surface-border p-1 rounded-xl">
            <TabsTrigger
              value="my-projects"
              className="rounded-lg text-xs py-1.5 data-[state=active]:bg-brand/10 data-[state=active]:text-brand dark:data-[state=active]:bg-brand/10 dark:data-[state=active]:text-brand dark:data-[state=active]:border-brand/20 border border-transparent transition-all"
            >
              My Projects
            </TabsTrigger>
            <TabsTrigger
              value="shared"
              className="rounded-lg text-xs py-1.5 data-[state=active]:bg-brand/10 data-[state=active]:text-brand dark:data-[state=active]:bg-brand/10 dark:data-[state=active]:text-brand dark:data-[state=active]:border-brand/20 border border-transparent transition-all"
            >
              Shared
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab Content: My Projects Empty State */}
        <TabsContent value="my-projects" className="flex-1 flex flex-col items-center justify-center text-center p-6 min-h-0">
          <div className="flex flex-col items-center justify-center">
            <div className="p-3.5 bg-brand/5 border border-brand/10 rounded-full mb-3 text-brand/70 shadow-sm animate-pulse-subtle">
              <FolderKanban className="size-6 text-brand" />
            </div>
            <h4 className="font-medium text-xs text-copy-primary mb-1">No Projects Found</h4>
            <p className="text-[11px] text-copy-muted max-w-[200px] leading-relaxed">
              Create a new design canvas to get started with your architecture.
            </p>
          </div>
        </TabsContent>

        {/* Tab Content: Shared Empty State */}
        <TabsContent value="shared" className="flex-1 flex flex-col items-center justify-center text-center p-6 min-h-0">
          <div className="flex flex-col items-center justify-center">
            <div className="p-3.5 bg-emerald-500/5 border border-emerald-500/10 rounded-full mb-3 text-emerald-500/70 shadow-sm">
              <Share2 className="size-6 text-emerald-500" />
            </div>
            <h4 className="font-medium text-xs text-copy-primary mb-1">Shared with Me</h4>
            <p className="text-[11px] text-copy-muted max-w-[200px] leading-relaxed">
              Projects shared with you by other collaborators will show up here.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Sidebar Footer: New Project Button */}
      {onNewProject && (
+      <div className="p-4 border-t border-surface-border bg-surface/50">
        <Button
          onClick={onNewProject}
          className="w-full gap-2 rounded-xl bg-brand hover:bg-brand/90 text-white font-medium text-xs py-2 h-9 transition-colors cursor-pointer"
        >
          <Plus className="size-4" />
          New Project
        </Button>
      </div>)}
    </aside>
  )
}
