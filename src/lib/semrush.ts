/**
 * OUTKAST STUDIOS — SEMRUSH API CLIENT
 * 
 * Configured for Semrush Version 4 API (Personal Access Tokens with `semrtkn-pat-` prefix)
 * and backwards compatible with legacy API key query parameters.
 */

export interface SemrushConfig {
  apiKey: string;
  baseUrl: string;
}

export interface SemrushApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: number | string;
    message: string;
    details?: unknown;
  };
}

export class SemrushClient {
  private apiKey: string;
  private isV4Key: boolean;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.SEMRUSH_API_KEY || "";
    // V4 keys typically start with 'semrtkn-pat-' or similar prefixes
    this.isV4Key = this.apiKey.startsWith("semrtkn-");
  }

  /**
   * Returns true if an API key is configured.
   */
  public isConfigured(): boolean {
    return Boolean(this.apiKey && this.apiKey.trim().length > 0);
  }

  /**
   * Generates authorization headers.
   * Semrush v4 Personal Access Tokens require 'Authorization: Apikey <token>'.
   */
  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      Accept: "application/json",
      "User-Agent": "Outkast-Studios-SEO-Client/1.0",
    };

    if (this.isV4Key) {
      headers["Authorization"] = `Apikey ${this.apiKey}`;
    }

    return headers;
  }

  /**
   * Fetch domain summary from Semrush v4 API.
   */
  public async getDomainSummary(
    domain: string = "outkast-studio.vercel.app",
    country: string = "IN"
  ): Promise<SemrushApiResponse> {
    if (!this.isConfigured()) {
      return {
        success: false,
        error: { code: "MISSING_KEY", message: "SEMRUSH_API_KEY is not configured." },
      };
    }

    try {
      const url = `https://api.semrush.com/apis/v4/domain-analytics/v1/domain-summaries/monthly?url=${encodeURIComponent(
        domain
      )}&scope=ROOT_DOMAIN&country=${country}&device_type=DESKTOP`;

      const response = await fetch(url, {
        headers: this.getHeaders(),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: {
            code: response.status,
            message: data?.error?.message || `Semrush API returned HTTP ${response.status}`,
            details: data,
          },
        };
      }

      return { success: true, data };
    } catch (err) {
      return {
        success: false,
        error: {
          code: "REQUEST_FAILED",
          message: err instanceof Error ? err.message : "Unknown request error",
        },
      };
    }
  }

  /**
   * Fetch backlink summary for a URL or domain.
   */
  public async getBacklinks(
    url: string = "outkast-studio.vercel.app",
    limit: number = 10
  ): Promise<SemrushApiResponse> {
    if (!this.isConfigured()) {
      return {
        success: false,
        error: { code: "MISSING_KEY", message: "SEMRUSH_API_KEY is not configured." },
      };
    }

    try {
      const endpoint = `https://api.semrush.com/apis/v4/backlinks/v1/links?url=${encodeURIComponent(
        url
      )}&scope=ROOT_DOMAIN&limit=${limit}`;

      const response = await fetch(endpoint, {
        headers: this.getHeaders(),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: {
            code: response.status,
            message: data?.error?.message || `Semrush API returned HTTP ${response.status}`,
            details: data,
          },
        };
      }

      return { success: true, data };
    } catch (err) {
      return {
        success: false,
        error: {
          code: "REQUEST_FAILED",
          message: err instanceof Error ? err.message : "Unknown request error",
        },
      };
    }
  }
}

export const semrush = new SemrushClient();
