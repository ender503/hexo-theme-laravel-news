
## 安装

``` bash
hexo init Blog 
cd Blog 
npm install
npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive
git clone https://github.com/sephXD/hexo-theme-laravel-news.git themes/laravel-news
```

## 启用

修改 `_config.yml` 的 `theme` 配置项为 `laravel-news`:

```yaml
theme: laravel-news
```

## 更新

``` bash
cd themes/apollo 
git pull
```

## License

MIT
