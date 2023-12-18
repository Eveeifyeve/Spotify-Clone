"use client";

import { useEffect, useState } from "react";

import Model from "@/components/Model";
import AuthModel from "../../components/AuthModel";
import UploadModel from "../../components/UploadModel";
import DeleteModel from "@/components/DeleteModel";

const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModel />
      <UploadModel />
      <DeleteModel />
    </>
  );
};

export default ModelProvider;
