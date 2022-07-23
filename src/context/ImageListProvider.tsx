import React, { createContext, useState, useContext, ReactNode } from "react";
import { ImageResponse } from "../type/API";

const ImageListContext = createContext<ContextInterface | undefined>(undefined);

export function useImageListContext() {
  const context = useContext(ImageListContext);
  if (context === undefined) {
    throw new Error("");
  }
  return context;
}

type ContextInterface = {
  imageListContext: ImageResponse[];
  setImageListContext: React.Dispatch<React.SetStateAction<ImageResponse[]>>;
};

type Props = {
  children: ReactNode;
};

export function ImageListProvider(props: Props) {
  const [imageListContext, setImageListContext] = useState<ImageResponse[]>([]);

  const value = {
    imageListContext,
    setImageListContext,
  };

  return (
    <ImageListContext.Provider value={value}>
      {props.children}
    </ImageListContext.Provider>
  );
}
