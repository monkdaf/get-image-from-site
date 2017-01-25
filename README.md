# get-image-from-site
Get some images from some sites

## Setup

```
make install
```

## Main task (25.01.2017)
Need get some images from gyrotown.ru
Main goal is "http://gyrotown.ru/collection/giroskuter/hoverbot"

### page products:
```
class="image-cover" содержит href с ссылкой
```

```
<a class="image-cover" href="/product/giroskuter-hoverbot-a-12-chernyy" onclick="datalayerclk(780175, Гироскутер Hoverbot A-12 Черный, 24750.0, Hoverbot, Гироскутер, 10 кг, 15)">
```

### page with product
Последовательность `<div class="item"><a` - уникальна
в `<a>` в `href` - искомая ссылка на изображение

```
<div class="item">
               <a
                    data-zoom-id="zoom"
                    href="https://static-eu.insales.ru/images/products/1/5234/103052402/giroskuter-hoverbot-b-9-kamuflyazh-1.jpg"
                    data-image="https://static-eu.insales.ru/images/products/1/5234/103052402/large_giroskuter-hoverbot-b-9-kamuflyazh-1.jpg"
                >
                    <img src="https://static-eu.insales.ru/images/products/1/5234/103052402/thumb_giroskuter-hoverbot-b-9-kamuflyazh-1.jpg"/>
                </a>               
            </div>
```            
