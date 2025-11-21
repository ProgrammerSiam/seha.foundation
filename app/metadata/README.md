# SEO Metadata Structure

This directory contains SEO metadata for all pages of the SEHA Foundation website. Each page has its own metadata file with Bangla content optimized for search engines.

## Metadata Files

- [home-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/home-metadata.ts) - Main homepage metadata
- [why-seha-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/why-seha-metadata.ts) - Why SEHA Foundation page metadata
- [mission-vision-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/mission-vision-metadata.ts) - Mission and Vision page metadata
- [programs-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/programs-metadata.ts) - Programs and Initiatives page metadata
- [get-involved-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/get-involved-metadata.ts) - Get Involved page metadata
- [contact-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/contact-metadata.ts) - Contact page metadata
- [donate-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/donate-metadata.ts) - Donate page metadata
- [volunteer-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/volunteer-metadata.ts) - Volunteer page metadata
- [events-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/events-metadata.ts) - Events page metadata
- [news-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/news-metadata.ts) - News page metadata
- [gallery-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/gallery-metadata.ts) - Gallery page metadata
- [resources-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/resources-metadata.ts) - Resources page metadata
- [careers-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/careers-metadata.ts) - Careers page metadata
- [annual-report-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/annual-report-metadata.ts) - Annual Report page metadata
- [impact-metadata.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/impact-metadata.ts) - Impact and Achievements page metadata

## Usage

To use metadata in a page component:

```typescript
import { specificPageMetadata } from '../metadata';

export const metadata = specificPageMetadata;

export default function PageComponent() {
  // Page content
}
```

## Index File

The [index.ts](file:///c:/Developments/All-Project-Learn-Prectice/agensy,product/MY/Products/Non-Gov/SEHA.Foundation/seha.foundation/app/metadata/index.ts) file exports all metadata for easy importing:

```typescript
import { homeMetadata, programsMetadata, contactMetadata } from '../metadata';
```