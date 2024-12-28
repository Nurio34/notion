"use client";

import { createGettingStartedDocument } from "@/actions/createGettingStartedDocument";
import { useEffect } from "react";

function GettingStarted() {
  useEffect(() => {
    console.log("createGettingStartedDocumentAction");

    const createGettingStartedDocumentAction = async () =>
      await createGettingStartedDocument();

    createGettingStartedDocumentAction();
  }, []);

  return <li>Getting Started</li>;
}
export default GettingStarted;
