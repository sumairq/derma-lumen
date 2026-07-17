import type { ImageAsset } from "@/lib/images";

/**
 * Before/after cases for the results galleries on service pages.
 *
 * PLACEHOLDER IMAGERY: these pairs are graded variants of the site's stock
 * photos so the gallery is fully functional. Before launch, replace them with
 * real, consented patient photography (same pose/lighting per pair) and update
 * the copy to match the actual case.
 */
export type ResultCase = {
  /** Service slug this case belongs to (see content/services). */
  service: string;
  title: string;
  /** Treatment cadence/timeframe shown under the slider. */
  detail: string;
  before: ImageAsset;
  after: ImageAsset;
};

export const results: ResultCase[] = [
  {
    "service": "acne-treatment",
    "title": "Adult hormonal acne program",
    "detail": "16 weeks · topical + oral plan",
    "before": {
      "src": "/images/results/acne-treatment-before.jpg",
      "alt": "Before — adult hormonal acne program",
      "width": 1200,
      "height": 900,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAE/8QAHhAAAgICAgMAAAAAAAAAAAAAAQIDEQAEBUESEyH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECMTL/2gAMAwEAAhEDEQA/AC14VLqHrxv7eW9x/p2I5YCiROADGLNnuiesaHrNK3LqW5srZBxVqBHLP//Z"
    },
    "after": {
      "src": "/images/results/acne-treatment-after.jpg",
      "alt": "After — adult hormonal acne program",
      "width": 1200,
      "height": 900,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAF/8QAIBABAAIBBAIDAAAAAAAAAAAAAQIDEQAEBSExQRIjMv/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAHBEAAQMFAAAAAAAAAAAAAAAAAwABAgQRIVHh/9oADAMBAAIRAxEAPwANpTGV0CePipnPjSclxpRdXdt2uFMwGqIuX3hfWrb/ALj3jvya0Jfdx62LJiKLpjYJFRUz3FPfF//Z"
    }
  },
  {
    "service": "botox",
    "title": "Botox — forehead & glabella",
    "detail": "2 weeks after a single treatment",
    "before": {
      "src": "/images/results/botox-before.jpg",
      "alt": "Before — botox — forehead & glabella",
      "width": 1200,
      "height": 900,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgMF/8QAIRAAAgICAQQDAAAAAAAAAAAAARECAwAEMRMUFiFBUdH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABIf/aAAwDAQACEQMRAD8A3O9N9ojEEVtS+zlbpwbYiEveH9Xat8h2ddjpRZAXHH7iE1xkAZBkj5wisf/Z"
    },
    "after": {
      "src": "/images/results/botox-after.jpg",
      "alt": "After — botox — forehead & glabella",
      "width": 1200,
      "height": 900,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgP/xAAgEAACAgICAgMAAAAAAAAAAAABAgMRAAQxQRITFlHR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAABEQD/2gAMAwEAAhEDEQA/AEY3TPKFUER3TfZy0zoDdhRXeG9Tbl+S7Wt5D1LZVa44/cSmNWAZhZI7wi11GQ3/2Q=="
    }
  },
  {
    "service": "chemical-peels",
    "title": "Medium-depth peel series",
    "detail": "After 3 of 3 peels · 6 weeks apart",
    "before": {
      "src": "/images/results/chemical-peels-before.jpg",
      "alt": "Before — medium-depth peel series",
      "width": 1200,
      "height": 900,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAID/8QAIBAAAgICAQUBAAAAAAAAAAAAAQIDBAARIQUTMTJCkf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AdLSFisIxM0XKttNjjFLC8MaL3WkY+zNr9yunwo1aJ2BLMo2d5rYAhrkJ8+N5B//Z"
    },
    "after": {
      "src": "/images/results/chemical-peels-after.jpg",
      "alt": "After — medium-depth peel series",
      "width": 1200,
      "height": 900,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBf/EACIQAAIBAwIHAAAAAAAAAAAAAAECAwAEEQUhEhMiMUJRcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A1JrAXNsI1maLdWzHkbeqrSF4IkTnNKxPUzcOftFp0KPawuwJZkGTmnXIEFsQnh2zUH//2Q=="
    }
  },
  {
    "service": "laser-skin-resurfacing",
    "title": "Fractional laser resurfacing",
    "detail": "3 months post-treatment",
    "before": {
      "src": "/images/results/laser-skin-resurfacing-before.jpg",
      "alt": "Before — fractional laser resurfacing",
      "width": 1200,
      "height": 900,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAMF/8QAIBAAAgEEAQUAAAAAAAAAAAAAAQIRAAMEMRIFIUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQEAAwAAAAAAAAAAAAAAAAAAAQIR/9oADAMBAAIRAxEAPwDUTqmPk3zatq3NJkkRB9VZ7iB5iTrtqhG0gy1biJcEN9pCgK0DR8UdKav/2Q=="
    },
    "after": {
      "src": "/images/results/laser-skin-resurfacing-after.jpg",
      "alt": "After — fractional laser resurfacing",
      "width": 1200,
      "height": 900,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAgEAACAQMEAwAAAAAAAAAAAAABAhEAAwQFEjFBIVFh/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABcRAQADAAAAAAAAAAAAAAAAAAEAAjH/2gAMAwEAAhEDEQA/ALSatj5WQbNpW3pMswiD6pD3EDzEmI8cVPNlBmq20TcBDfY7pSqFYAcHqiLrsRoGT//Z"
    }
  },
  {
    "service": "anti-aging-treatment",
    "title": "Full-face rejuvenation plan",
    "detail": "6 months into a staged plan",
    "before": {
      "src": "/images/results/anti-aging-treatment-before.jpg",
      "alt": "Before — full-face rejuvenation plan",
      "width": 1200,
      "height": 900,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAgT/xAAgEAACAQQBBQAAAAAAAAAAAAABAhEAAxIhIkFhkdHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEQMRAD8AdlrosAsyt3IH00n5OXVQVXQOQiPdHLN4YAy3jrU15imaLpd6oqQv/9k="
    },
    "after": {
      "src": "/images/results/anti-aging-treatment-after.jpg",
      "alt": "After — full-face rejuvenation plan",
      "width": 1200,
      "height": 900,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAgT/xAAjEAACAAUCBwAAAAAAAAAAAAABAgADERIhBGETIkFRkcHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQP/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwCiQ04adSzq25A+rDfmmF1VSqigNwpTud4N3EejgG5vHX1Ek9il6Lhc4gO1NAF//9k="
    }
  },
  {
    "service": "microneedling",
    "title": "RF microneedling — acne scarring",
    "detail": "After 3 sessions · 4 weeks apart",
    "before": {
      "src": "/images/results/microneedling-before.jpg",
      "alt": "Before — rf microneedling — acne scarring",
      "width": 1200,
      "height": 900,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQL/xAAiEAACAQIFBQAAAAAAAAAAAAABAhEAAwUSITFBBBQiUZH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAADH/2gAMAwEAAhEDEQA/AH+4TOyzGXk7UdiFl+pdxaS2QwHmRqI9VGEKztcZ7juy3Msk7iOflJooBOkmdCdxRTH/2Q=="
    },
    "after": {
      "src": "/images/results/microneedling-after.jpg",
      "alt": "After — rf microneedling — acne scarring",
      "width": 1200,
      "height": 900,
      "blurDataURL": "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQIG/8QAIhAAAgECBQUAAAAAAAAAAAAAAQIDABEFEiExQQQUIlGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQACAwAAAAAAAAAAAAAAAAAAEQEhMf/aAAwDAQACEQMRAD8A03cJnZL2y8najcSgfqpJBFHGQwHmw1FvVRgytI0rSSu7JJluTuLc/KVjUKToCb6E7ip0Upo//9k="
    }
  }
];

export const getResultsForService = (slug: string) =>
  results.filter((r) => r.service === slug);
