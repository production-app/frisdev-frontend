import * as React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";

import "@react-pdf-viewer/core/lib/styles/index.css";

import "./styles/Thumbnail.module.css";

import { pageThumbnailPlugin } from "./pageThumbnailPlugin";

interface DisplayThumbnailExampleProps {
  fileUrl: string;
  pageIndex: number;
}

const Thumbnail: React.FC<DisplayThumbnailExampleProps> = ({
  fileUrl,
  pageIndex,
}) => {
  const thumbnailPluginInstance = thumbnailPlugin();
  const { Cover } = thumbnailPluginInstance;
  const pageThumbnailPluginInstance = pageThumbnailPlugin({
    PageThumbnail: (
      <div>
        <Cover width={200} getPageIndex={() => pageIndex} />
      </div>
    ),
  });

  return (
    <Viewer
      fileUrl={fileUrl}
      plugins={[pageThumbnailPluginInstance, thumbnailPluginInstance]}
    />
  );
};

export default Thumbnail;
