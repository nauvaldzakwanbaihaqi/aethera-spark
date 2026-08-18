import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "@/pages/NotFound";

// Lazy-loaded pages
const LandingPage = lazy(() => import("@/pages/LandingPage"));
const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/auth/RegisterPage"));
const DashboardPage = lazy(() => import("@/pages/DashboardPage"));
const StudioPage = lazy(() => import("@/pages/studio/StudioPage"));
const PricingPage = lazy(() => import("@/pages/PricingPage"));

// Skeleton loader for Suspense fallback
const PageSkeleton = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="animate-pulse space-y-4">
      <div className="h-4 w-32 rounded bg-muted"></div>
      <div className="h-8 w-48 rounded bg-muted"></div>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <LandingPage />
      </Suspense>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <RegisterPage />
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <DashboardPage />
      </Suspense>
    ),
  },
  {
    path: "/studio",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <StudioPage />
      </Suspense>
    ),
  },
  {
    path: "/studio/:projectId",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <StudioPage />
      </Suspense>
    ),
  },
  {
    path: "/pricing",
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <PricingPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
