import { API_BASE_URL, USER_AGENT } from "./utils/constants";
import {
  IClientMail,
  Plugins,
  ResendEmailOptions,
  ResendEmailResponse,
} from "./utils/interfaces";

export class ClientMail implements IClientMail {
  private plugins: Plugins;
  private readonly baseURL: string;
  private readonly headers: HeadersInit;

  constructor(readonly key: string, plugins: Plugins = {}) {
    this.key = key;

    if (!this.key) {
      throw new Error(
        'Missing API key. Pass it to the constructor `new ClientMail("rc_12...")`'
      );
    }

    this.plugins = plugins;
    this.baseURL = API_BASE_URL;
    this.headers = {
      Authorization: `Bearer ${this.key}`,
      "User-Agent": USER_AGENT,
      "Content-Type": "application/json",
    };
  }

  async resend(data: ResendEmailOptions) {
    try {
      const path = `${this.baseURL}/resend`;

      if (data.react) {
        if (this.plugins.reactEmailAdapter) {
          data.html = this.plugins.reactEmailAdapter.convertReactEmailToHtml(
            data.react
          );
          delete data.react;
        } else {
          throw new Error(
            "No React-email adapter provided, install '@client-mail/react-email' to use react-email templates"
          );
        }
      }

      const requestBody = {
        from: data.from,
        to: data.to,
        bcc: data.bcc,
        cc: data.cc,
        reply_to: data.reply_to,
        subject: data.subject,
        text: data.text,
        html: data.html,
        attachments: data.attachments,
        tags: data.tags,
      };

      const requestOptions = {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(requestBody),
      };

      const response = await fetch(path, requestOptions);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData: ResendEmailResponse = await response.json();
      return responseData;
    } catch (err) {
      throw err;
    }
  }
}

if (typeof window !== "undefined") {
  (window as any).ClientMail = ClientMail;
}
