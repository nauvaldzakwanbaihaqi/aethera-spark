import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutGrid, Plus } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Dashboard" description="Manage your neural UI projects" />
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutGrid className="h-5 w-5 text-primary" />
            <h1 className="font-display text-xl font-bold">Dashboard</h1>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-semibold">Your Projects</h2>
          <p className="mt-2 text-muted-foreground">Manage your generated interfaces and workspaces.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Mock Project Cards */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-card h-full">
            <CardHeader>
              <CardTitle>Alpha SaaS</CardTitle>
              <CardDescription>Created 2 days ago</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full rounded-md bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Preview Image</span>
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" className="w-full">Edit</Button>
                <Button className="w-full">Deploy</Button>
              </div>
            </CardContent>
          </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
          <Card className="flex h-full flex-col items-center justify-center border-dashed bg-transparent p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer">
            <div className="rounded-full bg-primary/10 p-3 mb-4">
              <Plus className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium">Create New Project</h3>
            <p className="text-sm text-muted-foreground mt-1">Start a new neural design</p>
          </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
