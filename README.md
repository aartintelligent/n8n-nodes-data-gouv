# n8n-nodes-data-gouv

## Resources

### Address

Search Address

![search_address.png](docs/search_address.png)

### Company

Search Company

![search_company.png](docs/search_company.png)

## Compilation

```shell
docker run -it --rm \
  --name nodejs \
  -u $(id -u):$(id -g) \
  -v $(pwd)/src:/src \
  -w /src \
  node:lts-bookworm npm install
```

```shell
docker run -it --rm \
  --name nodejs \
  -u $(id -u):$(id -g) \
  -v $(pwd)/src:/src \
  -w /src \
  node:lts-bookworm npm run build
```

```shell
docker run -it --rm \
  --name nodejs \
  -u $(id -u):$(id -g) \
  -v $(pwd)/src:/src \
  -w /src \
  node:lts-bookworm npm run dev
```
