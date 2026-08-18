import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Download, Settings, Play, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { promptSchema, PromptInput } from "@/features/studio/schemas/studio.schema";
import { generateUI, GenerationStatus } from "@/lib/mock-api/studio";
import { exportProject } from "@/features/studio/api/export";
import { useState } from "react";
import { toast } from "sonner";

export default function StudioPage() {
  const [status, setStatus] = useState<GenerationStatus>({ state: "idle", message: "Waiting for input..." });
  const [hasGenerated, setHasGenerated] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<PromptInput>({
    resolver: zodResolver(promptSchema),
  });

  const onSubmit = async (data: PromptInput) => {
    setHasGenerated(false);
    
    try {
      await generateUI(data, (newStatus) => {
        setStatus(newStatus);
      });
      setHasGenerated(true);
      toast.success("UI Generated successfully!");
    } catch (error) {
      toast.error("Generation failed");
      setStatus({ state: "idle", message: "Failed." });
    }
  };

  const handleExport = async () => {
    try {
      setIsExporting(true);
      await exportProject();
      toast.success("Project exported!");
    } catch (error) {
      toast.error("Failed to export project");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-background">
      <SEO title="Neural Workspace" description="Generate AI UI designs" />
      {/* Header */}
      <header className="flex items-center justify-between border-b border-border bg-card px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="rounded bg-primary/20 p-1.5">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-lg font-semibold">Neural Workspace</h1>
            <p className="text-xs text-muted-foreground">Draft-42 - {hasGenerated ? "Generated" : "Unsaved"}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Brand DNA
          </Button>
          <Button size="sm" onClick={handleExport} disabled={!hasGenerated || isExporting}>
            {isExporting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
            Export Code
          </Button>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex flex-1 overflow-hidden">
        {/* Left Panel: Prompt Editor */}
        <aside className="w-[400px] border-r border-border bg-card/50 flex flex-col">
          <div className="p-4 border-b border-border flex-1">
            <h2 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">Prompt Interface</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Textarea 
                placeholder="Describe the interface you want to build... e.g. 'A dark-themed luxury dashboard with a sidebar and analytics charts.'"
                className="min-h-[200px] resize-none bg-background border-border focus-visible:ring-1"
                {...register("prompt")}
                disabled={isSubmitting}
              />
              {errors.prompt && <p className="mt-2 text-sm text-destructive">{errors.prompt.message}</p>}
              <Button className="w-full mt-4" size="lg" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Play className="mr-2 h-4 w-4" />
                )}
                {isSubmitting ? "Generating..." : "Generate UI"}
              </Button>
            </form>
          </div>
          
          <div className="p-4 bg-muted/20">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Generation Log</h3>
            <div className="space-y-2 text-xs font-mono text-muted-foreground">
              <p className={status.state !== "idle" ? "text-primary" : ""}>
                [sys] {status.message}
              </p>
            </div>
          </div>
        </aside>

        {/* Right Panel: Preview Area */}
        <section className="flex-1 bg-muted/10 p-8 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none"></div>
          
          <Card className="w-full h-full max-w-5xl flex items-center justify-center border-dashed border-2 bg-background/50 backdrop-blur-sm relative z-10 overflow-hidden">
            {hasGenerated ? (
              <div className="flex h-full w-full flex-col items-center justify-center">
                <Sparkles className="h-16 w-16 text-primary mb-6 animate-pulse" />
                <h2 className="font-display text-3xl font-bold mb-2">UI Successfully Generated</h2>
                <p className="text-muted-foreground max-w-md text-center">
                  Your prompt has been synthesized into production-ready React components. Use the Export button to download the code.
                </p>
                <div className="mt-8 border border-border p-4 rounded-lg bg-card w-full max-w-2xl">
                  {/* Mock Preview Content */}
                  <div className="flex items-center justify-between mb-4 border-b border-border pb-4">
                     <div className="h-8 w-24 bg-muted rounded"></div>
                     <div className="flex gap-2">
                       <div className="h-8 w-8 bg-muted rounded-full"></div>
                       <div className="h-8 w-8 bg-muted rounded-full"></div>
                     </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-32 bg-muted rounded-lg col-span-2"></div>
                    <div className="h-32 bg-muted rounded-lg"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                {isSubmitting ? (
                  <div className="flex flex-col items-center">
                    <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                    <p className="text-lg font-medium text-foreground">{status.message}</p>
                  </div>
                ) : (
                  <>
                    <Sparkles className="mx-auto h-12 w-12 text-muted-foreground/30 mb-4" />
                    <p className="text-muted-foreground">Live Preview Assembly will appear here</p>
                  </>
                )}
              </div>
            )}
          </Card>
        </section>
      </main>
    </div>
  );
}
