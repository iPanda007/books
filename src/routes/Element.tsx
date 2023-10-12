import { lazy, ElementType, Suspense, SuspenseProps } from "react";
import Loading from "../components/loading";

// loading screen

const Loadable = (Component: ElementType) => (props: SuspenseProps) =>
  (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <Loading />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );

export const BookList = Loadable(lazy(() => import("../pages/d-book-page")));
