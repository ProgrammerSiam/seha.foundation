# SEHA Foundation Metadata Structure

This directory contains all the SEO metadata for the SEHA Foundation website. Each page has its own metadata file to ensure proper SEO optimization.

## Metadata Files

- [home-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/home-metadata.ts) - Home page metadata
- [why-seha-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/why-seha-metadata.ts) - Why SEHA page metadata
- [mission-vision-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/mission-vision-metadata.ts) - Mission and Vision page metadata
- [programs-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/programs-metadata.ts) - Programs page metadata
- [fap-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/fap-metadata.ts) - Financial Assistance Program page metadata
- [get-involved-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/get-involved-metadata.ts) - Get Involved page metadata
- [donate-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/donate-metadata.ts) - Donate page metadata
- [volunteer-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/volunteer-metadata.ts) - Volunteer page metadata
- [events-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/events-metadata.ts) - Events page metadata
- [news-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/news-metadata.ts) - News page metadata
- [gallery-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/gallery-metadata.ts) - Gallery page metadata
- [resources-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/resources-metadata.ts) - Resources page metadata
- [careers-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/careers-metadata.ts) - Careers page metadata
- [annual-report-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/annual-report-metadata.ts) - Annual Report page metadata
- [impact-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/impact-metadata.ts) - Impact page metadata
- [contact-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/contact-metadata.ts) - Contact page metadata
- [sitemap-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/sitemap-metadata.ts) - Sitemap page metadata

## Index File

The [index.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/index.ts) file exports all metadata for easy importing across the application.

## Usage

Each page should import its specific metadata file:

```typescript
import { pageMetadata } from '@/app/metadata/page-metadata';
export const metadata = pageMetadata;
```

## Sitemap

The sitemap is available in two formats:
1. HTML format at `/sitemap`
2. XML format at `/sitemap.xml`

Both sitemaps are automatically generated and include all pages of the website.