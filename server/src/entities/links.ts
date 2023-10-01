import { Patch } from "./patch"
import { Reddit } from "./reddit"

export class Links {
  constructor(
    private readonly patch: Patch,
    private readonly reddit: Reddit,
    private readonly presskit: string | null,
    private readonly webcast: string | null,
    private readonly youtube_id: string | null,
    private readonly article: string | null,
    private readonly wikipedia: string | null
  ) {
    Object.freeze(this)
  }

  public static create(
    patch: Patch,
    reddit: Reddit,
    presskit: string | null,
    webcast: string | null,
    youtube_id: string | null,
    article: string | null,
    wikipedia: string | null
  ): Links {
    return new Links(patch, reddit, presskit, webcast, youtube_id, article, wikipedia)
  }

  get getPatch(): Patch {
    return this.patch
  }

  get getReddit(): Reddit {
    return this.reddit
  }

  get getPresskit(): string | null {
    return this.presskit
  }

  get getWebcast(): string | null {
    return this.webcast
  }

  get getYoutubeId(): string | null {
    return this.youtube_id
  }

  get getArticle(): string | null {
    return this.article
  }

  get getWikipedia(): string | null {
    return this.wikipedia
  }
}
