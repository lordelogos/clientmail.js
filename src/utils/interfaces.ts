import * as React from "react";
import { RequireAtLeastOne } from "type-fest";

export interface ReactEmailAdapter {
  convertReactEmailToHtml(reactComponent: React.ReactNode): string;
}

export interface Plugins {
  reactEmailAdapter?: ReactEmailAdapter;
}

export interface IClientMail {
  resend: (data: ResendEmailOptions) => Promise<ResendEmailResponse>;
}

interface ResendEmailBaseOptions {
  attachments?: Attachment[];
  bcc?: string | string[];
  cc?: string | string[];
  from: string;
  headers?: Record<string, string>;
  react?: React.ReactElement | React.ReactNode | null;
  html?: string;
  text?: string;
  reply_to?: string | string[];
  subject: string;
  tags?: { name: string; value: string }[];
  to: string | string[];
}

export type ResendEmailOptions = RequireAtLeastOne<
  ResendEmailBaseOptions,
  "react" | "html" | "text"
>;

interface Attachment {
  content?: string | Buffer;
  filename?: string | false | undefined;
  path?: string;
}

export interface ResendEmailResponse {
  message: string;
  data: {
    id: string;
  };
}

interface PlunkEmailBaseOptions {
  name: string;
  type?: "html" | "markdown";
  from: string;
  to: string | string[];
  subject: string;
  body?: string;
  react?: React.ReactElement | React.ReactNode | null;
}

export type PlunkEmailOptions = RequireAtLeastOne<
  PlunkEmailBaseOptions,
  "react" | "body"
>;

export interface PlunkEmailResponse {
  success: boolean;
  emails: { contact: { id: string; email: string }; email: string }[];
  timestamp: string;
}
