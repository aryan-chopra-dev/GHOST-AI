"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { PanelLeftOpen, PanelLeftClose, Sparkles } from "lucide-react"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onToggleSidebar: () => void
}

export function EditorNavbar({ isSidebarOpen, onToggleSidebar }: EditorNavbarProps) {
  return (
    <header className="h-14 border-b border-surface-border bg-surface/50 backdrop-blur-md sticky top-0 z-40 px-4 flex items-center justify-between select-none">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onToggleSidebar}
          className="text-copy-muted hover:text-copy-primary hover:bg-surface-border/50 transition-colors"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          aria-controls="project-sidebar"
          aria-expanded={isSidebarOpen}
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="size-4" />
          ) : (
            <PanelLeftOpen className="size-4" />
          )}
        </Button>
        
        <div className="h-4 w-px bg-surface-border/50" />
        
        <div className="flex items-center gap-2">
          <div className="p-1 bg-brand/10 rounded-md border border-brand/20">
            <Sparkles className="size-3.5 text-brand" />
          </div>
          <span className="font-heading text-sm font-semibold tracking-tight text-copy-primary">
            Ghost AI
          </span>
        </div>
      </div>

      {/* Center Section */}
      <div className="hidden md:flex items-center gap-2">
        <span className="text-xs text-copy-muted font-medium bg-base/50 px-2.5 py-1 rounded-full border border-surface-border">
          System Design Workspace
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 w-10 md:w-auto">
        {/* Stays empty/minimal for now as requested */}
      </div>
    </header>
  )
}
