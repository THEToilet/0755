export type ImageListSizeResponse = {
  size: number;
};

export type ImagesListResponse = {
  statusText: string;
  status: number;
  data: ImageResponse[];
};

export type ImageResponse = {
  image_id: number;
  image_name: string;
  image_text: string;
  is_seen: string;
  posted_user_id: number;
  posted_at: string;
  created_at: string;
  star: number;
  tags: TagResponse[];
};

export type TagResponse = {
  ImageTagID: string;
  ImageID: number;
  TagID: string;
  TagName: string;
};
