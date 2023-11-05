"use client";

import ErrorPage from "@/components/commons/errorPage";

export function ErrorPage404() {
  return <ErrorPage statusCode="400" message="Page not found!" />;
}

export default ErrorPage404;
