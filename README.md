# Generate Typing for requests

### Как использовать
```sh
$ TYPEGEN_DIR=$PWD/examples/types ts-node ./src
```

### API

### @Request

Делает запрос и генерирует типы из ответа

```ts
// @request http://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0
// ...
```

### @header key:value

Добавляет хэдеры к запросу

```ts
// @request http://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0
// @header User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36
// ...
```

### @lock

Фиксирует снэпшот типов, при последующем запуске не будет перезапрашивать типы.

```ts
// @request http://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0
// @lock
// ...
```
