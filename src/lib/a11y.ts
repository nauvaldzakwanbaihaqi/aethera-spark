import React from "react";
import ReactDOM from "react-dom";

export async function setupAxe() {
  if (import.meta.env.DEV) {
    const axe = await import("@axe-core/react");
    axe.default(React, ReactDOM, 1000);
  }
}
