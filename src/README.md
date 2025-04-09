# n8n-nodes-data-gouv

This is a n8n community node that allows you to integrate several French open data APIs into your workflows, including address search and company search.

**data.gouv.fr** is the official French government platform for open data. It provides APIs such as:
- [API Adresse](https://adresse.data.gouv.fr/api)
- [API Entreprise](https://recherche-entreprises.api.gouv.fr/)

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

To install this package, run:

```bash
npm install n8n-nodes-data-gouv
```

## Operations

### Address API (`api-adresse.data.gouv.fr`)
- **Search Address**: Find addresses by free-text query with optional filters (`street`,`postcode`, etc.)

### Company API (`recherche-entreprises.api.gouv.fr`)
- **Search Company**: Search for French companies using SIREN/SIRET, name, postal code, or activity codes.

## Compatibility

- Requires **n8n v1.84.3+**
- Tested on **n8n v1.84.3**

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [API Adresse documentation](https://adresse.data.gouv.fr/api)
* [API Entreprise documentation](https://recherche-entreprises.api.gouv.fr)
* [data.gouv.fr](https://www.data.gouv.fr/)
