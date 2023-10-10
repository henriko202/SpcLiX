export class Reddit {
  private constructor(
    private readonly campaign: string | null,
    private readonly launch: string | null,
    private readonly media: string | null,
    private readonly recovery: string | null
  ) {
    Object.freeze(this)
  }

  public static create(campaign: string | null, launch: string | null, media: string | null, recovery: string | null): Reddit {
    return new Reddit(campaign, launch, media, recovery)
  }

  get getCampaign(): string | null {
    return this.campaign
  }

  get getLaunch(): string | null {
    return this.launch
  }

  get getMedia(): string | null {
    return this.media
  }

  get getRecovery(): string | null {
    return this.recovery
  }
}
