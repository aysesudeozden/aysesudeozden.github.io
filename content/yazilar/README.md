# Yazılar nasıl eklenir?

Her yazı bu klasörde bir `.md` (Markdown) dosyası.

1. Bu klasörde yeni bir dosya oluştur, örn. `gece-yarisi-notlari.md`
   - Dosya adı yazının adresi olur: `aysesudeozden.github.io/yazilar/gece-yarisi-notlari`
   - Dosya adında Türkçe karakter ve boşluk kullanma (ç→c, ş→s, ğ→g, ı→i, ö→o, ü→u, boşluk→-)
2. En üste şu bilgileri yaz:

```
---
title: Gece Yarısı Notları
date: 2026-11-15
summary: Listede ve yazının başında görünen kısa bir cümle.
tags: [kişisel, güvenlik]
lang: tr
draft: false
---
```

3. Altına yazını Markdown ile yaz (örneği `ornek-yazi.md` dosyasında).
4. Commit + push → GitHub Actions siteyi kendisi yayınlar.

## Alanlar

| alan      | açıklama                                                         |
| --------- | ---------------------------------------------------------------- |
| `title`   | Yazının başlığı                                                  |
| `date`    | `YYYY-AA-GG` biçiminde. Yazılar yeniden eskiye sıralanır         |
| `summary` | İsteğe bağlı, tek cümlelik özet                                  |
| `tags`    | İsteğe bağlı, köşeli parantez içinde virgülle ayrılmış           |
| `lang`    | `tr` ya da `en` (varsayılan `tr`)                                |
| `draft`   | `true` ise yazı sadece `npm run dev` ile yerelde görünür, yayınlanmaz |

## Görsel eklemek

Görseli `public/yazilar/` klasörüne koy, yazıda şöyle kullan:

```md
![açıklama](/yazilar/gorsel.jpg)
```

Not: Adı `_` ile başlayan dosyalar ve bu README yazı olarak sayılmaz.
